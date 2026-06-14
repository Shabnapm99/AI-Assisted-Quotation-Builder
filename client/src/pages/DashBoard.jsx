import React, { useEffect } from 'react'
import { useState } from 'react'
import SideBar from '../components/SideBar'
import { HiMenu } from 'react-icons/hi'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import { axiosInstance } from '../axios/axiosInstance'
import { setClients } from '../features/clientSlice'
import { useDispatch } from 'react-redux'

function DashBoard() {

    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const getData = async () => {
        try {

            //from mongodb

            let response = await axiosInstance.get('/clients');
            if (response.status === 200) {
                console.log("clients array:", response.data.clients);
                dispatch(setClients(response.data.clients));
            }

        } catch (error) {
            console.error(`Error occured : ${error.message}`);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='flex min-h-screen'>

            {/* Sidebar */}
            <SideBar open={open} setOpen={setOpen} />

            <main className='flex-1 md:ml-64 bg-background'>

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