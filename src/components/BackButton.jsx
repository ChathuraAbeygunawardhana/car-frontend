/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const BackButton = ({ destination = '/' }) => {
  useEffect(() => {}, []);

  return (
    <div>
      <Link to={destination}>
        <FaArrowLeft className='inline-block mr-2' />
      </Link>
    </div>
  );
};

export default BackButton;
