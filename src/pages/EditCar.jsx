/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditBook = () => {
  const [title, setTitle] = useState('');
  const [manufactureYear, setManufactureYear] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  /* styling */
  const labelStyle =
    'block mb-2 text-sm font-medium text-gray-900 dark:text-white';
  const inputStyle =
    'block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
  const outerDivStyle =
    'flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto';
  const buttonStyle =
    'my-6 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700';

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/cars/${id}`)
      .then((response) => {
        setLoading(false);
        setTitle(response.data.title);
        setManufactureYear(response.data.manufactureYear);
        setColor(response.data.color);
        setPrice(response.data.price);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert('an error occured. check the console');
      });
  }, [id]);

  const handleEditCar = () => {
    const data = { title, manufactureYear, color, price };

    axios
      .put(`http://localhost:4000/cars/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
        alert('error occured');
      });
  };

  return (
    <div className='flex flex-col'>
      <h2>Edit book</h2>
      <div className={outerDivStyle}>
        <div className='my-4'>
          <label className={labelStyle}>Title</label>
          <input
            type='text'
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className={inputStyle}
          />
          <label className={labelStyle}> Manufacture Year</label>
          <input
            type='text'
            value={manufactureYear}
            onChange={(e) => {
              setManufactureYear(e.target.value);
            }}
            className={inputStyle}
          />
          <label className={labelStyle}>Color</label>
          <input
            type='text'
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            className={inputStyle}
          />
          <label className={labelStyle}>Price</label>
          <input
            type='text'
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            className={inputStyle}
          />
          <button onClick={handleEditCar} className={buttonStyle}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
