import React from 'react';
import Cards from './../data/cards';

export default class extends React.Component {
  render() {
    return (
      <div className="card-container">
        {Cards.map((card, i) => (
          <div className="card-wrapper" key={i}>
            <div className="card text-center">
              <div className="face front">
                <div className="card-body">
                  <h3>{card.word}</h3>
                  <p>{card.translation}</p>
                  <p>{card.author}</p>
                  <p>{card.views}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
