import React from 'react'
import { useNavigate } from 'react-router-dom';

function QuotesTable({ quotes }) {

  const navigate = useNavigate();

  return (

    <div
      className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden">
      <div className="overflow-y-auto max-h-100">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 z-10 bg-surface-container-low/90 backdrop-blur">
            <tr className="bg-surface-container-low/50">
              <th
                className="px-6 py-3 font-label-sm text-label-sm text-on-surface-variant border-b border-outline-variant/20">
                Client</th>
              <th
                className="px-6 py-3 font-label-sm text-label-sm text-on-surface-variant border-b border-outline-variant/20">
                Title</th>
              <th
                className="px-6 py-3 font-label-sm text-label-sm text-on-surface-variant border-b border-outline-variant/20">
                status</th>
              <th
                className="px-6 py-3 font-label-sm text-label-sm text-on-surface-variant border-b border-outline-variant/20">
                Total Amount</th>
              <th
                className="px-6 py-3 font-label-sm text-label-sm text-on-surface-variant border-b border-outline-variant/20">
                Created date</th>

            </tr>
          </thead>
          <tbody>
            {
              quotes.length > 0 ? (quotes.map((quote) => {
                return(

                <tr key={quote._id} className="hover:bg-surface-container-low/30 transition-colors group"
                  onClick={() => navigate(`/dashboard/quotes/${quote._id}`)}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-body-md font-semibold text-on-surface">{quote.client.company}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-body-md text-on-surface-variant">{quote.title}
                  </td>
                  <td className="px-6 py-4 text-body-md text-on-surface-variant">{quote.status}
                  </td>
                  <td className="px-6 py-4 text-body-md text-on-surface-variant">{quote.total_amount}</td>
                  <td className="px-6 py-4 text-body-md text-on-surface-variant">{new Date(quote.createdAt).toLocaleString()}</td>
                  {/* <td className="px-6 py-4 text-right">

                                            <button
                                                className="px-3 py-2 bg-emerald-400 text-on-secondary font-[14px] text-[14px] rounded-lg flex items-center gap-2 
                                                    shadow-sm hover:opacity-90 active:scale-95 transition-all" onClick={() => setShowModal(true)}>

                                                Add Quote
                                            </button>

                                            {/* <div
                                                className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                <button
                                                    className="p-1.5 text-on-surface-variant hover:text-secondary hover:bg-secondary/10 rounded transition-all"
                                                    title="Edit">
                                                    <span className="text-[20px]"
                                                        data-icon="edit"><FaEdit/></span>
                                                </button>
                                                <button
                                                    className="p-1.5 text-on-surface-variant hover:text-error hover:bg-error/10 rounded transition-all"
                                                    title="Delete">
                                                    <span className=" text-[20px]"
                                                        data-icon="delete"><MdDelete/></span>
                                                </button>
                                            </div> }
                                        </td> */}
                </tr>)
              })) : (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center text-sm text-on-surface-variant italic">
                    No quotes sdded yet
                  </td>
                </tr>
              )
            }
          </tbody>


        </table>
      </div>
    </div>



  )
}

export default QuotesTable