import React from 'react'

const StarshipsItems = ({ item }) => {
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
                <strong>Model:</strong> {item.model}
              </li>
              <li>
                <strong>Manufacturer:</strong> {item.manufacturer}
              </li>
              <li>
                <strong>Length:</strong> {item.length}
              </li>
              <li>
                <strong>Crew:</strong> {item.crew}
              </li>
              <li>
                <strong>"Passengers:</strong> {item.passengers}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default StarshipsItems