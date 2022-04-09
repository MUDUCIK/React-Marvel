import { Routes, Route, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Header from './components/Header/Header'
import Characters from './pages/Characters/Characters'

function App() {
	return (
		<div className="page">
			<main>
				<div className="container">
					<Header />
					<Routes>
						<Route path="/" element={<Navigate to="characters" />} />
						<Route path="characters" element={<Characters />} />
						<Route
							path="comics"
							element={
								<>
									<Helmet>
										<title>Marvel comics</title>
										<meta name="description" content="Marvel comics" />
									</Helmet>
									<div>awdawdawdawdawd</div>
								</>
							}
						/>
					</Routes>
				</div>
			</main>
		</div>
	)
}

export default App
