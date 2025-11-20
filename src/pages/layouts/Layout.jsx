import Navbar from "../../components/layout/Navbar"
import Footer from "../../components/layout/Footer"

import { Outlet } from "react-router-dom"

export default function Layout(props) {
    return (
        <>
            <Navbar />
            <main className="px-1" style={{ maxWidth: 1600, margin: '0 auto' }}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}