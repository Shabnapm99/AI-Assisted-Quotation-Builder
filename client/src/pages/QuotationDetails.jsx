import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { IoMdDownload } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { MdCorporateFare } from "react-icons/md";
import { IoCallOutline, IoPersonOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { axiosInstance } from '../axios/axiosInstance';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentQuote } from '../features/quotationSlice';

function QuotationDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const quote = useSelector((state)=>state.quote.currentQuote);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const res = await axiosInstance.get(`/quotations/${id}`);
                dispatch(setCurrentQuote(res?.data?.quote));

            } catch (err) {
                console.error(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchQuote();
    }, [id]);

    if (loading) {
        return <div className="p-6 text-center text-on-surface-variant">Loading quotation...</div>;
    }

    if (!quote) {
        return <div className="p-6 text-error text-center" >Quotation not found</div>;
    }

    return (
        <main className="flex-1 ps-8 space-y-8 mx-auto w-full min-h-full">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <h2 className="font-semibold text-[28px] text-on-surface">
                        {quote.title}
                    </h2>

                    <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
                        {quote.status}
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-on-surface-variant 
                    hover:bg-surface-container-low transition-colors">
                        <IoMdDownload /> Download </button>
                    <button className="flex items-center gap-2 px-4 py-2 border border-outline-variant rounded-lg text-on-surface-variant 
                    hover:bg-surface-container-low transition-colors">
                        <CiEdit /> Edit </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-on-surface text-on-primary rounded-lg hover:opacity-90 active:scale-95 
                    transition-all">
                        <MdDeleteOutline /> Delete </button> </div>
            </div>

            {/* Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                {/* LEFT */}
                <div className="lg:col-span-8">

                    <div className="rounded-xl border border-outline-variant/30 overflow-hidden bg-surface-container-lowest">

                        <div className="px-6 py-4 border-b">
                            <h3 className="text-lg font-semibold">Quotation Items</h3>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-on-surface">
                                <thead className="bg-surface-container-low text-sm">
                                    <tr>
                                        <th className="px-6 py-3">Description</th>
                                        <th className="px-6 py-3 text-center">Quantity</th>
                                        <th className="px-6 py-3 text-right">Unit Price</th>
                                        <th className="px-6 py-3 text-right">Total</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {quote.items?.map((item, index) => (
                                        <tr key={item._id} className="border-t border-gray-300 hover:bg-surface-container-low/30">
                                            <td className="px-6 py-4">
                                                <div className="font-semibold">{item.title}</div>
                                                <div className="text-sm text-gray-500">{item.description}</div>
                                            </td>
                                            <td className="px-6 py-4 text-center">{item.quantity}</td>
                                            <td className="px-6 py-4 text-right">{item.unit_price} BD</td>
                                            <td className="px-6 py-4 text-right font-medium">
                                                {item.total} BD
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="p-6 flex justify-end font-bold text-on-surface">
                            Grand Total: BD {quote.total_amount}
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="lg:col-span-4 space-y-6 rounded-xl bg-surface-container-lowest">

                    <div className="p-6  ">
                        <h3 className="text-sm uppercase text-gray-500 mb-4">
                            Client Information
                        </h3>

                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                                <MdCorporateFare />
                            </div>

                            <div className="font-semibold text-on-background">
                                {quote.client?.company}
                            </div>
                        </div>

                        <div className="space-y-3 text-sm text-on-background">
                            <div className="flex items-center gap-2">
                                <IoPersonOutline /> {quote.client?.name}
                            </div>

                            <div className="flex items-center gap-2">
                                <MdOutlineMail /> {quote.client?.email}
                            </div>

                            <div className="flex items-center gap-2">
                                <IoCallOutline /> {quote.client?.phone}
                            </div>
                        </div>
                    </div>

                    <div className="text-sm text-gray-500 p-6">
                        <div className="font-semibold">Created</div>
                        <div>{new Date(quote.createdAt).toLocaleString()}</div>
                    </div>

                </div>
            </div>
        </main>
    );
}

export default QuotationDetails;