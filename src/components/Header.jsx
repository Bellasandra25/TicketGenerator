import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center mt-2 p-3 bg-[#033c46] border border-[#1a331a] text-white w-[95%] rounded-lg mb-4'>
        <div className='flex items-center space-x-2'>
        <img src="/assets/hugeicons_ticket-01.png" alt="" />
        <img src="/assets/ticz.png" alt="" />
        </div>
    
            <ul className='flex justify-between items-center space-x-4'>
                <li ><a href="http://" target="_blank" rel="noopener noreferrer" className='hover:underline'>Events</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer" className='hover:underline'>My Tickets</a></li>
                <li><a href="http://" target="_blank" rel="noopener noreferrer" className='hover:underline'>About Project</a></li>
            </ul>

        <button className='bg-white border-0 rounded-lg text-black p-4'>My Tickets</button>
    </header>
  )
}

export default Header