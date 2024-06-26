import React, { ReactElement } from "react";
import { Fragment } from "react";
import { FaHome } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { navigate } from "gatsby";

import { Dialog, Transition } from "@headlessui/react";

export const BaseModal = ({
  title,
  children,
  isOpen,
  handleClose,
  hideCloseButton = false,
  homeButton = false,
}: {
  title: string;
  children: React.ReactNode | ReactElement;
  isOpen: boolean;
  handleClose: () => void;
  hideCloseButton?: boolean;
  homeButton?: boolean;
}) => {
 

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={handleClose}
      >
        <div className="flex min-h-full items-center justify-center py-10 px-4 text-center sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 min-h-screen bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left align-bottom shadow-xl transition-all dark:bg-gray-800 sm:my-8 sm:w-full sm:max-w-lg sm:p-6 sm:align-middle">
              {!hideCloseButton && (
                <button
                  onClick={
                    homeButton ? () => navigate("/") : () => handleClose()
                  }
                  tabIndex={0}
                  aria-pressed="false"
                  className="absolute right-4 top-4"
                >
                  {homeButton ? (
                    <FaHome className="h-6 w-6 cursor-pointer dark:stroke-white" />
                  ) : (
                    <IoCloseCircleOutline className="h-6 w-6 cursor-pointer dark:stroke-white" />
                  )}
                </button>
              )}
              <div>
                <div className="text-center">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 dark:text-gray-100"
                  >
                    {title}
                  </Dialog.Title>
                  <div className="mt-2">{children}</div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
