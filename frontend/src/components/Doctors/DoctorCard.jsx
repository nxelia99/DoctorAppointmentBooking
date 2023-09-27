import React from 'react'
import starIcon from '../../assets/images/Star.png'
import {BsArrowRight} from 'react-icons/bs'


const DoctorCard = ({doctor}) => {
    const {name, avgRating, totalRating, photo, specialization, totalPatient, hospital} = doctor
  return (
    <div className='p-3 lg:p-5'>
        <div>
            <img src={photo} className="w-full" alt="" />
        </div>
        <h2 className="text-[18px] lg:text-[26px] text-headingColor font-[700]
        mt-3 lg:mt-5">{name}</h2>
        <div className="mt-2 lg:mt-4 flex items-center justify-between">
            <span className='bg-[#CCF0F3] text-irisBlueColor py-1 px-2 text-[12px]
            lg:text-[16px] font-semibold lg:py-2 lg:px-6 rounded'>{specialization}</span>

            <div className='flex items-center gap-[6px]'>
                <span className='flex items-center gap[6px] text-[14px] lg:text-[16px]
                font-semibold text-headingColor'>{avgRating}<img src={starIcon} className="m-[10px]" alt="star icon" /></span>
                <span className='text-[14px] lg:text-[16px]
                text-textColor font-[400]'>({totalRating})</span>
            </div>
        </div>
    </div>
  )
}

export default DoctorCard