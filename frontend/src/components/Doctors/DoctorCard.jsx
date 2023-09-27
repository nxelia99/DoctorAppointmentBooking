import React from 'react'
import starIcon from '../../assets/images/Star.png'
import {BsArrowRight} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const DoctorCard = ({doctor}) => {
    const {name, avgRating, totalRating, photo, specialization, totalPatients, hospital} = doctor
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

        <div className='mt-[18px] lg:mt-5 flex items-center justify-between'>
            <div>
                <h3 className="text-[16px] lg:text-[18px]
                font-semibold text-headingColor">+{totalPatients} patients</h3>
                <p className='text-[14px] font-[400] text-textColor'>At {hospital}</p>
            </div>
            <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] flex items-center
          justify-center group hover:bg-primaryColor hover:border-none'>
            <BsArrowRight className='group-hover:text-white w-6 h-5' />
          </Link>
        </div>
    </div>
  )
}

export default DoctorCard