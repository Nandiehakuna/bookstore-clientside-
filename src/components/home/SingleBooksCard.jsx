import React from 'react'
import { BiBookOpen } from "react-icons/bi";
import { CiEdit } from "react-icons/ci";

const SingleBooksCard = (book) => {
  return (
    <div key={book._id} className='relative  border-2 border-gray-500  '>
          w
            <h1 className='text-gray-500 '>{book._id}</h1>
            <h3 className='bg-red-50 text-red-500 absolute top-1 right-2 '>{book.publishYear}</h3>

            <div className='flex justify-start gap-x-2 '>
                <BiBookOpen className='text-blue-300'/>
                <h1>{book.title}</h1>

              </div> 

               <div className='flex justify-start gap-x-2 '>
               <CiEdit text-gray-500 />
                <h1>{book.author}</h1>

              </div>   

               <div>
                <Link></Link>
                </div>  
          

        </div>
  )
}

export default SingleBooksCard