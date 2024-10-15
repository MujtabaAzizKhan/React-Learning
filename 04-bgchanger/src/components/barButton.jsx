import React from 'react'

export default function barButton({color= "black", onClick} ) {
  return (
    <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{backgroundColor:color}} onClick={onClick}>{color} </button>
  )
}
