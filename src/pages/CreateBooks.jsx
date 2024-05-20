import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';



const CreateBooks = () => {
  const [title, setTitle]=useState('');
  const [author, setAuthor]=useState('');
  const [publishYear, setPublishYear]=useState('');
  const[loading, setLoading]=useState(false)
  const navigate=useNavigate();

  const handleSaveBook =(()=>{
    const data ={
      title,
      author,
      publishYear
    }

    setLoading(true);
    axios
    .post(`http://localhost:5555/book`, data)
    .then(()=>{
      setLoading(false)
      navigate('/')
    })
    .catch((error)=>{
      alert("an error has occurred check the console ")
      console.log(error);
    })

  })



  return (
    <div>
      <BackButton/>
      <h1 className='text-3xl text-black-900 text-center my-8'>create book</h1>
    { loading ? (<Spinner/>): ''}
    <div className='flex flex-col border-0 bg-green-50 rounded-xl w-[600px] p-6  m-auto  '>
      <div className='my-4'>
        <label htmlFor="" className='text-2xl text-green-900 '>title </label>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className='w-full border-0 bg-white-200 rounded-xl p-4  ' />
      </div>

      <div className='my-4'>
        <label htmlFor="" className='text-2xl text-green-900 '>Author </label>
        <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} className='w-full border-0 bg-white-200 rounded-xl p-4  ' />
      </div>

      <div className='my-4'>
        <label htmlFor="" className='text-2xl text-green-900 '>publishYear </label>
        <input type="text" value={publishYear} onChange={(e)=>setPublishYear(e.target.value)} className='w-full border-0 bg-white-200 rounded-xl p-4  ' />
      </div>

     <button className='p-2 m-8 border-0 rounded-md text-2xl bg-orange-200 w-20 text-center ' onClick={handleSaveBook}> save</button>


    </div>
    </div>
  )
}

export default CreateBooks