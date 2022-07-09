import styled from 'styled-components'

import { device } from '../../styles/styled-components'

export const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.875rem 20px;

  max-width: 650px;

  padding: 0;
  margin: 0;

  list-style-type: none;

  li {
    display: flex;
  }

  @media ${device.bootstrapLarge} {
    justify-content: center;
    margin-top: clamp(20px, 10vh, 50px);
  }
`
