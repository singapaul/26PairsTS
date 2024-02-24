import React from 'react'
import { BaseModal } from './BaseModal'

export const SettingsModal = ({ isOpen, handleClose, handleTACModal }) => {
  return (
    <BaseModal title="Settings" isOpen={isOpen} handleClose={handleClose}>
      <div className="mt-2 flex flex-col divide-y">
        <div className="flex justify-between min-w-80 gap-10">
          <h3>Contact</h3>
          <a
            href={'mailto:info@26pairs.com'}
            target="_blank"
            rel="noopener noreferrer"
          >
            info@26pairs.com
          </a>
        </div>
        <div className="flex justify-between min-w-80 content-center gap-10">
          <h3 className="whitespace-nowrap self-center">T&C</h3>
          <button
            onClick={handleTACModal}
            type="button"
            className="mt-2 inline-flex w-fit items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-base"
          >
            {'View terms'}
          </button>
        </div>
      </div>
    </BaseModal>
  )
}
