import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [open, setOpen] = useState(false);
    const menuLinks = [
        { name: "HOME", link: "/" },
        { name: "ABOUT", link: "/about" },
        { name: "SKILLS", link: "#skills" },
        { name: "SERVICES", link: "#services" },
        { name: "PORTFOLIO", link: "#portfolio" },
        { name: "COMTACT", link: "#contact" }
    ];
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const nav = document.querySelector("nav");
            window.scrollY > 0 ? setSticky(true) : setSticky(false);
        });
    }, [])
    return (
        <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "md:bg-white/60 text-gray-900 " : "text-white"} border-b-[1px] border-b-white`}>
            <div className='flex items-center justify-between'>
                <div className='mx-7'>
                    <h4 className='text-4xl uppercase font-bold'>
                        PORT<span className='text-cyan-600'>FOLIO</span>
                    </h4>
                </div>
                <div className={` ${sticky ? "md:bg-white/0 bg-white " : "bg-white"
                    } text-gray-900 md:block hidden px-7 py-2 font-medium rounded-bl-full`}
                >
                    <ul className='flex items-center gap-1 py-2 text-lg'>
                        {menuLinks?.map((menu, i) => (
                            <li key={i} className='px-6 hover:text-cyan-600'>
                                <a href={menu?.link}>{menu?.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div
                    onClick={() => setOpen(!open)}
                    className={`z-[999] ${open ? "text-gray-900" : "text-gray-100"} text-3xl md:hidden m-5`}>
                    <BiMenu name="menu"></BiMenu>
                </div>
                <div className={`md:hidden text-gray-900 absolute w-2/3 h-screem px-7 py-2 font-medium bg-white top-0 duration-300 ${open ? "right-0" : "right-[-100%]"}`}>
                    <ul className='flex flex-col jusify-center h-full gap-10 py-2 text-lg'>
                        {
                            menuLinks?.map((menu, i) => (
                                <li key={i} className='px-6 hover:text-cyan-600'>
                                    <a href={menu?.link}>{menu.name}</a>
                                </li>
                            ))
                        }
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