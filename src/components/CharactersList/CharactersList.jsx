import styled from 'styled-components'
import { Component } from 'react'

import Character from '../Character/Character'
import { device } from '../../styles/styled-components/queries'
import { MarvelService } from '../../services/MarvelService'
import Spinner from '../Spinner/Spinner'
import ErrorMessage from '../ErrorMessage/ErrorMessage'

const CharactersWrapper = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 1.875rem 0;
	justify-content: space-between;

	max-width: 650px;

	padding: 0;
	margin: 0;

	list-style-type: none;

	@media ${device.laptop} {
		justify-content: center;
		gap: 1.875rem 1.5625rem;

		max-width: 100%;
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
		}
	}

	onError = () => {
		this.setState({ error: true, loading: false })
	}

	onCharactersLoaded = ({ data: { results } }) => {
		this.setState({
			charactersData: results,
			loading: false,
			error: false,
		})
	}

	loadCharacters = () => {
		this.marvelService
			.getAllCharacters()
			.then(this.onCharactersLoaded)
			.catch(this.onError)
	}

	componentDidMount() {
		this.loadCharacters()
	}

	render() {
		const { loading, error, charactersData } = this.state

		const charactersItems = charactersData.map(({ id, name, thumbnail }) => (
			<li key={id} onClick={() => this.props.onCharSelected(id)}>
				<Character
					name={name}
					img={`${thumbnail.path}.${thumbnail.extension}`}
				/>
			</li>
		))

		console.log(!(loading && error))

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
			</>
		)
	}
}

export default CharactersList
