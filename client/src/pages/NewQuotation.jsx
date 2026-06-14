import React from 'react'
import { RiPsychotherapyLine } from "react-icons/ri";
import { HiOutlineBolt } from "react-icons/hi2";
import { MdExpandMore } from "react-icons/md";

function NewQuotation() {
  return (
    <main className="px-10">
      <div className="max-w-full mx-auto">
        {/* Page Header*/}
        <div className="flex justify-between mb-8">
          <div>
            <h2 className="font-medium text-[32px] text-on-background">Create New Quotation</h2>
          </div>
          <div className="flex gap-4">
            <button
              className="px-2 py-1 text-sm border border-outline-variant text-on-surface rounded-lg hover:bg-surface-container-low transition-colors"><span>Save</span>
              <span className='hidden md:block'>as Draft</span></button>
            <button
              className="px-2 py-1 text-sm bg-primary text-on-primary rounded-lg hover:opacity-90 transition-all flex items-center gap-2">
              <span>Send</span>
              <span className='hidden md:block'>to Client</span>

            </button>
          </div>

        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-12 gap-6">
          {/*AI Input & Results */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            <section
              className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 p-4 overflow-hidden relative">

              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 bg-secondary-container rounded-lg flex items-center justify-center text-on-secondary-container">
                  <RiPsychotherapyLine />
                </div>
                <div>
                  <h3 className="text-[20px]">AI Draft Generator</h3>
                  <p className="text-[14px] text-on-surface-variant">Paste client requirements to
                    automatically build your quote.</p>
                </div>
              </div>

              <div className="relative group">
                <textarea
                  className="w-full bg-surface-container-low border-outline-variant/30 rounded-lg p-4 text-[16px] focus:ring-secondary focus:border-secondary transition-all"
                  id="ai-input"
                  placeholder="Example: Client needs a modern e-commerce website for a boutique fashion brand. Requires 8 pages, secure checkout, mobile responsiveness, and 3 months of priority support..."
                  rowsName="5"></textarea>
                <div class="absolute bottom-4 right-4 flex gap-2">
                  <button
                    className="bg-secondary text-on-secondary px-6 py-2 rounded-lg flex items-center gap-2 hover:shadow-lg active:scale-95 transition-all"
                    id="generate-btn" onclick="generateAI()">
                    <HiOutlineBolt />
                    Generate Draft
                  </button>
                </div>
              </div>
            </section>

            <section
              className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 overflow-hidden mt-6"
              id="quotation-items-section">

            </section>

          </div>

          {/* Quotation Details Sidebar */}
          <div className="col-span-12 lg:col-span-4 space-y-6">
            <section
              className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 p-4 sticky top-24">
              <h3 className="text-[20px] mb-8">Quotation Details</h3>
              {/* Quotation details adding section */}
              <div className="space-y-8">
                {/* Title */}
                <div>
                  <label className="block text-[14px] text-on-surface-variant mb-2">Quotation
                    Title</label>
                  <input
                    className="w-full bg-surface border-outline-variant/50 rounded-lg p-3 text-body-md focus:ring-secondary focus:border-secondary transition-all"
                    placeholder="e.g. Website Design - Spring 2024" type="text" />
                </div>
                {/* Client */}
                <div>
                  <label className="block text-[14px] text-on-surface-variant mb-2">Select
                    Client</label>
                  <div className="relative">
                    <select
                      className="w-full bg-surface border-outline-variant/50 rounded-lg p-3 text-[16px] focus:ring-secondary focus:border-secondary appearance-none transition-all">
                      <option>Acme Corp Int.</option>
                      <option>Global Logistics Ltd.</option>
                      <option>Boutique Fashion Co.</option>
                      <option>+ Add New Client</option>
                    </select>
                    
                    <span
                      className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-outline"><MdExpandMore/></span>
                  </div>
                </div>

              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NewQuotation