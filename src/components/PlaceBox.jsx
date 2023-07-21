import React from 'react'
import Skeleton from './Skeleton';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PlaceBox = ({place}) => {
    const [loading,setLoading] = useState(true);
  return (
    <>
        <Link to={`/place/${place._id}`} >
            <div className='flex aspect-square rounded-xl object-cover oveflow-hidden'>
                {loading && <Skeleton />}
                <img src={`${place.images[0]}`} onLoad={() => setLoading(false)} className={`overflow-hidden object-cover w-full rounded-xl ${loading?'hidden':'block'}`} alt="" />
            </div>
            <h2 className='font-semibold text-sm mt-2'>{place.address}</h2>
            <h3 className='text-gray-500 text-sm truncate my-1'>{place.title}</h3>
            <p className='text-sm'><span className='font-semibold'>Price : &nbsp;</span>₹{place.price}<span className='font-semibold'>/night</span></p>
        </Link>
    </>
  )
}

export default PlaceBox