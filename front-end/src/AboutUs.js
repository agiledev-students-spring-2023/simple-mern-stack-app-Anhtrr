import React from 'react'
import axios from 'axios'
import './AboutUs.css'
import { useState, useEffect } from 'react'

const AboutUs = () => {
  // get method from backend 
  const [about, setAbout] = useState([])

  useEffect(() => {
    const getAboutContent = async () => {
        try{
            const aboutContent = await axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/about`)
            setAbout(aboutContent.data.About)
        }
        catch (err) {
            console.log(err)
        }
    }
    getAboutContent()
  }, [])

  return (
    <div className='profile'>
        <div className='profilePic'>
            {about.map((a)=>
                <img className='dp' src={a.imageURL}/>
            )}
        </div>
        <div className='profileText'>
            {about.map((a)=>
                <h2 className='name'>
                    {a.name}
                </h2>
            )}
            {about.map((a)=>
                <h5 className='desc'>
                    {a.description}
                </h5>
            )}
        </div>
    </div>
  )
}

export default AboutUs