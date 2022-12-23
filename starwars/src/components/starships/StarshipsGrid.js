import React from 'react'
import StarshipsItems from './StarshipsItems'
import Spinner from '../ui/Spinner'

const StarshipsGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <div className='title'>
        <h1>Starships</h1>
    <section className='cards'>
      {items.map((item) => (
        <StarshipsItems key={item.char_id} item={item}></StarshipsItems>
      ))}
    </section>
    </div>
  )
}

export default StarshipsGrid