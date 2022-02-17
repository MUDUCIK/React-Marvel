import {Routes, Route, Navigate} from "react-router-dom"

import Header from "./Header/Header"
import Characters from "../pages/Characters/Characters"

function App() {
    return (
        <div className="page">
            <div className="container">
                <Header/>
                <Routes>
                    <Route path="/" element={<Navigate to="characters"/>}/>
                    <Route path="characters" element={<Characters/>}/>
                    <Route path="comics" element={<div>awdawdawdawdawd</div>}/>
                </Routes>
            </div>
        </div>
    )
}

export default App
