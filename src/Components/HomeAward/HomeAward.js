import React from 'react'
import icinA from "../Img/awards.png"
import "./HomeAward.css"

function HomeAward() {
  return (
    <div className="MainAward1">
      <div className="subMainAward1">
        {/* <div className="firstimgtext">
          <div> <img src={nnn} alt="" className="awardfirpix" /> </div>
          <div className="awdTex"> <p>These Are His Awards</p> </div>
        </div> */}
        <div className="textDiff11">
          <p className="projs11">PROJECTS</p>
          <p className="rece11">SEE RECENT WORKS</p>
        </div>

        <div className="awardCardHolddd1">

          <div className="awdCards1">
            <p>2030</p>
            <img src={icinA} alt="" className="iconImg1" />
            <p>He was awarded the golden Boot of the fifa world cup 2030</p>
          </div>

          <div className="awdCards1">
            <p>2030</p>
            <img src={icinA} alt="" className="iconImg1" />
            <p>He was awarded the golden Boot of the fifa world cup 2030</p>
          </div>

          <div className="awdCards1">
            <p>2030</p>
            <img src={icinA} alt="" className="iconImg1" />
            <p>He was awarded the golden Boot of the fifa world cup 2030</p>
          </div>

          <div className="awdCards1">
            <p>2030</p>
            <img src={icinA} alt="" className="iconImg1" />
            <p>He was awarded the golden Boot of the fifa world cup 2030</p>
          </div>
        </div>
      </div>
    </div>


  )
}

export default HomeAward
