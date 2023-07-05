import React, { useState } from "react";
import FortunecardItems from "./components/FortunecardItems";
import './App.css';
import bunny from "./components/bunny.png"



const App = () => {
    const [fortuneCards, setFortuneCards] = useState(FortuneContent)


    return (
        <>
            <div className="bunny-title l">
                <h1 className="title">Bunny the fortune teller </h1>

            </div>
            <div className="card-wrapper"> <FortunecardItems fortuneCards={fortuneCards} /></div>
            <p className="credits"><q>Image by Nara Kim from pixabay</q></p>
        </>
    )
}

const FortuneContent = [
    {
        id: 1,
        image: bunny,


        fortuneLines: "It\'s okay to talk to strangers "


    },
    {
        id: 2,
        image: bunny,
        fortuneLines: 'Mistakes happen, turn them into a opportunity',

    },
    {
        id: 3,
        image: bunny,
        fortuneLines: 'There is a great love in your future',

    },
    {
        id: 4,
        image: bunny,
        fortuneLines: 'You won\'t know until you try',
    },
    {
        id: 5,
        image: bunny,
        fortuneLines: 'sharing is caring',
    },
    {
        id: 6,
        image: bunny,
        fortuneLines: 'You can make your own happiness',
    },
]
export default App;