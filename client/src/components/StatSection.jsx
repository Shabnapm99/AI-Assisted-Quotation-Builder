import React from 'react'
import StatCard from './StatCard'
import { useSelector } from 'react-redux';

function StatSection() {
    const clients = useSelector((state)=>state.client.clients);
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            <StatCard title={'Total clients'} count={clients.length} />
            <StatCard title={'Total quotes'} count={clients.length} />
            <StatCard title={'Approved quotes'} count={clients.length} />
            <StatCard title={'Pending quotes'} count={clients.length} />
        </div>
    )
}

export default StatSection