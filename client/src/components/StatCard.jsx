import React from 'react'

function StatCard({title,count}) {
    return (
        <div
            className="bg-surface-container-lowest p-4 rounded-xl border border-outline-variant/20 shadow-sm">
            <p className="text-[12px] text-on-surface-variant uppercase tracking-wider mb-2">{title}</p>
            <div className="flex items-end justify-between">
                <span className="text-[24px] font-bold text-on-surface">{count}</span>
                {/* <span
                    className="text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full text-[12px] font-bold">+12%</span> */}
            </div>
        </div>
    )
}

export default StatCard