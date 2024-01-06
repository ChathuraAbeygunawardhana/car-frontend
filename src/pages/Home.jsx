/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';

/* importing icons - optional */
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineDelete, MdOutlineAddBox } from 'react-icons/md';
import axios from 'axios';

const Home = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:4000/cars')
      .then((response) => {
        setCars(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className='App h-full py-6 px-6 bg-white'>
      <div className='bg-blue-100 shadow-xl border rounded-md p-10'>
        <div className='p-10'>
          <div>Home page</div>
          <p>testing txt</p>
          <Link to='/cars/create' style={{ margin: '10px' }}>
            <MdOutlineAddBox className='text-sky-800 text-4xl' />
          </Link>
          <table>
            <thead>
              <tr>
                <th className='p-4 border border-slate-700'>Number</th>
                <th className='p-4 border border-slate-700'>Title</th>
                <th className='p-4 border border-slate-700'>
                  Manufacture_year
                </th>
                <th className='p-4 border border-slate-700'>Color</th>
                <th className='p-4 border border-slate-700'>Price</th>
                <th className='p-4 border border-slate-700'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cars?.map((car, index) => (
                <tr key={car._id}>
                  <td className='p-4 border border-black rounded-md'>
                    {index + 1}
                  </td>
                  <td className='p-4 border border-black rounded-md'>
                    {car.title}
                  </td>
                  <td className='p-4 border border-black rounded-md'>
                    {car.manufactureYear}
                  </td>
                  <td className='p-4 border border-black rounded-md'>
                    {car.color}
                  </td>
                  <td className='p-4 border border-black rounded-md'>
                    {car.price}
                  </td>
                  <td className='p-4 border border-black rounded-md'>
                    <div className='flex'>
                      <Link to={`/cars/details/${car._id}`} className='mx-4'>
                        <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
                          Details
                        </button>
                      </Link>
                      <Link to={`/cars/delete/${car._id}`} className='mx-4'>
                        <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
                          Delete
                        </button>
                      </Link>
                      <Link to={`/cars/edit/${car._id}`} className='mx-4'>
                        <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
                          Edit
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
