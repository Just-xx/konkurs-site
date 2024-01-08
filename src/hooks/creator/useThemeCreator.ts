import { EffectCallback, useEffect, useState } from "react";
import { OptionsGroup, SelectVal } from "../../types/Settings";
import { THEME_SETTINGS } from "../../constants/THEME_SETTINGS";
import { useSettingsFile } from "./useSettingsFile";
import { useParams, useNavigate } from "react-router-dom";

import { del, get, set } from "idb-keyval";
import { ImgsStore, TablesStore } from "../../utils/idbs";

import predef1 from "../../assets/predef/1.png";
import predef2 from "../../assets/predef/2.png";
import predef3 from "../../assets/predef/3.png";

import { TableStoreObject } from "../../types/Table";

export function useThemeCreator() {
  const {
    settings: themeSettings,
    setSettings: setThemeSettings,
    getOption,
    updateOption,
    lastChange,
  } = useSettingsFile(THEME_SETTINGS as OptionsGroup[]);

  const [bannerImg, setBannerImg] = useState<string>("");
  const [tableStore, setTableStore] = useState<TableStoreObject>();

  const { tableId } = useParams<{ tableId: string }>();
  const naviagte = useNavigate();

  function verifyTableId() {
    get(tableId as IDBValidKey, TablesStore)
      .then(table => {
        if (!table) naviagte("/create/table");
        setTableStore(table as TableStoreObject);
      })
      .catch(() => naviagte("/create/table"));
    return tableId;
  }

  useEffect(() => {
    verifyTableId();

    addEventListener("img-saved", e => {


      setBannerImg((e as CustomEvent).detail.base64);
      updateOption("fileSelect", (e as CustomEvent).detail.id);

      set((e as CustomEvent).detail.id, (e as CustomEvent).detail.base64, ImgsStore);
      
      setTableStore(prev => {
        if (prev?.uploadedImg) del(prev?.uploadedImg as string, ImgsStore);
        return { ...prev as TableStoreObject, uploadedImg: (e as CustomEvent).detail.id }
      })

    });

  }, []);

  useEffect(() => {
    if (lastChange === "banerPredefinded") {
      const selectedImg = getOption("banerPredefinded")?.value || { value: "predef1" };
      switch ((selectedImg as SelectVal | undefined)?.value) {
        case "predef1":
          setBannerImg(predef1);
          break;
        case "predef2":
          setBannerImg(predef2);
          break;
        case "predef3":
          setBannerImg(predef3);
          break;
      }
    }
  }, [themeSettings]);

  function saveToIDB() {
    if (!tableStore) return;

    const newTableStore: TableStoreObject = {
      ...tableStore,
      theme: themeSettings.flat(),
      state: "approved",
    };

    set(tableId as IDBValidKey, newTableStore, TablesStore).then(() => naviagte(`/?tableAdded=${tableId}`));
  }

  return {
    themeSettings,
    updateOption,
    getOption,
    bannerImg,
    saveToIDB
  };
}
