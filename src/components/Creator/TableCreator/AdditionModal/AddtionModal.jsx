import Modal from "../../../Modal/Modal";
import TextInput from "../../../Inputs/TextInput";
import Select from "../../../Inputs/Select";
import { FIELD_TYPES } from "../../../../constants/FIELD_TYPES";
import PropTypes from "prop-types";
import { useState, useContext } from "react";
import { TableCreatorContext } from "../../../../contexts/TableCreatorContext";
import styled from "styled-components";
import { toast } from "react-toastify";

let fieldOtions = Object.values(FIELD_TYPES).map(type => ({
  ...type,
  label: type.text,
  value: type.name,
}));

export const ModalInputsWrapper = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: flex-start;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.lg};
  width: 100%;
  margin-top: ${({ theme }) => theme.spacings.xl};
  margin-bottom: ${({ theme }) => theme.spacings.lg};
`;

export default function AddtionModal({ visible, close }) {
  const tableCreator = useContext(TableCreatorContext);

  const [fieldType, setFieldType] = useState(fieldOtions[0]);
  const [fieldName, setFieldName] = useState("");
  const [fieldFormula, setFieldFormula] = useState("");

  function handleSubmition() {
    if (fieldName.length === 0) {
      return toast.error("Musisz podać nazwę pola!");
    }

    if (fieldType.value === FIELD_TYPES.FORMULA.name && fieldFormula.length === 0) {
      return toast.error("Wszystkie pola muszą być wypełnione!");
    }

    const finalFieldType = Object.values(FIELD_TYPES).find(type => type.name === fieldType.value);

    tableCreator.addField(finalFieldType, fieldName);
    close();
  }

  return (
    <Modal title="Dodaj nowe pole" visible={visible} close={close} action={handleSubmition}>
      <ModalInputsWrapper>
        <Select
          label="Typ pola"
          labelId="typ"
          onChange={val => setFieldType(val)}
          value={fieldType}
          options={fieldOtions}
        />
        {FIELD_TYPES.FORMULA.name === fieldType.value && (
          <TextInput
            state={[fieldFormula, setFieldFormula]}
            label="Formuła"
            labelId="formula"
            placeholder="np. {Wynik}-{Punkty}"
          />
        )}
        <TextInput state={[fieldName, setFieldName]} label="Nazwa" labelId="nazwa" placeholder="np. Wynik" />
      </ModalInputsWrapper>
    </Modal>
  );
}

AddtionModal.propTypes = {
  visible: PropTypes.bool,
  close: PropTypes.func,
};
