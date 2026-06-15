import React from 'react'
import { MdDelete } from 'react-icons/md'

function QuoteItemsTable({ quoteItems,handleDelete }) {
    return (
        <div className="overflow-x-auto bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 overflow-hidden mt-2 mb-2">
            <table className="w-full text-left text-on-surface">
                <thead className="bg-surface-container-low text-sm text-on-surface-variant">
                    <tr>
                        <th className="px-6 py-3">Description</th>
                        <th className="px-6 py-3 text-center">Quantity</th>
                        <th className="px-6 py-3 text-right">Unit Price</th>
                        <th className="px-6 py-3 text-right">Total</th>
                        <th
                            className="px-6 py-3 font-label-sm text-label-sm text-on-surface-variant border-b border-outline-variant/20 text-right print:hidden">
                            Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {quoteItems?.map((item, index) => (
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

                            <td className="px-6 py-4 text-right print:hidden">

                                {/* <button
                                    className="px-3 py-2 bg-emerald-400 text-on-secondary font-[14px] text-[14px] rounded-lg flex items-center gap-2 
                                                    shadow-sm hover:opacity-90 active:scale-95 transition-all" onClick={() => setShowModal(true)}>

                                    Add Quote
                                </button> */}

                              {/* <button
                                        className="p-1.5 text-on-surface-variant hover:text-secondary hover:bg-secondary/10 rounded transition-all"
                                        title="Edit">
                                        <span className="text-[20px]"
                                            data-icon="edit"><FaEdit /></span>
                                    </button> */}
                                    <button
                                        className="p-1.5 text-error/80  hover:bg-error/10 rounded transition-all"
                                        title="Delete"
                                        onClick={()=>handleDelete(item._id)}>
                                        <span className=" text-[20px]"
                                            data-icon="delete"><MdDelete /></span>
                                    </button>
                                
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default QuoteItemsTable