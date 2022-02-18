import {Routes, Route, Navigate} from "react-router-dom"

import Header from "./Header/Header"
import Characters from "../pages/Characters/Characters"

function App() {
    const CharactersData = [
        {id: 0, img: require('../img/abyss.jpg'), name: 'Abyss', width: 200, height: 200},
        {id: 1, img: require('../img/abyss.jpg'), name: 'Abyss', width: 200, height: 200},
        {id: 2, img: require('../img/abyss.jpg'), name: 'Abyss', width: 200, height: 200},
        {id: 3, img: require('../img/abyss.jpg'), name: 'Abyss', width: 200, height: 200},
        {id: 4, img: require('../img/abyss.jpg'), name: 'Abyss', width: 200, height: 200},
        {id: 5, img: require('../img/abyss.jpg'), name: 'Abyss', width: 200, height: 200},
        {id: 6, img: require('../img/abyss.jpg'), name: 'Abyss', width: 200, height: 200},
        {id: 7, img: require('../img/abyss.jpg'), name: 'Abyss', width: 200, height: 200},
        {id: 8, img: require('../img/abyss.jpg'), name: 'Abyss', width: 200, height: 200},
    ]

    return (
        <div className="page">
            <main>
                <div className="container">
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Navigate to="characters"/>}/>
                        <Route path="characters" element={<Characters characters={CharactersData}/>}/>
                        <Route path="comics" element={<div>awdawdawdawdawd</div>}/>
                    </Routes>
                </div>
            </main>
        </div>
    )
}

export default App
