// "use client"
// import React, { useState} from 'react'
// import { useTheme } from 'next-themes'
// import { IoMdClose, IoMdMenu } from 'react-icons/io'
// import { RiMoonFill, RiSunLine } from 'react-icons/ri'
// import Link from 'next/link'

// interface navItem {
//     label: string,
//     page: string,
// }
// const Nav_Items: Array<navItem> = [
//     {
//         label: 'Home',
//         page: 'home'
//     },
//     {
//         label: 'About',
//         page: 'about'
//     },
//     {
//         label: 'Profile',
//         page: 'profile'
//     },
// ]
// const NavBar = () => {
//     const [ navBar, setNavBar ] = useState(false)
//     const { theme, setTheme, systemTheme } = useTheme()
//     const currentTheme = theme ==="system" ? systemTheme : theme
//     return (
//     <header className='w-full mx-auto py-7 px-4 sm:px-20 fixed top-0 z-50 shadow  dark:border-b-2 dark:border-neutral-100' >
//         <div className="justify-between md:items-center md:flex">
//             <div>
//                 <div className='mx-4 md:block'>
//                     <div >
//                         <h2>Hello, There</h2>
//                     </div>
//                     <div className='md:hidden'>
//                         <button className=' p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border' onClick={() => setNavBar(!navBar)}> 
//                             { navBar ?  <IoMdClose size={30}/> : <IoMdMenu size={30}/> }
//                         </button>
//                     </div>
//                 </div>
//             </div>
//             <div>
//                 <div className={`flex-1 mx-4 md:pb-0 md:mt-0 md:block ${navBar ? "block" : "hidden" }`}>
//                     <div >
//                         <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
//                                 { Nav_Items.map((item,idx) => {
//                                     return ( 
//                                         <Link className='block lg:inline-block  hover:text-neutral-500 dark:text-white' href={`${item.label}`} key={idx}>{item.label}</Link>
//                                     )
//                                 })}
//                                 { currentTheme === "dark" ? (
//                                     <button onClick={() => setTheme("Light")}><RiSunLine size={25}/></button>
//                                 ) : (
//                                     <button onClick={() => setTheme("dark")}><RiMoonFill size={25}/></button>
//                                 )}
//                         </div>
//                     </div>
//                 </div>    
//             </div>
//         </div>
//     </header>
//   )
// }

// export default NavBar

import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { RiMoonFill, RiSunLine } from 'react-icons/ri'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import Link from 'next/link'

interface navItem {
    label: string,
    page: string,
}


const Nav_Items: Array<navItem> = [
    {
        label: "Home",
        page: "home"
    },
    {
        label: "Profile",
        page: "profile"
    },
    {
        label: "About",
        page: "about"
    }
]

const NavBar = () => {

    const [ navBar, setNavBar ] = useState(false)
    const { theme, systemTheme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme 

  return (
    <header className='w-full mx-auto py-7 px-4 sm:px-20 fixed top-0 z-50 shadow  dark:border-b-2 dark:border-neutral-100'>
        <div>
            <div>
                <div>
                    <h2>Hello there, I'm Jose</h2>
                </div>
                <button className=' p-2 text-gray-700 rounded-md outline-none md:hidden focus:border-gray-400 focus:border' onClick={() => setNavBar(!navBar)}>
                    { navBar ? (<IoMdClose size={30}/>) : (<IoMdMenu size={30}/>) }
                </button>
            </div>
            <div>
                <div>
                    <div className={`flex-1 mx-4 md:pb-0 md:mt-0 md:block ${navBar ? "block" : "hidden" }`}>
                        <div className='items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0'>
                            {Nav_Items.map((item, idx) => {
                                return (
                                    <Link href={`${item.page}`} key={idx}>{item.label}</Link>
                                )
                            })}
                        </div>
                    </div>
                    {
                            currentTheme === "dark" ? (<button onClick={() => setTheme("light")}><RiSunLine/></button>) : (<button onClick={() => setTheme('dark')}><RiMoonFill/></button>)       
                        }
                </div>
            </div>
        </div>
    </header>
  )
}

export default NavBar