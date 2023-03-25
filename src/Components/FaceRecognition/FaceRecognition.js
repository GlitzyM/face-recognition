import React from "react";
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boundingBox }) => {
  return(
    <div className="center ma">
      <div className="image-container">
        <img id="inputimage" src={imageUrl} alt="" width='500px' height='auto' />
        <div className="bounding-box" style={{top: boundingBox.topRow, right: boundingBox.rightCol, bottom: boundingBox.bottomRow, left: boundingBox.leftCol}}></div>
      </div>
    </div>
  )
}

export default FaceRecognition;