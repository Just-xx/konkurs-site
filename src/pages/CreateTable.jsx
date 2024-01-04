import Header from "../components/Header/Header";
import TableCreator from "../components/TableCreator/TableCreator";
import { useTableCreator } from "../hooks/useTableCreator";
import { TableCreatorContext } from "../contexts/TableCreatorContext";

export default function CreateTable() {
  const tableCreator = useTableCreator();

  return (
    <>
      <TableCreatorContext.Provider value={tableCreator}>
        <Header hideNav />
        <TableCreator />
      </TableCreatorContext.Provider>
    </>
  );
}
