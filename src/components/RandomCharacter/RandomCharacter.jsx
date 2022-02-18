import styled from "styled-components"

import {device} from "../../styles/styled-components/queries"
import Button from "../Button/Button"

const Wrapper = styled.div`
  display: flex;

  box-shadow: 5px 5px 1.25rem rgba(0, 0, 0, .25);

  .item {
    display: flex;
    align-items: center;

    width: 50%;
    padding: 30px;

    img {
      max-width: 100%;
      height: 180px;
    }

    div {
      margin-left: 1.875rem;

      h3 {
        font-size: 1.5rem;
        font-weight: 700;
        text-transform: uppercase;
      }

      p {
        margin-top: 10px;
        line-height: 1.3;
        font-size: 14px;
      }

      div {
        display: flex;
        justify-content: space-between;

        max-width: 250px;

        margin-top: 15px;
        margin-left: 0;
      }
    }

    &:last-child {
      position: relative;

      padding-right: 30px;

      flex-direction: column;
      align-items: stretch;

      background-color: var(--main-bg-color);

      color: var(--main-text-white);

      font-size: 1.5rem;

      img {
        position: absolute;
        left: 70%;
        top: 25%;
        z-index: 1;

        pointer-events: none;
      }

      h3 {
        line-height: 1.2;
        max-width: 85%;
        z-index: 2;
      }

      p {
        margin-top: 10%;
        padding-bottom: 10px;
        z-index: 2;
      }

      button {
        margin-top: auto;
        z-index: 2;
      }
    }
  }

  @media ${device.laptop} {
    flex-direction: column;

    .item {
      width: 100%;

      &:last-child {
        background-position-y: 80%;
        background-position-x: 105%;

        img {
          left: 80%;
          top: 10%;
        }

        p {
          margin-top: 5%;
        }
      }
    }
  }

  @media ${device.tablet} {
    .item {
      flex-direction: column;

      &:first-child {
        text-align: center;

        div {
          margin: 0;

          div {
            margin-top: 20px;

            max-width: 100%;

            justify-content: center;
            gap: 0 5%;
          }
        }
      }

      h3 {
        margin-top: 20px;
      }
    }
  }

  @media ${device.customM} {
    .item:last-child {
      text-align: center;

      img {
        left: 70%;
        top: 35%;
      }
      
      h3 {
        margin: 0;
        max-width: 100%;
      }

      button {
        margin: 0 auto;
      }

      background: var(--main-bg-color);
    }
  }
`

const RandomCharacter = () => {
    return (
        <Wrapper>
            <div className="item">
                <img src={require('../../img/thor.jpg')} width={180} height={180} alt="Thor"/>
                <div>
                    <h3>Thor</h3>
                    <p>As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the
                        enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile,
                        he's quite smart and compassionate...</p>
                    <div>
                        <Button text="homepage"/>
                        <Button
                            text="wiki"
                            grey/>
                    </div>
                </div>
            </div>
            <div className="item">
                <img src={require('../../img/Decoration.png')} width={202} height={190}/>
                <h3>Random character for today!
                    Do you want to get to know him better?</h3>
                <p>Or choose another one</p>
                <Button text="try it"/>
            </div>
        </Wrapper>
    )
}

export default RandomCharacter


