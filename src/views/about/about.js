import React,{ useEffect, useState} from 'react'

import axios from 'axios'


const About = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.git('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
})
  return (
    <div>
        <h1> Fetch data from an api in react </h1>  {
                posts.map((item) => (
                <ol key = { item.id } >
                    User_Name: { item.username },
                    Full_Name: { item.name },
                    User_Email: { item.email }
                    </ol>
                ))
            }
    </div>
)}
export default About
