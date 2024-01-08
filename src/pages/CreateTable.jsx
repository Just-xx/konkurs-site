import Header from "../components/Header/Header";
import TableCreator from "../components/Creator/TableCreator/TableCreator";

import { useTableCreator } from "../hooks/creator/useTableCreator";
import { useSettingsCreator } from "../hooks/creator/useSettingsCreator";

import { TableCreatorContext } from "../contexts/TableCreatorContext";
import { SettingsCreatorContext } from "../contexts/SettingsCreatorContext";

export default function CreateTable() {
  const tableCreator = useTableCreator();
  const settingsCreator = useSettingsCreator(tableCreator);

  return (
    <>
      <TableCreatorContext.Provider value={tableCreator}>
        <SettingsCreatorContext.Provider value={settingsCreator}>
          <Header hideNav />
          <TableCreator />
        </SettingsCreatorContext.Provider>
      </TableCreatorContext.Provider>
    </>
  );
}
