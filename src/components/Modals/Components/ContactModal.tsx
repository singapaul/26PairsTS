import React from 'react'

import { BaseModal } from './BaseModal'

export const ContactModal = ({ isOpen, handleClose }: { isOpen: boolean, handleClose: () => void }) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">Contact</p>
    </BaseModal>
  )
}
