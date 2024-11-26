import React from 'react'
import Filter from './Fitler'
import Posts from './Posts'

export default function page() {
  return (
    <div className=' flex flex-row gap-5 p-5'>
        <Filter />
        <Posts />
    </div>
  )
}
