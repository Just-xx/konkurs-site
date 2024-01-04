import Settings from "../Settings/Settings";
import { useCallback, useContext, useEffect } from "react";
import { TableCreatorContext } from "../../../contexts/TableCreatorContext";
import { SETTINGS } from "../../../constants/SETTINGS";

export default function CreatorSettings() {

  const tableCreator = useContext(TableCreatorContext);

  const getBlocks = useCallback(() => {
    const blocks = tableCreator.settings.map(group => [...group.map(opt => ({
      id: opt.id,
      label: opt.label,
      type: opt.type,
      state: [opt.value, newVal => tableCreator.updateOption(opt.id, newVal)],
      selectOptions: opt.selectOptions,
    }))])

    return blocks;
  }, [tableCreator])


  return (
    <Settings blocks={getBlocks()}/>
  );
}
