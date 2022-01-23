import React from 'react';
import './compostyle.css'

const Start = ({ onQuizStart }) => {
  return(
    <div className="card">
      <div className="card-content">
        <div className="content">
          <h1 id='titretest'>Test n:1</h1>
          <p id='bonnechance'>bonne chance</p>
          <button className="button is-info is-medium" onClick={onQuizStart}>Debut</button>
        </div>
      </div>
    </div>
  );
}

export default Start;