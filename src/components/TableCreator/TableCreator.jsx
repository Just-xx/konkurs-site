import Title from "../Title/Title";
import {
  TableCreatorContainer,
  TableFieldsWrapper,
} from "./TableCreator.style";
import TableField from "./TableField/TableField";
import Button, { IconButton } from "../Button/Button";
import { useState, useContext } from "react";
import { TableCreatorContext } from "../../contexts/TableCreatorContext";
import AddtionModal from "./AdditionModal/AddtionModal";
import CreatorSettings from "./CreatorSettings/CreatorSettings";

export default function TableCreator() {
  const tableCreator = useContext(TableCreatorContext);
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
        <Button noIcon to='/create-table-next' onClick={tableCreator.saveToIDB}>Przejdź dalej<i className="fa-solid fa-angle-right" /></Button>
      </TableCreatorContainer>
    </>
  );
}
