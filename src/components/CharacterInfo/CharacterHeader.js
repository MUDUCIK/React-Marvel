import styled from 'styled-components'

export const CharacterHeader = styled.div`
  display: flex;

  img {
    max-width: 100%;
    min-height: 100%;
    object-fit: contain;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;

    margin-left: 1.5625rem;

    font-size: 1.5rem;

    span {
      font-size: 1.125rem;
      font-weight: 700;
      text-transform: uppercase;

      padding: 0 0 0.625rem;
    }

    div {
      margin: 0;

      min-width: 100px;

      gap: 0.625em 0;
    }
  }
`
