import React from 'react'
import { useEffect, useState } from 'react'

import BackButton from '../components/BackButton'

import Spinner from '../components/Spinner';
import { useParams } from 'react-router-dom';
import axios from 'axios';





const ShowBooks = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading]=  useState(false);
  const {id } = useParams();

  useEffect(()=>{
    setLoading(true);
    axios
    .get(`http://localhost:5555/books/${id}`)
    .then((response)=>{
      setLoading(false)
      setBook(response.data)
     
    })
    .catch((error)=>{
      setLoading(false)
      console.log(error)
    })
  },[id])

  
  return ( 
    <div className='' >
      <h1 className='text-xl text-green-900'>Book Details</h1>
    <BackButton/>

    { loading ? (
      <Spinner/>
    ) : (
      
        <div className=' border-0 flex flex-col bg-green-200   '>
          <div>
          <span>id</span>
          <span>{book._id}</span>
          </div>
          
          <div>
          <span>title</span>
          <span>{book.title}</span>
          </div>

          <div>
          <span>id</span>
          <span>{book.publishYear}</span>
          </div>

          <div>
          <span>Author</span>
          <span>{book.author}</span>
          </div>

          <div className='my-4'>
          <span>createdAt</span>
          <span>{new Date (book.createdAt).toString()}</span>
          </div>




          </div>
    )
  

    }
    

    </div>
  )
}

export default ShowBooks