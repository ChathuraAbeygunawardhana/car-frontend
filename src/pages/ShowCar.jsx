/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const ShowBook = () => {
  const [car, setCar] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/cars/${id}`)
      .then((response) => {
        setCar(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='p-4'>
      <BackButton />
      <div className='py-4'>
        {/*  <p>{car.title}</p>
        <p>{car.manufactureYear}</p>
        <p>{car.color}</p>
        <p>{car.price} USD</p> */}

        <table className='rounded-lg'>
          <thead>
            <tr>
              <td className='border-solid border-2 border-sky-800 p-3'>
                Heading
              </td>
              <td className='border-solid border-2 border-sky-800 p-3'>
                value
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='border-solid border-2 border-sky-800 p-3'>
                title
              </td>
              <td className='border-solid border-2 border-sky-800 p-3'>
                {car.title}
              </td>
            </tr>
            <tr>
              <td className='border-solid border-2 border-sky-800 p-3'>
                manufactureYear
              </td>
              <td className='border-solid border-2 border-sky-800 p-3'>
                {car.manufactureYear}
              </td>
            </tr>
            <tr>
              <td className='border-solid border-2 border-sky-800 p-3'>
                color
              </td>
              <td className='border-solid border-2 border-sky-800 p-3'>
                {car.color}
              </td>
            </tr>
            <tr>
              <td className='border-solid border-2 border-sky-800 p-3'>
                price
              </td>
              <td className='border-solid border-2 border-sky-800 p-3'>
                {car.price} USD
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ShowBook;
