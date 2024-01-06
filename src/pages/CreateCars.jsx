/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateCars = () => {
  const [title, setTitle] = useState('');
  const [manufactureYear, setManufactureYear] = useState('');
  const [color, setColor] = useState('');
  const [price, setPrice] = useState('');
  const inputStyle =
    'shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light';
  const buttonStyle =
    'text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800';
  const headingStyle =
    'mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black';
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSaveCar = () => {
    const data = {
      title,
      manufactureYear,
      color,
      price,
    };
    setLoading(true);

    axios
      .post('http://localhost:4000/cars', data)
      .then(() => {
        setLoading(false);
        navigate('/');
      })
      .catch((error) => {
        console.log('error happened');
        setLoading(false);
      });
  };

  return (
    <div className='App h-full py-6 px-6 bg-white'>
      <div className='bg-blue-100 shadow-xl border rounded-md p-10'>
        <h1 className={headingStyle}>
          Add <span className='text-blue-600 dark:text-blue-500'>New Car</span>{' '}
          To the garage
        </h1>
        <p className='text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 my-10'>
          Here you can add new car to the garage
        </p>

        <BackButton />
        {loading ? <Spinner /> : ''}

        <form className='max-w-sm mx-auto'>
          <div className='mb-5'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>
              Title Of the Car
            </label>
            <input
              type='email'
              id='email'
              className={inputStyle}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              required
            />
          </div>
          <div className='mb-5'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>
              Manufacture Year
            </label>
            <input
              type='email'
              id='email'
              className={inputStyle}
              value={manufactureYear}
              onChange={(e) => {
                setManufactureYear(e.target.value);
              }}
              required
            />
          </div>
          <div className='mb-5'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>
              Color
            </label>
            <input
              type='email'
              id='email'
              className={inputStyle}
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
              required
            />
          </div>

          <div className='mb-5'>
            <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>
              Price
            </label>
            <input
              type='email'
              id='email'
              className={inputStyle}
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              required
            />
          </div>
          <button type='submit' className={buttonStyle} onClick={handleSaveCar}>
            Add new Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateCars;
