import styled from 'styled-components'

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  text-transform: uppercase;
  border: 5px solid transparent;

  width: 100%;
  max-width: 6.875em;

  padding: 0.3125em 0;

  font-size: 1rem;
  color: ${({ theme: { colors } }) => colors.mainTextWhite};
  text-decoration: none;

  cursor: pointer;

  background-color: ${({ grey, theme: { colors } }) =>
    grey ? colors.mainBgGrey : colors.mainRedColor};
  clip-path: polygon(15% 0, 100% 0, 100% 70%, 85% 100%, 0 100%, 0% 35%);
  transition: background-color 0.3s ease;

  &:disabled {
    background-color: ${({ theme: { colors } }) => colors.mainBgGrey};
    cursor: not-allowed;

    &:hover {
      background-color: ${({ theme: { colors } }) => colors.mainBgGrey};
    }
  }

  &:hover {
    background-color: ${({ grey, theme }) =>
      grey ? theme.colors.mainHoverGrey : theme.colors.mainHoverRed};
    color: ${({ theme: { colors } }) => colors.mainTextWhite};
  }

  &:focus {
    outline: none;
    border: 5px solid
      ${({ grey, theme }) => (grey ? theme.colors.mainHoverRed : theme.colors.mainHoverGrey)};
  }
`
