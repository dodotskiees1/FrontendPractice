import React from 'react'

interface ButtonProps {
  size: 'sm' | "lg";
  text: string
}

const Button: React.FC<ButtonProps> = ({ size, text }) => {
  return (
    <div>
    <button className={`bg-pm-600 shadow-lg rounded-3xl  text-white  ${size === "sm"? "h-[36px] w-[119px]": "h-[52px] w-[250px]"}`}>{text}</button>
   
    </div>
  )
}

export default Button
