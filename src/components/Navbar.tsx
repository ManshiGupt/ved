'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/images/nav.jpg" alt="Logo" width={50} height={50} />
        </div>
        <div className="hidden md:flex space-x-6 text-white">
          <Link href="/bhajan" className="hover:underline">
            Bhajan
          </Link>
          <Link href="/pooja" className="hover:underline">
            Pooja
          </Link>
          <Link href="/panchang" className="hover:underline">
            Panchang
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Book Pandit</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Pooja Samagrih</button>
        </div>
        <div className="md:hidden flex items-center pr-4">
          <button
            className="text-white focus:outline-none"
            aria-label="Open Menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-4 text-white">
            <li>
              <Link href="/bhajan" className="block hover:underline" onClick={() => setIsOpen(false)}>
                Bhajan
              </Link>
            </li>
            <li>
              <Link href="/pooja" className="block hover:underline" onClick={() => setIsOpen(false)}>
                Pooja
              </Link>
            </li>
            <li>
              <Link href="/panchang" className="block hover:underline" onClick={() => setIsOpen(false)}>
                Panchang
              </Link>
            </li>
            <li>
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setIsOpen(false)}>Book Pandit</button>
            </li>
            <li>
              <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={() => setIsOpen(false)}>Pooja Samagrih</button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;






// // import React from 'react'

// // const Navbar = () => {
// //     return (
// //         <div className="navbar bg-base-100 z-10 absolute">
// //             <div className="navbar-start">
// //                 <div className="dropdown">
// //                 <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
// //         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
// //       </div>
// //                     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
// //                         <li><a>Item 1</a></li>
// //                         <li>
// //                             <a>Parent</a>
// //                             <ul className="p-2">
// //                                 <li><a>Submenu 1</a></li>
// //                                 <li><a>Submenu 2</a></li>
// //                             </ul>
// //                         </li>
// //                         <li><a>Item 3</a></li>
// //                     </ul>
// //                 </div>
// //                 <a className="btn btn-ghost text-xl">
// //                         <img src="./public/om.jpg" alt="Logo" className="h-5 w-5" />
// //                 </a>
// //             </div>
// //             <div className="navbar-center hidden lg:flex mx-2">
// //                 <ul className="menu menu-horizontal px-1">
// //                     <li><a>Bhajan </a></li>
// //                     <li>
// //                         <details>
// //                             <summary>Panchang</summary>
// //                             <ul className="p-2">
// //                                 <li><a>Submenu 1</a></li>
// //                                 <li><a>Submenu 2</a></li>
// //                             </ul>
// //                         </details>
// //                     </li>
// //                     <li><a>Pooja</a></li>
// //                 </ul>
// //             </div>



// //             <div className="navbar-end">
// //                 <label className="swap swap-rotate mx">

// //                     {/* this hidden checkbox controls the state */}
// //                     <input type="checkbox" className="theme-controller" value="synthwave" />

// //                     {/* sun icon */}
// //                     <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>

// //                     {/* moon icon */}
// //                     <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>

// //                 </label>
// //                 <a className="btn mx-2">Book Pandit</a>
// //                 <a className="btn">Samagrih</a>
// //             </div>
// //         </div>
// //     )
// // }

// // export default Navbar



// import React from 'react'
// import Image from 'next/image';
// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-4">
//     <div className='flex justify-between h-10 items-center shadow-lg container'>
//         <div className='pl-11'>
//             <Image src="/images/nav.jpg" alt="Logo" width={50} height={50} />
//         </div>

//         <div className='flex text-white space-x-6 '>
//             <h4> Bhajan</h4>
//             <h4>Pooja</h4>
//             <h4>Panchang</h4>
//         </div>

//         <div className='flex text-white space-x-6'>
//             <button className="bg-blue-500 text-white px-4 py-2 rounded">Book pandit</button>
//             <button className="bg-blue-500 text-white px-4 py-2 rounded">Pooja Samagrih</button>
//         </div>
//     </div>
//     </nav>
//   )
// }

// export default Navbar

