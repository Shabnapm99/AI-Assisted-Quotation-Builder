import React, { useEffect, useState } from 'react'
import { FiArrowLeft, FiBriefcase, FiFileText, FiMail, FiPhone, FiUser, FiEdit3, FiTrash2, FiPlus } from 'react-icons/fi';
import { removeClient, setIsEditing, setSelectedClient } from '../features/clientSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { axiosInstance } from '../axios/axiosInstance';
import { toast } from 'react-toastify';
import NewClient from './NewClient';

function ClientDetailsPage() {

    const [showAddModal, setShowModal] = useState(false);
    const client = useSelector((state) => state.client.selectedClient);
    let dispatch = useDispatch();
    let navigate = useNavigate();

    const urlParam = useParams();
    const id = urlParam.id;

    //Fetch client details
    const getClient = async () => {
        try {
            let response = await axiosInstance.get(`/clients/${id}`);
            if (response.status === 200) {
                dispatch(setSelectedClient(response?.data?.client))
            }
        } catch (error) {
            console.error(`Error occurred: ${error.message}`);
            toast.error('Failed to load client details');
        }
    }

    //Delete client
    const handleDeleteClient = async () => {
        if (!window.confirm(`Are you sure you want to permanently delete ${client?.name || 'this client'}?`)) {
            return;
        }

        try {
            let response = await axiosInstance.delete(`/clients/${id}`);
            if (response.status === 200) {
                dispatch(removeClient(id))
                toast.success('Client profile removed successfully');
                navigate('/dashboard/clients');
            }
        } catch (error) {
            console.error(`Error deleting client: ${error.message}`);
            toast.error('Could not complete deletion request');
        }
    };

    //Edit client
    const handleEditClient = async () => {

        try {
            setShowModal(true);
            // let response = await axiosInstance.put(`/clients/${id}`);
            // if (response.status === 200) {
            //     dispatch(setIsEditing({
            //         isEditing: true,
            //         uniqueId: id
            //     }))

            //     toast.success('Client profile edited successfully');

            // }

            dispatch(setIsEditing({
                boolean: true,
                id: id
            }))

        } catch (error) {
            console.error(`Error deleting client: ${error.message}`);
            toast.error('Could not complete edit request');
        } finally { navigate(`/dashboard/clients/${id}`); }
    };

    useEffect(() => {
        getClient()
    }, [id])

    return (
        <section className="grow overflow-y-auto p-8 bg-background">
            <div className="max-w-container-max mx-auto space-y-6">

                {/* Top Actions Sub-Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    {/* Back Button */}
                    <div>
                        <button
                            onClick={() => navigate('/dashboard/clients')}
                            className="flex items-center gap-2 text-sm font-medium text-on-surface-variant hover:text-secondary transition-colors"
                        >
                            <FiArrowLeft size={16} />
                            Back to Directory
                        </button>
                    </div>

                    {/* Management Actions */}
                    <div className="flex items-center gap-2 self-end sm:self-auto">
                        <button
                            onClick={handleEditClient}
                            className="px-3.5 py-2 bg-surface-container-low border border-outline-variant text-on-surface text-sm font-medium rounded-lg flex items-center gap-2 shadow-sm hover:bg-surface-container transition-all active:scale-95"
                        >
                            <FiEdit3 size={15} />
                            Edit Client
                        </button>
                        <button
                            onClick={handleDeleteClient}
                            className="px-3.5 py-2 bg-error-container/20 border border-error/30 text-error text-sm font-medium rounded-lg flex items-center gap-2 shadow-sm hover:bg-error-container hover:text-on-error-container transition-all active:scale-95"
                        >
                            <FiTrash2 size={15} />
                            Delete Profile
                        </button>
                    </div>
                </div>

                {/* Simplified Client Info Card */}
                <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant shadow-sm space-y-6">
                    <h2 className="text-xl font-semibold text-on-surface tracking-tight border-b border-outline-variant pb-3">
                        Client Information
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Core Fields */}
                        <div className="space-y-4">
                            {/* Name */}
                            <div className="flex items-start gap-3">
                                <div className="mt-1 text-outline"><FiUser size={18} /></div>
                                <div>
                                    <span className="text-xs font-medium text-on-surface-variant block">Name</span>
                                    <span className="text-base font-medium text-on-surface">{client?.name || '—'}</span>
                                </div>
                            </div>

                            {/* Company */}
                            <div className="flex items-start gap-3">
                                <div className="mt-1 text-outline"><FiBriefcase size={18} /></div>
                                <div>
                                    <span className="text-xs font-medium text-on-surface-variant block">Company</span>
                                    <span className="text-base font-medium text-on-surface">{client?.company || '—'}</span>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-3">
                                <div className="mt-1 text-outline"><FiMail size={18} /></div>
                                <div>
                                    <span className="text-xs font-medium text-on-surface-variant block">Email</span>
                                    {client?.email ? (
                                        <a href={`mailto:${client.email}`} className="text-base font-medium text-secondary hover:underline">
                                            {client.email}
                                        </a>
                                    ) : '—'}
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-3">
                                <div className="mt-1 text-outline"><FiPhone size={18} /></div>
                                <div>
                                    <span className="text-xs font-medium text-on-surface-variant block">Phone</span>
                                    <span className="text-base font-medium text-on-surface">{client?.phone || '—'}</span>
                                </div>
                            </div>
                        </div>

                        {/* Notes */}
                        <div className="flex flex-col">
                            <div className="flex items-start gap-3 h-full">
                                <div className="mt-1 text-outline"><FiFileText size={18} /></div>
                                <div className="w-full h-full flex flex-col">
                                    <span className="text-xs font-medium text-on-surface-variant block mb-1">Notes</span>
                                    <div className="p-3 bg-background border border-outline-variant rounded-lg text-sm text-on-surface-variant min-h-30 grow whitespace-pre-line">
                                        {client?.notes || 'No notes available for this client.'}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* --- FUTURE QUOTATION SECTION BLOCK --- */}
                <div className="pt-4 space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-on-surface tracking-tight">Quotations</h3>

                        <button
                            onClick={() => navigate(`/dashboard/newquote`)}
                            className="px-4 py-2 bg-secondary text-on-secondary text-sm font-medium rounded-lg flex items-center gap-2 shadow-sm hover:opacity-90 active:scale-95 transition-all"
                        >
                            <FiPlus size={16} />
                            Add Quotation
                        </button>
                    </div>

                    {/* Placeholder Area for future Table rendering */}
                    <div className="p-8 border-2 border-dashed border-outline-variant rounded-xl flex items-center justify-center text-on-surface-variant bg-surface-container-low/30">
                        <p className="text-sm italic">Quotation Table Component Will Be Inserted Here</p>
                    </div>
                </div>

            </div>
            {/* Edit client modal */}
            {
                showAddModal && <NewClient onClose={() => setShowModal(false)} />
            }
        </section>
    );
}

export default ClientDetailsPage;