import React from 'react'
import Fortunecard from './Fortunecard'

export default function FortunecardItems({ fortuneCards }) {
    return (
        <div className="display-grid">
            {fortuneCards.map(fortuneCard=>{
                return <Fortunecard fortuneCard={fortuneCard} Key={fortuneCard.id} />
            })}

        </div>
    )
}
