import React from 'react'
import './blog.css'
import CardComponent from '../../component/Card'
import { DummyData } from '../../data/data'


const Blog = () => {
  return (
    <div className='grid'>
          {DummyData.map((Dymmy) =>  {

            return (
              <CardComponent user={Dymmy} />
            )
          })}
          </div>
  )
}

export default Blog
