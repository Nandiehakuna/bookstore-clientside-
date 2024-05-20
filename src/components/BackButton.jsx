import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";

const BackButton = ({destination='/'}) => {
  return (
    <div >
        <Link to={destination} className='text-3xl text-orange-900 bg-blue-100 '><FaArrowLeft/></Link>

    </div>
  )
}

export default BackButton