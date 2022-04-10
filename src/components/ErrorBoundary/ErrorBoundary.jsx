import { Component } from 'react'

import ErrorMessage from '../ErrorMessage/ErrorMessage'

class ErrorBoundary extends Component {
	constructor(props) {
		super(props)

		this.state = {
			error: false,
		}
	}

	componentDidCatch() {
		this.setState({ error: true })
	}

	render() {
		return this.state.error ? <ErrorMessage /> : this.props.children
	}
}

export default ErrorBoundary
