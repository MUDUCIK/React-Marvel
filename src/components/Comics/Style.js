import styled from 'styled-components'
import { device } from '../../styles/styled-components'

export const Style = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 230px;

  cursor: pointer;

  &:hover {
    .comics-name {
      color: ${({ theme }) => theme.colors.mainHoverRed};
    }
  }

  .comics-image {
    height: 350px;
    max-width: 100%;
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

  @media ${device.bootstrapLarge} {
    .comics-image {
    }
  }
`
