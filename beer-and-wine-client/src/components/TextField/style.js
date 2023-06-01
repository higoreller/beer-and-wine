// styles.js
import styled, { css } from "styled-components";
import { theme } from "./../../styles/theme";

export const Wrapper = styled.div`
  ${({ error, disabled }) => css`
    ${error && wrapperModifiers.error()}
    ${disabled && wrapperModifiers.disabled()}
  `}
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: ${({ iconPosition }) =>
    iconPosition === "right" ? "row-reverse" : "row"};
  align-items: center;
  background: ${theme.colors.lightGray};
  border-radius: 0.2rem;
  padding: 0 ${theme.spacings.xsmall};
  margin: ${theme.spacings.xxsmall};
  border: 0.2rem solid;
  border-color: ${theme.colors.lightGray};
  &:focus-within {
    box-shadow: 0 0 0.5rem ${theme.colors.primary};
  }
`;

export const Input = styled.input`
  color: ${theme.colors.black};
  font-family: ${theme.font.family};
  font-size: ${theme.font.sizes.medium};
  padding: ${theme.spacings.xxsmall};
  background: transparent;
  border: 0;
  outline: none;
  flex-grow: 1;

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 ${theme.spacings.small} ${theme.colors.lightGray}
      inset;
    filter: none;
  }
`;

export const Label = styled.label`
  font-size: ${theme.font.sizes.small};
  color: ${theme.colors.black};
  cursor: pointer;
`;

export const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.2rem;
  color: ${theme.colors.gray};
`;

export const Error = styled.p`
  color: ${theme.colors.red};
  font-size: ${theme.font.sizes.xsmall};
`;

const wrapperModifiers = {
  error: () => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }
    ${IconWrapper},
    ${Label} {
      color: ${theme.colors.red};
    }
  `,
  disabled: () => css`
    ${Label},
    ${Input},
    ${IconWrapper} {
      cursor: not-allowed;
      color: ${theme.colors.gray};
      &::placeholder {
        color: currentColor;
      }
    }
  `,
};
