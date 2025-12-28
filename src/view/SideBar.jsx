import { NavLink } from 'react-router-dom'
import lang from '../resources/strings'

function SideBar({ }) {
    const currentLang = lang[localStorage.getItem('lang') || 'en']
    return (
        <nav className='border-r border-gray-300/80 py-4' >
            <div className='flex-col gap-4 md:flex hidden'>
                <NavLink to='/' className={({ isActive }) => `px-4 lg:px-8 py-2 lg:py-4 text-xl font-semibold text-gray-400 cursor-pointer hover:text-black ${isActive ? '!text-black' : ''}`}>{currentLang['home']}</NavLink>
                <NavLink to='/editor' className={({ isActive }) => `px-4 lg:px-8 py-2 lg:py-4 text-xl font-semibold text-gray-400 cursor-pointer hover:text-black ${isActive ? '!text-black' : ''}`}>{currentLang['editor']}</NavLink>
                <NavLink to='/docs' className={({ isActive }) => `px-4 lg:px-8 py-2 lg:py-4 text-xl font-semibold text-gray-400 cursor-pointer hover:text-black ${isActive ? '!text-black' : ''}`}>{currentLang['docs']}</NavLink>
                <div className='flex flex-col
                    [&>*]:px-6 [&>*]:lg:px-10 [&>*]:py-2 [&>*]:text-lg [&>*]:font-medium [&>*]:text-gray-400 [&>*]:cursor-pointer [&>*]:hover:text-black
                '>
                    <NavLink to='/docs/introduction'>Introduction</NavLink>
                    <NavLink to='/docs/variables'>Variables</NavLink>
                    <NavLink to='/docs/operators'>Operators</NavLink>
                    <NavLink to='/docs/control_flow'>Control flow</NavLink>
                    <NavLink to='/docs/functions'>Functions</NavLink>
                    <NavLink to='/docs/comment'>Comment</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default SideBar