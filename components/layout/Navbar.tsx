import React from 'react'
import Darkmode from '@/public/SVG/Darkmode'
import { Separator } from '@/components/ui/separator'

const Navbar = () => {

    const navItems = [
        {
            name: "Components",
            href: "#components"
        },
        {
            name: "Blogs",
            href: "#blogs"
        },
        {
            name: "Templates",
            href: "#templates"
        },
        {
            name: "Pricing",
            href: "#pricing"
        }
    ]
    return (
        <nav className='flex justify-between items-center px-8 py-4'>
            <div className='flex items-center justify-center gap-4'>
                <div>
                    <h1>Image</h1>
                </div>
                <ul className='flex items-center justify-center gap-2 text-[14px] font-light'>
                    {navItems.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))}
                </ul>
            </div>
            <div className='flex items-center justify-center gap-4'>
                <div>
                    <span>Search</span>
                </div>
                <Separator orientation='vertical' />
                <div>
                    <Darkmode />
                </div>

            </div>
        </nav>
    )
}

export default Navbar