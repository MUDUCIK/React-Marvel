import {Routes, Route, Navigate} from "react-router-dom"

import Header from "./Header/Header"
import Characters from "../pages/Characters/Characters"

function App() {
    const CharactersData = [
        {id: 0, img: require('../img/abyss.jpg'), name: 'Abyss'},
        {id: 1, img: require('../img/loki.jpg'), name: 'Loki'},
        {id: 2, img: require('../img/adam.jpg'), name: 'Adam Warlock'},
        {id: 3, img: require('../img/boom boom.jpg'), name: 'boom boom'},
        {id: 4, img: require('../img/calypso.jpg'), name: 'Calypso'},
        {id: 5, img: require('../img/colleen wing.jpg'), name: 'Colleen Wing'},
        {id: 6, img: require('../img/daimon hellstrom.jpg'), name: 'Daimon Hellstrom'},
        {id: 7, img: require('../img/damage control.jpg'), name: 'Damage Control'},
        {id: 8, img: require('../img/hulk.jpg'), name: 'Hulk'},
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
