import React from 'react'
import { BsInfoCircle } from "react-icons/bs";
import { MdEditCalendar, MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';


const BooksTable = ({books}) => {
  return (
    <div>
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr className="text-sm text-green-800">
              <th className="border border-black-100 rounded-md">No</th>
              <th className="border border-black-100 rounded-md">Title</th>
              <th className="border border-black-100 rounded-md max-md:hidden">
                Author
              </th>
              <th className="border border-black-100 rounded-md max-md:hidden">
                Publish Year
              </th>
              <th className="border border-black-100 rounded-md">Operations</th>
            </tr>
          </thead>

          <tbody>
            {books.map((book, index) => (
              <tr key={index} className="h-8 text-green-900  " >
                <td className="border border-slate-300 rounded-md text-center ">
                  {index + 1}
                </td>
                <td className="border border-slate-300 rounded-md text-center ">
                  {book.title}
                </td>
                <td className="border border-slate-300 rounded-md text-center max-md:hidden">
                  {book.author}
                </td>
                <td className="border border-slate-300 rounded-md text-center max-md:hidden">
                  {book.publishYear}
                </td>
                <td className="border text-center border-slate-300 rounded-md ">
                  <div className="flex justify-center gap-x-4  ">
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className="text-xl text-green-900" />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <MdEditCalendar  className="text-xl text-blue-900" />
                    </Link>
                    <Link to={`/books/delete/${book._id} `}>
                      <MdDeleteOutline  className="text-xl text-yellow-800"/>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default BooksTable