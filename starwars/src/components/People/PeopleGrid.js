import React from 'react'
import PeopleItem from './PeopleItem'
import Spinner from '../ui/Spinner'

const PeopleGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <PeopleItem key={item.char_id} item={item}></PeopleItem>
      ))}
    </section>
  )
}

export default PeopleGrid
