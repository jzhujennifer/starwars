import React from 'react'
import PlanetsItems from './PlanetsItems'
import Spinner from '../ui/Spinner'

const PlanetsGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <div className='title'>
        <h1 >Planets</h1>
    <section className='cards'>
      {items.map((item) => (
        <PlanetsItems key={item.char_id} item={item}></PlanetsItems>
      ))}
    </section>
    </div>
  )
}

export default PlanetsGrid