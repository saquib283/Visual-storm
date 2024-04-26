import React from 'react'

const Header = ({ title, subtitle }: { title: string, subtitle?: string }) => {
  return (
    <div className='shadow-md shadow-gray-500 px-8 py-2 rounded-md  w-max'>
      <h2 className="h2-bold text-dark-600 line-clamp-1">{title}</h2>
      {subtitle && <p className="p-2-regular mt-4 line-clamp-1">{subtitle}</p>}
    </div>
  )
}

export default Header