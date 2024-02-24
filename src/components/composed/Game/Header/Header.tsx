import React from "react";
import styled from "styled-components";

import { IoIosSettings } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";
// @ts-ignore
import card from "@/assets/images/card_back.png";
import { FaChartBar } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";

import { IoMdMenu } from "react-icons/io";
import { RiMenu4Fill } from "react-icons/ri";
import { Disclosure } from "@headlessui/react";
import { SettingsModal } from "@/components/Modals";
import { formatTime } from "@/utils";

const BoardNav = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #292975;
  overflow: hidden;
`;

const BoardActionsWrapper = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  border-width: 2px;
  border-color: grey;
  border-radius: 0.25rem;
  color: black;
  padding: 0.5rem;
  margin: 0.5rem;

  @media (min-width: 500px) {
    margin: 1rem;
  }
`;

const IconWrapper = styled.p`
  font-size: 1.5rem;
  color: #eee;
  margin: 0;

  @media (min-width: 500px) {
    font-size: 2rem;
    display: flex;
    align-content: flex-start;
    align-items: flex-start;
  }
`;

const ImageWrapper = styled.div`
  padding: 5px;
  cursor: pointer;
`;

const ImageObj = styled.img`
  max-width: 3.5rem;
  max-height: 3.5rem;
`;

const StyledButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  padding: 0.5rem;
  border-radius: 9999px;
`;

const FlexGroup = styled.div`
  display: flex;
`;

const StatsStyled = styled.div`
  width: 100%;
  display: block;
  justify-content: space-around;
  text-align: left;
  color: black;
  opacity: 0.6;
  padding: 0;
  margin: 6px;
  font-size: 0.8rem;
  font-weight: 900;
  white-space: nowrap;

  @media (min-width: 1000px) {
    font-size: 1.5rem;
    margin: 8px;
  }
`;
type HeaderProps = {
  turnsCount: any
  resetGame: any;
  MenuModalOpen: any;
  StatsModalOpen: any;
  SettingModalOpen: any;
  AboutModalOpen: any;
  time: any;
};

export const Header = ({
  turnsCount,
  resetGame,
  MenuModalOpen,
  StatsModalOpen,
  SettingModalOpen,
  AboutModalOpen,
  time,
}: HeaderProps) => {
  const handleImageClick = () => {
    // Set the page URL to the home URL
    window.location.href = "/";
  };

  const navigation = [
    {
      name: "Info",
      current: false,
      handle: () => AboutModalOpen(true),
      icon: <IoIosInformationCircleOutline />,
    },
    {
      name: "Settings",
      current: false,
      handle: () => SettingModalOpen(true),
      icon: <IoIosSettings />,
    },
    {
      name: "Stats",
      current: false,
      handle: () => StatsModalOpen(true),
      icon: <FaChartBar />,
    },
  ];
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Disclosure as="nav" className="bg-indigo-900">
      {({ open }) => (
        <>
          <BoardNav>
            <FlexGroup>
              <ImageWrapper onClick={handleImageClick}>
                <ImageObj src={card} alt="" />
              </ImageWrapper>
            </FlexGroup>
            <BoardActionsWrapper>
              <StatsStyled>Turns: {turnsCount}</StatsStyled>
              <StatsStyled>Time: {formatTime(time)}</StatsStyled>
            </BoardActionsWrapper>
            <div className="flex items-center sm:hidden">
              <IconWrapper>
                <StyledButton className="sm:hidden" onClick={()=>resetGame()}>
                  <VscDebugRestart />
                </StyledButton>
              </IconWrapper>
              <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-5 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-white sm:hidden">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <RiMenu4Fill className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <IoMdMenu className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="hidden sm:block p-5">
              <IconWrapper>
                <StyledButton onClick={()=>resetGame()}>
                  <VscDebugRestart />
                </StyledButton>

                <StyledButton onClick={() => AboutModalOpen(true)}>
                  <IoIosInformationCircleOutline />
                </StyledButton>

                <StyledButton
                  aria-label="Settings menu"
                  onClick={() => SettingModalOpen(true)}
                >
                  <IoIosSettings />
                </StyledButton>

                <StyledButton onClick={() => StatsModalOpen(true)}>
                  <FaChartBar />
                </StyledButton>
              </IconWrapper>
            </div>
          </BoardNav>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* mobile menu */}

              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  onClick={item.handle}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md px-3 py-2 text-base font-medium flex items-center justify-between"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                  <IconWrapper> {item.icon}</IconWrapper>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
