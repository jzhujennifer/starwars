import React from 'react'
import StarshipsItems from './StarshipsItems'
import Spinner from '../ui/Spinner'

const StarshipsGrid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <StarshipsItems key={item.char_id} item={item}></StarshipsItems>
      ))}
    </section>
  )
}

export default StarshipsGrid