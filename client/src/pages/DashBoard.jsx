import React from 'react'
import { useState } from 'react'
import SideBar from '../components/SideBar'
import { HiMenu } from 'react-icons/hi'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

function DashBoard() {

    const [open, setOpen] = useState(false)

    return (
        <div className='flex min-h-screen'>

            {/* Sidebar */}
            <SideBar open={open} setOpen={setOpen} />

            <main className='flex-1 md:ml-64'>

                {/* Mobile Header Bar */}
                <div className="md:hidden flex items-center p-4 bg-primary-container text-white">
                    <button onClick={() => setOpen(true)}>
                        <HiMenu size={28} />
                    </button>
                    <h1 className="ml-4 font-bold">QuoteAI</h1>
                </div>

                <Header />

                <div className='p-6'>
                    <Outlet />
                </div>

                <Footer />
            </main>

        </div>
    )
}

export default DashBoard