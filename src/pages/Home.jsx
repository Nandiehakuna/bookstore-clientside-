import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { GrAdd } from "react-icons/gr";
import BooksCard from "../components/home/BooksCard";


import BooksTable from "../components/home/BooksTable";

const Home = () => {
  const [books, setBooks] = useState([
    { title: 'Book 1', author: 'Author 1', publishYear: 2020 },
    { title: 'Book 2', author: 'Author 2', publishYear: 2019 },
    { title: 'Book 3', author: 'Author 3', publishYear: 2018 },
  ]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType]=useState('table')

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/books`)
      .then((response) => {
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-center align-center gap-4 ">
        <button onClick={()=>setShowType('table')} className=" bg-blue-500 text-white rounded-md  p-3">
          table
        </button>
        <button onClick={()=>setShowType('card')} className=" bg-blue-500 text-white rounded-md  p-3">
          card
        </button>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-green-800 text-1em">Books list</h1>
        <Link to="/books/create" className="bg-green-100 rounded-xl p-2">
          <GrAdd />
        </Link>
      </div>

      {loading ? (<Spinner />) :showType===('table') ? (<BooksTable books={books}/>) : <BooksCard books={books}/>}
    </div>
  );
};

export default Home;
