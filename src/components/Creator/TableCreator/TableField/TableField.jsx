import { TableFieldContainer, TableFieldBadge, TableFieldName, RemoveButton, FunctionButtons, EditButton } from './TableField.style'
import PropTypes from 'prop-types'
import { useState, useContext } from 'react';
import { AnimatePresence } from 'framer-motion';
import { TableCreatorContext } from '../../../../contexts/TableCreatorContext';

export default function TableField({ type, name, id }) {
  
  const tableCreator = useContext(TableCreatorContext);
  const [hovered, setHovered] = useState(false);
  
  function handleRemove(e) {
    tableCreator.removeField(e.target.dataset.id);
  }

  return (
    <TableFieldContainer data-id={id} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} >
      <TableFieldBadge $color={type.color} $backgroundColor={type.backgroundColor}>{type.text}</TableFieldBadge>
      <TableFieldName>{name}</TableFieldName>
      <AnimatePresence>
        {(hovered) && <FunctionButtons initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <RemoveButton data-id={id} onClick={handleRemove} className="fas fa-trash-alt" />
            <EditButton data-id={id} className="fas fa-edit" />
          </FunctionButtons>}
      </AnimatePresence>
    </TableFieldContainer>
  )
}

TableField.propTypes = {
  type: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
}
