import React from 'react'
import "./FirstCard.css"
import lifeStyle from "../Img/life.webp"

function FirstCard() {
  return (
    <div>
      <div className="cardsHolder">
        <div className="cardDiv">
          <img src={lifeStyle} alt="" className="cadpxi" />
          <p>Elary Life</p>
        </div>
      </div>
    </div>
  )
}

export default FirstCard