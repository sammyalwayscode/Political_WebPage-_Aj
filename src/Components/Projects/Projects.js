import React from 'react'
import "./Projects.css"
import boy from "../Img/boy.jpg"

function Projects() {
  return (
    <div className="grneralProject">
      <div className="subGeneralProject">
        <div className="textCarding">
          <div className="textDiff">
            <p className="projs">PROJECTS</p>
            <p className="rece">SEE RECENT WORKS</p>
          </div>


          <div className="generalCardHold">
            <div className="cardDiff">
              <div className="mainCardings">
                <img src={boy} alt="" className="cardPixxx" />
                <div className="textCardPix">
                  <p className="smmOne">Health Services</p>
                  <p className="bigOne">Provision of Dipers </p>
                </div>
              </div>
            </div>

            <div className="cardDiff">
              <div className="mainCardings">
                <img src={boy} alt="" className="cardPixxx" />
                <div className="textCardPix">
                  <p className="smmOne">Health Services</p>
                  <p className="bigOne">Provision of Dipers </p>
                </div>
              </div>
            </div>

            <div className="cardDiff">
              <div className="mainCardings">
                <img src={boy} alt="" className="cardPixxx" />
                <div className="textCardPix">
                  <p className="smmOne">Health Services</p>
                  <p className="bigOne">Provision of Dipers </p>
                </div>
              </div>
            </div>

            <div className="cardDiff">
              <div className="mainCardings">
                <img src={boy} alt="" className="cardPixxx" />
                <div className="textCardPix">
                  <p className="smmOne">Health Services</p>
                  <p className="bigOne">Provision of Dipers </p>
                </div>
              </div>
            </div>

            <div className="cardDiff">
              <div className="mainCardings">
                <img src={boy} alt="" className="cardPixxx" />
                <div className="textCardPix">
                  <p className="smmOne">Health Services</p>
                  <p className="bigOne">Provision of Dipers </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Projects
