import Title from "../../Title/Title";
import {
  TableFieldsWrapper
} from "./TableCreator.style";
import { TableCreatorContainer } from "../Creator.styles";
import TableField from "./TableField/TableField";
import Button, { IconButton } from "../../Button/Button";
import { useState, useContext } from "react";
import { TableCreatorContext } from "../../../contexts/TableCreatorContext";
import AddtionModal from "./AdditionModal/AddtionModal";
import CreatorSettings from "./CreatorSettings/CreatorSettings";
import { SettingsCreatorContext } from "../../../contexts/SettingsCreatorContext";

export default function TableCreator() {
  const tableCreator = useContext(TableCreatorContext);
  const settingsCreator = useContext(SettingsCreatorContext);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <AddtionModal
        visible={modalVisible}
        close={() => setModalVisible(false)}
      />
      <TableCreatorContainer>
        <Title center>Stwórz układ twojej nowej tabeli</Title>
        <TableFieldsWrapper>
          {tableCreator.fields.map(({ type, ...field }) => (
            <TableField
              id={field.id}
              key={field.id}
              name={field.name}
              type={type}
            />
          ))}
          <IconButton
            onClick={() => setModalVisible(true)}
            icon="fa-solid fa-plus"
          />
        </TableFieldsWrapper>
        <CreatorSettings />
        <Button noIcon onClick={() => tableCreator.saveToIDB(settingsCreator.settings)}>Przejdź dalej<i className="fa-solid fa-angle-right" /></Button>
      </TableCreatorContainer>
    </>
  );
}
