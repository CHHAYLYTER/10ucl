import axios from 'axios'
import './flexdata.css'
import React, { useEffect, useState } from 'react'

const FlexData = ({}) => {
    const [mans, setMans] = useState([])

    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res)
        setMans(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }, [])
    return (

      <section class="blogs" id="blogs">
        <div class="box-container">
        {
          
          mans.map((box) => 
          

<div class="box">
    <div class="image">
        <h3> <i class="fas fa-calendar"></i> 21st may, 2021 </h3>
    </div>
    <div class="content">
        <div class="tags">
            <a href="#"> <i class="fas fa-tag"></i> food / </a>
            <a href="#"> <i class="fas fa-tag"></i> burger / </a>
            <a href="#"> <i class="fas fa-tag"></i> pizza  </a>
        </div>
        <h3>{box.id}</h3>
        <div className="flexdata_text">
        <p>{box.title}</p>
        </div>
        <a href="#" class="btn">read more</a>
    </div>
</div>
  )
      }
      </div>
      </section>
    )
}
export default FlexData



/// const user = [{id: 1 , name: pich} ]
///id = 1 , name = pich , age = 12 --> id = 1 , name = chaily , age = 20

//put --> name = chaily ,  age = 12
//patch --> name = chaily


// const user = {}

//--> post > 

// form ( )

// get , post , put , patch


// get --> get data 
// post -->  post data to api
// put , patch --> make change to data in api


// fetch --> need to change response to json
// axios --> auto response as json

// Make an Editable Table in React (Add/Edit/Delete Rows) | Beginner Friendly Tutorial

