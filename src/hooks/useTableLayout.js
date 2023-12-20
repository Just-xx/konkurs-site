import { useStateStorage } from "./useStateStorage";

export const DEFAULT_LAYOUT = ["Miejsce", "Punkty", "Klasa"];

export function useTableLayout() {
  const [approved, setApproved] = useStateStorage(
    "table-layout-approved",
    false
  );
  const [layout, setLayout] = useStateStorage("table-layout", DEFAULT_LAYOUT);

  function addColumn(columnName) {
    if (layout.length > 10) return false;
    setLayout([...layout, columnName]);
    return true;
  }

  function setColumnName(index, newName) {
    if (layout.filter((a, i) => i !== parseInt(index)).indexOf(newName) + 1)
      return false;

    const newState = [...layout];
    newState[parseInt(index)] = newName;
    setLayout(newState);
  }

  function deleteColumn(index) {
    if (layout.length <= 1) return;
    const newState = layout.filter((cname, i) => i !== parseInt(index));
    setLayout(newState);
  }

  function approve() {
    setApproved(true);
  }

  function disapprove() {
    setApproved(false);
  }

  function reset() {
    setApproved(false);
    setLayout(DEFAULT_LAYOUT);
  }

  return {
    layout,
    approved,
    addColumn,
    setColumnName,
    deleteColumn,
    approve,
    disapprove,
    reset,
  };
}
