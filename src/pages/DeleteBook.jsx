import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import axios from 'axios'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useState } from 'react';




const DeleteBook = () => {
  const[loading, setLoading]=useState(false);
  const navigate=useNavigate();
  const {id} =useParams();



  const handleDeleteBook=(()=>{
    setLoading(true);
    axios.delete(`http://localhost:5555/book/${id}`)
    .then((response)=>{
      setLoading(false)
      navigate('/');

    })
    .catch((error)=>{
      console.log(error)
      setLoading(false);
    })
  })
  return (
    <div> 
      <BackButton/>

      <h1 className='text-green-1000 p-5 text-center text-3xl'>DELETE BOOK</h1>
      {loading ? ( <Spinner/>):(
      
      <div className='flex   flex-col mx-auto p-20 bg-orange-50 border-0 rounded-xl w-[600px]   '>
        
        
        <h3 className='my-5 text-xl '>are sure you want to delete this book ??</h3>
        <button className='bg-red-600 text-white text-2xl w-fit p-3 border-0 rounded-xl' onClick={handleDeleteBook}> yes i want to delete </button>
        </div>)}
      
      
      
    </div>
  )
}

export default DeleteBook