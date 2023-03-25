import React from "react";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">
        {'This Brain will detect Faces, give it a try'}
      </p>
      <div>
        <input className="pa1 w-70 center" type={'text'}  onChange={onInputChange} /><hr className="w-70" />
        <button className="w4 h2 grow pointer link ph3 dib white bg-light-purple" onClick={onButtonSubmit}>Detect</button>
      </div>
    </div>
  )
}

export default ImageLinkForm;