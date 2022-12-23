import React from 'react'

const PeopleItem = ({ item }) => {
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
                <strong>Birth_year:</strong> {item.birth_year}
              </li>
              <li>
                <strong>Height:</strong> {item.height}
              </li>
              <li>
                <strong>Mass:</strong> {item.mass}
              </li>
              <li>
                <strong>eye_color:</strong> {item.eye_color}
              </li>
              <li>
                <strong>Gender:</strong> {item.gender}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}

export default PeopleItem
