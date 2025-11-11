import { useState } from 'react';
import logo from '../assets/logo.png';


const Navbar = () => {
    const [open, setOpen] = useState(false)
    return(
      <div className='w-full h-16 md:h-20 flex items-center justify-between'>
        <div className='flex items-center gap-4 text-2xl font-bold'>
           <img src={logo} className="w-8 h-8"alt="logo" />
           <span>lamaLog</span>
        </div>
        <div className='md:hidden'>
            <div className='cursor-pointer text-4xl bg-green-600 '
            onClick={() => setOpen((prev) => !prev)}
            >
                {open ? "X" : "☰"}
            </div>
            {/* MOBILE LINK LIST*/}
            <div
            className={`w-full h-screen bg-[#e6e6ff] flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}

        > </div>
        </div>
        {/* DESKTOP MENU*/}
        <div className='hidden md:flex'>D</div>
      </div>
      
)}

export default Navbar



      
    