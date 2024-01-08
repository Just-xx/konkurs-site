import Settings from "../../Settings/Settings";
import { useContext } from "react";
import { SettingsCreatorContext } from "../../../../contexts/SettingsCreatorContext";
import { createSettingsBlocks } from "../../Settings/createSettingsBlocks";

export default function CreatorSettings() {
  const settingsCreator = useContext(SettingsCreatorContext);

  return <Settings blocks={createSettingsBlocks(settingsCreator.settings, settingsCreator.updateOption)} />;
}
