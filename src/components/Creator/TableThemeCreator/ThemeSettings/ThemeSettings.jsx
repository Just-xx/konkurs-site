import Settings from "../../Settings/Settings";
import { useContext } from "react";
import { ThemeCreatorContext } from "../../../../contexts/ThemeCreatorContext";
import { createSettingsBlocks } from "../../Settings/createSettingsBlocks";

export default function CreatorSettings() {

  const themeCreator = useContext(ThemeCreatorContext);

  return (
    <Settings blocks={createSettingsBlocks(themeCreator.themeSettings, themeCreator.updateOption)}/>
  );
}
