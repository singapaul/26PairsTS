import React from "react";

import { SettingRow } from "@/components/composed/modals/settingsModal/settingRow";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";
import { Button } from "@/components/ui/button";
import { useAppDispatch } from "@/store/hooks";
import { setModalConfig } from "@/store/slices/modals";

import { BaseModal } from "./BaseModal";

export const SettingsModal = ({
  isOpen,
  handleClose,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) => {


const dispatch  = useAppDispatch()


const handleOpenTACModal = () => {

    dispatch(setModalConfig({
      id: 'tac',
      isOpen: true,
    }))
}

  return (
    <BaseModal title="Settings" isOpen={isOpen} handleClose={handleClose}>
      <div className="mt-4 flex flex-col divide-y dark:divide-white gap-2">
        <SettingRow title={"Contact"}>
          <a
            href={"mailto:info@26pairs.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer hover:text-indigo-700"
          >
            info@26pairs.com
          </a>
        </SettingRow>
        <SettingRow title={"Dark Mode"}>
          <ThemeToggle />
        </SettingRow>
        <SettingRow title={"T&C"}>
          <Button onClick={handleOpenTACModal}> {"View terms"}</Button>
        </SettingRow>
      </div>
    </BaseModal>
  );
};
