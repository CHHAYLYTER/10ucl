import React from 'react'
import './blogs.css'
import CardComponent from '../../component/Card'
import { DummyData } from '../../data/data'


const Blogs = () => {
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

export default Blogs
