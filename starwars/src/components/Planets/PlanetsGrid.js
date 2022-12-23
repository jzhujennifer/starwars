import React from 'react'
import PlanetsItem from './PlanetsItems'
import Spinner from '../ui/Spinner'

const PlanetsGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <PlanetsItem key={item.char_id} item={item}></PlanetsItem>
      ))}
    </section>
  )
}

export default PlanetsGrid