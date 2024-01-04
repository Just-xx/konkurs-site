import { InputWrapper, Label } from "./Inputs.style";
import PropTypes from "prop-types";
import ReactSelect from "react-select";
import { lighten } from "polished";
import { theme } from "../../theme";

export default function Select({ label, labelId, options, labelSec, short, ...props }) {
  return (
    <InputWrapper $short={short}>
      <Label $secondary={labelSec} htmlFor={labelId}>{label}</Label>
      <ReactSelect
        styles={{
          control: bs => ({
            ...bs,
            height: theme.spacings.xxl,
            paddingLeft: theme.spacings.sm,
            fontWeight: 500,
            width: short ? "150px" : "100%",
            backgroundColor: "transparent",
            border: short ? `1px solid ${theme.colors.borderLight}` : bs.border,
            cursor: "pointer",
          }),
        }}
        theme={baseTheme => ({
          ...baseTheme,
          borderRadius: 10,
          colors: {
            ...baseTheme.colors,
            primary: theme.colors.primary,
            primary25: lighten(0.4, theme.colors.primary),
            primary50: lighten(0.5, theme.colors.primary),
            primary75: lighten(0.75, theme.colors.primary),
            neutral0: theme.colors.background,
            neutral5: theme.colors.background,
            neutral10: theme.colors.background,
            neutral20: theme.colors.borderLight,
            neutral30: theme.colors.borderLight,
            neutral40: theme.colors.background,
            neutral50: theme.colors.textLight,
            neutral60: theme.colors.textLight,
            neutral70: theme.colors.textLight,
            neutral80: theme.colors.textLight,
            neutral90: theme.colors.textLight,
          },
        })}
        options={options} 
        {...props}
      ></ReactSelect>
    </InputWrapper>
  );
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  labelId: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  labelSec: PropTypes.bool,
  short: PropTypes.bool,
};
