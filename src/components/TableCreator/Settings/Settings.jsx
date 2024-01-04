import { SettingsContainer, OptionWrapper, ExpandIcon } from "./Settings.style";
import PropTypes from "prop-types";
import Title from "../../Title/Title";
import Toggle from "../../Inputs/Toggle";
import Select from "../../Inputs/Select";
import TextInput from "../../Inputs/TextInput";
import { Fragment, useCallback } from "react";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function Settings({ blocks }) {
  const [expanded, setExpanded] = useState(true);

  function getOption(option) {
    switch (option.type) {
      case "toggle":
        return (
          <Toggle
            label={option.label}
            labelId={option.id}
            state={option.state}
          />
        );
      case "select":
        return (
          <Select
            onChange={val => option.state[1](val)}
            labelSec
            short
            label={option.label}
            labelId={option.id}
            options={option.selectOptions}
            value={option.state[0]}
          />
        );
      case "text":
        return <TextInput />;
      default:
        return null;
    }
  }

  const getElemntsOption = useCallback(() => {
    return blocks.map((block, index) => {
      return (
        <OptionWrapper key={index}>
          {block.map(opt => (
            <Fragment key={opt.id}>{getOption(opt)}</Fragment>
          ))}
        </OptionWrapper>
      );
    });
  }, [blocks]);

  return (
    <SettingsContainer
      $collapsed={!expanded}
      onClick={() => !expanded && setExpanded(true)}
    >
      <Title sm>Ustawienia</Title>
      <AnimatePresence>
        {expanded ? (
          <ExpandIcon
            onClick={() => setExpanded(false)}
            $expanded={expanded}
            className="fa-solid fa-angle-up"
          />
        ) : (
          <ExpandIcon $expanded={expanded} className="fa-solid fa-angle-down" />
        )}
        {expanded && getElemntsOption()}
      </AnimatePresence>
    </SettingsContainer>
  );
}

Settings.propTypes = {
  blocks: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        options: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            value: PropTypes.object,
            state: PropTypes.array,
            selectOptions: PropTypes.arrayOf(
              PropTypes.shape({
                value: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
              })
            ),
          })
        ),
      })
    )
  ),
};
