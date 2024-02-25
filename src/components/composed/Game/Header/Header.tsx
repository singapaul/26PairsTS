import React from "react";

import { IoIosSettings } from "react-icons/io";
import { IoIosInformationCircleOutline } from "react-icons/io";

import card from "@/assets/images/card_back.png";
import { FaChartBar } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";

import { IoMdMenu } from "react-icons/io";
import { RiMenu4Fill } from "react-icons/ri";
import { Disclosure } from "@headlessui/react";

import { useNavigateToHomescreen } from "@/routes/route_hooks";

import { setModalConfig } from "@/store/slices/modals";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import {
  BoardActionsWrapper,
  BoardNav,
  FlexGroup,
  IconWrapper,
  ImageObj,
  ImageWrapper,
  StatsStyled,
  StyledButton,
} from "./styles";

type HeaderProps = {
  resetGame: () => void;
};

export const Header = ({ resetGame }: HeaderProps) => {
  const [NavigateToHomescreen] = useNavigateToHomescreen();
  const timeFromRedux = useAppSelector((state) => state.timer.formattedTime);
  const turnsCount = useAppSelector((state) => state.finishedGameStats.moves);
  const handleImageClick = () => {
    // Set the page URL to the home URL
    window.location.href = "/";
    NavigateToHomescreen();
  };

  const navigation = [
    {
      name: "Info",
      current: false,
      handle: () =>
        dispatch(
          setModalConfig({
            id: "about",
            isOpen: true,
          })
        ),
      icon: <IoIosInformationCircleOutline />,
    },
    {
      name: "Settings",
      current: false,
      handle: () =>
        dispatch(
          setModalConfig({
            id: "settings",
            isOpen: true,
          })
        ),
      icon: <IoIosSettings />,
    },
    {
      name: "Stats",
      current: false,
      handle: () =>
        dispatch(
          setModalConfig({
            id: "stats",
            isOpen: true,
          })
        ),
      icon: <FaChartBar />,
    },
  ];
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  const dispatch = useAppDispatch();
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
              <StatsStyled>Time: {timeFromRedux}</StatsStyled>
            </BoardActionsWrapper>
            <div className="flex items-center sm:hidden">
              <IconWrapper>
                <StyledButton className="sm:hidden" onClick={() => resetGame()}>
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
                <StyledButton onClick={() => resetGame()}>
                  <VscDebugRestart />
                </StyledButton>

                <StyledButton
                  onClick={() =>
                    dispatch(
                      setModalConfig({
                        id: "about",
                        isOpen: true,
                      })
                    )
                  }
                >
                  <IoIosInformationCircleOutline />
                </StyledButton>

                <StyledButton
                  aria-label="Settings menu"
                  onClick={() =>
                    dispatch(
                      setModalConfig({
                        id: "settings",
                        isOpen: true,
                      })
                    )
                  }
                >
                  <IoIosSettings />
                </StyledButton>

                <StyledButton
                  onClick={() =>
                    dispatch(
                      setModalConfig({
                        id: "stats",
                        isOpen: true,
                      })
                    )
                  }
                >
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
