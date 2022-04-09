import { Component } from 'react'
import styled from 'styled-components'

import { device } from '../../styles/styled-components/queries'

import RandomCharacter from '../../components/RandomCharacter/RandomCharacter'
import CharactersList from '../../components/CharactersList/CharactersList'
import CharacterInfo from '../../components/CharacterInfo/CharacterInfo'
import ButtonBigger from '../../components/ButtonBigger/ButtonBigger'

const CharactersPageStyle = styled.div`
	position: relative;

	padding: 0 0 45px 0;

	min-height: 1450px;

	.More {
		margin: 0 auto;
	}
`

const CharactersSection = styled.section`
	display: flex;

	margin: clamp(1.25rem, 5vh, 3.125rem) 0 clamp(1.25rem, 5vh, 2.8125rem);

	@media ${device.laptop} {
		flex-direction: column-reverse;
	}
`

const CharacterInfoWrapper = styled.div`
	margin-left: 25px;
	width: 90%;

	@media ${device.laptop} {
		width: 100%;
		margin: 0;
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
				<RandomCharacter />
				<CharactersSection>
					<CharactersList onCharSelected={this.onCharSelected} />
					<CharacterInfoWrapper id="characterInfo">
						<CharacterInfo id={selectedChar} />
					</CharacterInfoWrapper>
				</CharactersSection>
				<ButtonBigger text="Load More" className="More" />
				<CharacterSectionDecoration src={require('../../img/bg_asset.png')} />
			</CharactersPageStyle>
		)
	}
}

export default Characters
