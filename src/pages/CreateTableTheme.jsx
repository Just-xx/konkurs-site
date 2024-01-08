import Header from "../components/Header/Header";
import { useThemeCreator } from "../hooks/creator/useThemeCreator";
import { ThemeCreatorContext } from "../contexts/ThemeCreatorContext";
import TableThemeCreator from "../components/Creator/TableThemeCreator/TableThemeCreator";

export default function CreateTableTheme() {

  const themeCreator = useThemeCreator();

  return (
    <>
      <ThemeCreatorContext.Provider value={themeCreator}>
        <Header hideNav />
        <TableThemeCreator />
      </ThemeCreatorContext.Provider>
    </>
  );
}
