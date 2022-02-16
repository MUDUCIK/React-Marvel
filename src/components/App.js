import {Routes, Route} from "react-router-dom"

import Header from "./Header/Header"

function App() {
    return (
        <div className="page">
            <div className="container">
                <Header/>
                <Routes>
                    <Route path="characters" element={<div>awdawd</div>}/>
                    <Route path="comics" element={<div>awdawdawdawdawd</div>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
