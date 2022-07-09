import styled from 'styled-components'

export const Style = styled.button`
  display: flex;
  align-items: flex-start;

  color: ${({ theme }) => theme.colors.mainTextWhite};
  font-size: 1.5rem;

  min-height: 320px;
  width: 200px;

  padding: 0;

  background-color: ${({ theme }) => theme.colors.mainBgColor};
  box-shadow: 5px 5px 0.45em rgba(0, 0, 0, 0.25);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  outline: none;
  border: none;

  &:focus {
    transform: translateY(-10px);

    box-shadow: 0 5px 20px 3px ${({ shadowColor }) => shadowColor};
  }

  &:hover {
    transform: translateY(-10px);

    box-shadow: 0 5px 20px 2px ${({ shadowColor }) => shadowColor};
  }

  a {
    display: flex;
    flex-direction: column;
    gap: 0.9375em 0;

    height: 100%;
    width: 100%;

    padding: 0 0 1.25rem;
  }

  img {
    height: 200px;
    width: 100%;

    pointer-events: none;
  }

  .name {
    margin: 0 0.9375em 0 0.9375em;

    text-transform: uppercase;
    text-align: left;
    line-height: 1.2;
  }
`
