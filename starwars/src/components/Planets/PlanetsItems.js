import React from 'react'

const PlanetsItems = ({ item }) => {
  return (
    
      <div className="card">
        <div className="card-inner">
          <div className="card-front">
            <h1>{item.name}</h1>
          </div>
          <div className="card-back">
            <h2>{item.name}</h2>
            <ul>
              <li>
                <strong>Name:</strong> {item.name}
              </li>
              <li>
                <strong>Climate:</strong> {item.climate}
              </li>
              <li>
                <strong>Diameter:</strong> {item.diameter}
              </li>
              <li>
                <strong>Population:</strong> {item.population}
              </li>
           
            </ul>
          </div>
        </div>
      </div>
    );
}

export default PlanetsItems
