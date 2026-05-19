import React from 'react'

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
        <nav className='flex justify-between items-center px-4 py-4'>
            <div className='flex items-center justify-center gap-4'>
                <div>
                    <h1>Image</h1>
                </div>
                <ul className='flex items-center justify-center gap-2'>
                    {navItems.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))}
                </ul>
            </div>
            <div className='flex items-center justify-center gap-4'>
                <div>
                    <span>Search</span>
                </div>
                <div>
                    <button>Darkmode Button</button>
                </div>

            </div>
        </nav>
    )
}

export default Navbar