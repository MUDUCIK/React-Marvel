import styled from 'styled-components'
import {Component} from 'react'
import {MarvelService} from '../../services/MarvelService'

import Button from '../Button/Button'
import Spinner from '../Spinner/Spinner'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import Skeleton from '../Skeleton/Skeleton'

const CharacterInfoWrapper = styled.div`
  padding: 1.5625rem;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.25);
  background: #fff;
`

const CharacterHeader = styled.div`
  display: flex;

  img {
    max-width: 100%;
    height: 150px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 100%;

    margin-left: 1.5625rem;

    font-size: 1.5rem;

    span {
      font-weight: 700;
      text-transform: uppercase;
    }

    div {
      margin: 0;

      min-width: 100px;

      gap: 0.625em 0;
    }
  }
`

const CharacterBody = styled.div`
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

      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      a {
        width: 100%;

        padding: 5px 10px;

        &:focus {
          outline: 0.25rem solid var(--main-hover-red);
        }
      }
    }
  }
`

class CharacterInfo extends Component {
    constructor(props) {
        super(props)

        this.marvelService = new MarvelService()

        this.state = {
            characterData: null,
            loading: false,
            error: false,
        }
    }

    onCharLoaded = (char) => {
        this.setState({
            characterData: char,
            loading: false,
            error: false,
        })
    }

    onError = () => {
        this.setState({error: true, loading: false})
    }

    onCharLoading = () => {
        this.setState({loading: true})
    }

    getCharacter = (id) => {
        this.onCharLoading()

        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
    }

    componentDidMount() {
        if (this.props.id) this.getCharacter(this.props.id)
    }

    componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.id) this.getCharacter(this.props.id)
    }

    render() {
        const {loading, error, characterData} = this.state

        const skeleton  = loading || error || characterData ? null : <Skeleton/>
        const onLoading = loading ? <Spinner/> : null
        const onError   = error ? <ErrorMessage/> : null
        const content   =
                  !loading && !error && characterData ? <View char={characterData}/> : null

        return (
            <CharacterInfoWrapper>
                {onLoading}
                {onError}
                {skeleton}
                {content}
            </CharacterInfoWrapper>
        )
    }
}

const View = ({
                  char: {name, description, thumbnail, homepage, wiki, comics},
              }) => {
    if (!description) description = 'Description not found'

    let newComics = []

    for (let i = 0; i < comics.length; i++)
        if (i < 10)
            newComics.push({
                url: comics[i].resourceURI,
                name: comics[i].name,
            })
        else break

    return (
        <>
            <CharacterHeader>
                <img src={thumbnail} alt={name} width={150} height={150}/>
                <div>
                    <span>{name}</span>
                    <div>
                        <Button href={homepage} text="homepage"/>
                        <Button href={wiki} text="wiki" grey/>
                    </div>
                </div>
            </CharacterHeader>
            <CharacterBody>
                <p>{description}</p>
                <span>Comics:</span>
                <ul>
                    {comics.length > 0 ? null : 'There is no comics with this character!'}
                    {newComics.map(({name, url}, i) => (
                        <li key={i}>
                            <a href={url}>{name}</a>
                        </li>
                    ))}
                </ul>
            </CharacterBody>
        </>
    )
}

export default CharacterInfo
