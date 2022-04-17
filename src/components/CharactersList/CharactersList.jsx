import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Component } from 'react'

import Character from '../Character/Character'
import { device } from '../../styles/styled-components/queries'
import { MarvelService } from '../../services/MarvelService'
import Spinner from '../Spinner/Spinner'
import ErrorMessage from '../ErrorMessage/ErrorMessage'
import ButtonBigger from '../ButtonBigger/ButtonBigger'

const CharactersWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1.875rem 20px;
  justify-content: center;

  max-width: 650px;

  padding: 0;
  margin: 0;

  list-style-type: none;

  li {
    display: flex;
  }

  @media ${device.laptop} {
    justify-content: center;
    gap: 1.875rem 1.5625rem;

    max-width: 100%;
  }

  @media ${device.tablet} {
    margin-top: clamp(20px, 10vh, 50px);
  }
`

class CharactersList extends Component {
  constructor(props) {
    super(props)

    this.marvelService = new MarvelService()

    this.state = {
      charactersData: [],
      loading: true,
      error: false,
      newCharLoading: false,
      offset: 1240,
      maxReached: false,
    }
  }

  onError = () => {
    this.setState({ error: true, loading: false })
  }

  onCharactersLoaded = ({ data: { results } }) => {
    let maxReached = results.length < 9

    this.setState((prevState) => ({
      charactersData: [...prevState.charactersData, ...results],
      loading: false,
      error: false,
      newCharLoading: false,
      offset: prevState.offset + 9,
      maxReached,
    }))
  }

  loadCharacters = (offset = this.state.offset) => {
    this.onNewCharLoading()
    this.marvelService
      .getAllCharacters(offset)
      .then(this.onCharactersLoaded)
      .catch(this.onError)
  }

  onNewCharLoading = () => {
    this.setState({ newCharLoading: true })
  }

  componentDidMount() {
    this.loadCharacters()
  }

  render() {
    const {
      loading,
      error,
      charactersData,
      newCharLoading,
      offset,
      maxReached,
    } = this.state

    const charactersItems = charactersData.map(({ id, name, thumbnail }) => (
      <li key={id}>
        <Character
          id={id}
          name={name}
          img={`${thumbnail.path}.${thumbnail.extension}`}
          onCharSelected={this.props.onCharSelected}
        />
      </li>
    ))

    const onError = error ? <ErrorMessage /> : null
    const onLoading = loading ? <Spinner /> : null
    const content =
      loading || error ? null : (
        <CharactersWrapper>{charactersItems}</CharactersWrapper>
      )

    return (
      <>
        {onLoading}
        {onError}
        {content}
        {!maxReached && (
          <ButtonBigger
            disabled={newCharLoading}
            onClick={() => this.loadCharacters(offset)}
            text='Load More'
            className='More'
          />
        )}
      </>
    )
  }
}

CharactersList.propTypes = {
  onCharSelected: PropTypes.func.isRequired,
}

export default CharactersList
