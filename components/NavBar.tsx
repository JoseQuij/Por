"use client"
import React, { useState } from 'react'
import { IoMdClose, IoMdMenu } from 'react-icons/io'
import { RiSunLine, RiMoonFill } from 'react-icons/ri'
import { useTheme } from 'next-themes'
import Link from 'next/link'

interface Nav_Item {
    label: string,
    page: string
}
const Nav_Items:Array<Nav_Item> = [
    {
        label: 'Home',
        page: ''
    },
    {
        label: 'Projects',
        page: 'project'
    },
    {
        label: 'Watch',
        page: 'watch'
    },
    {
        label: 'About',
        page: 'about'
    }
]
const NavBar = () => {
    const { systemTheme, theme, setTheme } = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme
    const [ active, setActive ] = useState(false)
  return (
    <header className='border-b border-neutral-700 shadow-2xl dark:border-b dark:shadow-2xl dark:shadow-gray-200'>
        <div className='flex justify-between'>
            <div>
                <div>
                    <h1 className='font-bold font-sans text-lg' >Jose Quijije</h1>
                </div>
                <button className='md:hidden' onClick={() => setActive(!active)}>{active ? (<button><IoMdMenu/></button>) : (<button><IoMdClose/></button>)}</button>
            </div>
            
            <div className={ `md:block ${active ? "hidden" : "block"} `}>
                    
                        {Nav_Items.map((e) => { return (
                            <Link className='mx-2 flex flex-col' href={e.page}>{e.label}</Link>
                        )})}

                
            </div>
                {currentTheme === 'dark' ? (<button onClick={() => setTheme('light')}><RiSunLine/></button>) : (<button onClick={() => setTheme('dark')}><RiMoonFill/></button>)}
            
        </div>
    </header>
  )
}

export default NavBar