import styled from 'styled-components'

export const CharacterBody = styled.div`
  margin-top: 0.9375rem;

  p {
    font-size: 14px;
    line-height: 1.2;
  }

  span {
    display: block;

    margin-top: 0.625em;

    font-weight: 700;
    font-size: 1.125rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 0.625rem 0;

    list-style-type: none;
    padding: 0;

    margin-top: 0.625rem;

    li {
      display: flex;
      box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
      padding: 5px 10px;
    }
  }
`
