import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Notfound from "../404/Notfound"
export default function AppRouters(){
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<h1>about</h1>} />
                    <Route path="*" element={<Notfound/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}