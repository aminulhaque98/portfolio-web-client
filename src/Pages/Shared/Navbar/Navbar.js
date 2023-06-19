import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuLinks = [
        { name: "HOME", link: "#home" },
        { name: "ABOUT", link: "#about" },
        { name: "SKILLS", link: "#skills" },
        { name: "SERVICES", link: "#services" },
        { name: "PORTFOLIO", link: "#portfolio" },
        { name: "COMTACT", link: "#contact" }
    ]
    return (
        <nav>
            <div className='flex items-center justify-between'>
                <div className='mx-7'>
                    <h4 className='text-4xl uppercase font-bold'>
                        freelancer<span className='text-cyan-600'>Shawon</span>
                    </h4>
                </div>
                <div className="text-gray-900 md:block hidden px-7 py-2 font-medium bg-white rounded-bl-full">
                    <ul className='flex items-center gap-1 py-2 text-lg'>
                        {menuLinks?.map((menu, i) => (
                            <li key={i} className='px-6 hover:text-cyan-600'>
                                <a href={menu?.link}>{menu?.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>


        // <div>
        //     <div className="navbar bg-base-100">
        //         <div className="navbar-start">
        //             <div className="dropdown">
        //                 <label tabIndex={0} className="btn btn-ghost lg:hidden">
        //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //                 </label>
        //                 <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        //                     <li><Link>Item 1</Link></li>
        //                     <li>
        //                         <Link>Parent</Link>
        //                         <ul className="p-2">
        //                             <li><Link>Submenu 1</Link></li>
        //                             <li><Link>Submenu 2</Link></li>
        //                         </ul>
        //                     </li>
        //                     <li><Link>Item 3</Link></li>
        //                 </ul>
        //             </div>
        //             <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
        //         </div>
        //         <div className="navbar-center hidden lg:flex">
        //             <ul className="menu menu-horizontal px-1">
        //                 <li><Link>Item 1</Link></li>
        //                 <li tabIndex={0}>
        //                     <details>
        //                         <summary>Parent</summary>
        //                         <ul className="p-2">
        //                             <li><Link>Submenu 1</Link></li>
        //                             <li><Link>Submenu 2</Link></li>
        //                         </ul>
        //                     </details>
        //                 </li>
        //                 <li><Link>Item 3</Link></li>
        //             </ul>
        //         </div>
        //         <div className="navbar-end">
        //             <Link className="btn">Button</Link>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Navbar; <h1>this is navbar page</h1>