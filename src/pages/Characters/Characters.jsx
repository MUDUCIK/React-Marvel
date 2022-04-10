import { Component } from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

import { device } from '../../styles/styled-components/queries'

import RandomCharacter from '../../components/RandomCharacter/RandomCharacter'
import CharactersList from '../../components/CharactersList/CharactersList'
import CharacterInfo from '../../components/CharacterInfo/CharacterInfo'
import ButtonBigger from '../../components/ButtonBigger/ButtonBigger'
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary'

import decoration from '../../img/bg_asset.png'

const CharactersPageStyle = styled.div`
	position: relative;

	padding: 0 0 45px 0;

	/* min-height: 1450px; */

	.More {
		margin: 0 auto;
	}
`

const CharactersSection = styled.section`
	display: grid;
	grid-template-columns: 2fr 1.3fr;
	gap: 1.25rem;

	margin: clamp(1.25rem, 5vh, 3.125rem) 0 clamp(1.25rem, 5vh, 2.8125rem);

	@media ${device.tablet} {
		grid-template-columns: none;

		.characterInfo {
			order: -1;
		}
	}
`

const CharacterSectionDecoration = styled.img`
	position: absolute;
	z-index: -1;

	right: -15%;
	bottom: -10%;
`

class Characters extends Component {
	constructor(props) {
		super(props)

		this.state = {
			selectedChar: null,
		}
	}

	onCharSelected = (id) => {
		this.setState({
			selectedChar: id,
		})
	}

	render() {
		const { selectedChar } = this.state

		return (
			<CharactersPageStyle>
				<Helmet>
					<title>Marvel Characters</title>
					<meta name="description" content="Marvel characters portal" />
				</Helmet>
				<RandomCharacter />
				<CharactersSection>
					<ErrorBoundary>
						<CharactersList onCharSelected={this.onCharSelected} />
					</ErrorBoundary>
					<div className="characterInfo">
						<ErrorBoundary>
							<CharacterInfo className="characterInfo" id={selectedChar} />
						</ErrorBoundary>
					</div>
				</CharactersSection>
				<ButtonBigger text="Load More" className="More" />
				<CharacterSectionDecoration src={decoration} />
			</CharactersPageStyle>
		)
	}
}

export default Characters
