import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center rounded-lg p-4 bg-transparent border border-[#1b9c98] text-white'>
        <img src="" alt="" />
    
            <ul className='flex justify-between items-center space-x-4'>
                <li cla><a href="http://" target="_blank" rel="noopener noreferrer">Events</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">My Tickets</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer">About Project</a></li>
            </ul>

        <button className='bg-white border-0 rounded-lg text-black p-4'>My Tickets</button>
    </header>
  )
}

export default Header