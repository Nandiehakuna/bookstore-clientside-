import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams}from 'react-router-dom'
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';



const CreateBooks = () => {
  const [title, setTitle]=useState('');
  const [author, setAuthor]=useState('');
  const [publishYear, setPublishYear]=useState('');
  const[loading, setLoading]=useState(false)
  const navigate=useNavigate();
  const {id}=useParams();

  useEffect(()=>{
    setLoading(true)
    axios.get(`http://localhost:5555/books/${id}`)
    .then((response)=>{
      setTitle(response.data.title)
      setAuthor(response.data.author)
      setPublishYear(response.data.publishYear)
    })
    .catch((error)=>{
      console.log(error);
    })

  })

  const handleEditBook =(()=>{
    const data ={
      title,
      author,
      publishYear
    }

    setLoading(true);
    axios
    .put(`http://localhost:5555/book/${id}`, data)
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
      <h1 className='text-3xl text-black-900 text-center my-8'>editBook</h1>
    { loading ? (<Spinner/>): ''}
    <div className='flex flex-col border-0 bg-green-50 rounded-xl w-[600px] p-6  m-auto  '>
      <div className='my-4'>
        <label htmlFor="" className='text-2xl text-green-900 '>enter new tittle </label>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className='w-full border-0 bg-white-200 rounded-xl p-4  ' />
      </div>

      <div className='my-4'>
        <label htmlFor="" className='text-2xl text-green-900 '>update author </label>
        <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} className='w-full border-0 bg-white-200 rounded-xl p-4  ' />
      </div>

      <div className='my-4'>
        <label htmlFor="" className='text-2xl text-green-900 '>publishYear </label>
        <input type="text" value={publishYear} onChange={(e)=>setPublishYear(e.target.value)} className='w-full border-0 bg-white-200 rounded-xl p-4  ' />
      </div>

     <button className='p-2 m-8 border-0 rounded-md text-2xl bg-orange-200 w-20 text-center ' onClick={handleEditBook}> save</button>


    </div>
    </div>
  )
}

export default CreateBooks