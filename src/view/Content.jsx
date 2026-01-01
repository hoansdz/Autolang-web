import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Editor from './Editor'
import Docs from './Docs'
import Introduce from './documentation/Introduce'
import SideBar from './SideBar'

function Content({ }) {
    return (
        <BrowserRouter>
            <section className='flex flex-row flex-1'>
                <SideBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='Autolang-web/editor' element={<Editor />} />
                    <Route path='Autolang-web/docs' element={<Docs />} />
                    <Route path='Autolang-web/docs/introduction' element={<Introduce />} />
                </Routes>
            </section>
        </BrowserRouter>
    )
}

export default Content