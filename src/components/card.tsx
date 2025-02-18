import React from 'react'
interface CardProps {
    text:string
}
const Card: React.FC<CardProps> = ({ text }) => {
  return (
    <div className='bg-gray-300 shadow-lg h-[264px] w-[300px]'>
      {text}
    </div>
  )
}

export default Card
