import styled from 'styled-components'

export const Style = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  cursor: pointer;

  &:hover {
    .comics-name {
      color: ${({ theme }) => theme.colors.mainHoverRed};
    }
  }

  .comics-image {
    height: auto;
    min-height: 360px;
    max-width: 300px;
    object-fit: contain;

    margin-bottom: auto;

    user-select: none;
    pointer-events: none;
  }

  .comics-name {
    font-size: 14px;
    font-weight: bold;
    line-height: 16px;
  }

  .comics-price {
    font-size: 14px;
    font-weight: bold;
    line-height: 16px;

    color: ${({ theme }) => theme.colors.mainBgGrey};
  }
`
