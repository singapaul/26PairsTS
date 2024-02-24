/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { startOfTomorrow } from 'date-fns'
import { BaseModal } from './BaseModal'
import { useState } from 'react'

import { formatTime, isMobile } from '@/utils'
 
import Countdown from 'react-countdown'
import { useAppSelector } from '@/store/hooks'
 
 
export const PlayedModal = ({ isOpen,  gameDifficulty, handleClose }: { isOpen: any,  gameDifficulty: any, handleClose: any}) => {
  if (gameDifficulty !== 'dailyShuffle') return
 
  const [copySuccess, setCopySuccess] = useState('Share results')
 
 
    const finalTurns = useAppSelector((state) => state.finishedGameStats.moves);
    const finalTime = useAppSelector((state) => state.finishedGameStats.finalTime);
 
  const copyToClipboard = async () => {
 
    try {
      const gameInfo = `26 Pairs Daily Shuffle shuffle 🎲
    ⏱️ ${formatTime(finalTime)}
    🃏 ${finalTurns} moves

    Try and beat it: 26pairs.com`

      await navigator.clipboard.writeText(gameInfo)
      if(isMobile()) await navigator.share({text: gameInfo})
      setCopySuccess('Copied!')
    } catch (err) {
      setCopySuccess('Share results')
      console.error('Unable to copy to clipboard.', err)
    }

    // Reset the copy success message after a short delay
    setTimeout(() => {
      setCopySuccess('Share results')
    }, 2000)
  }

  // @ts-ignore
  const timeTillTommorow = startOfTomorrow() - new Date()
 
  return (
    <BaseModal title="Score" isOpen={isOpen} handleClose={() => {}}>
      <div>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Congratulations on beating todays daily shuffle! Your scores are below
        </p>
      </div>

      <div className="my-2 flex justify-center">
        <div className="m-1 w-1/4 items-center justify-center dark:text-white">
          <div className="text-3xl font-bold">{finalTurns}</div>
          <div className="text-xs">{'Turns'}</div>
        </div>
        <div className="m-1 w-1/4 items-center justify-center dark:text-white">
          <div className="text-3xl font-bold">{formatTime(finalTime)}</div>
          <div className="text-xs">{'Time'}</div>
        </div>
      </div>

      {/* need to pass in a prop to say if the game is over or not */}
      {(true || true) && (
        <div className="mt-5 columns-2 items-center  justify-center text-center dark:text-white sm:mt-6">
          <div className="inline-block w-full text-left">
            {true && (
              <div>
                <h5>{'Next shuffle in'}</h5>
                <Countdown
                  className="text-lg font-medium text-gray-900 dark:text-gray-100"
                  date={Date.now() + timeTillTommorow}
                  daysInHours={true}
                />
              </div>
            )}
          </div>
          <div>
            <button
              type="button"
              onClick={copyToClipboard}
              className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-base"
            >
              {/* <ShareIcon className="mr-2 h-6 w-6 cursor-pointer dark:stroke-white" /> */}
              {copySuccess}
            </button>
          </div>
        </div>
      )}
      <h3 className="font-semibold mt-6">Check out the other game modes</h3>
      <div className="mt-2 columns-2 items-center  justify-center text-center dark:text-white  ">
        <div>
          <button
            type="button"
            onClick={() => (window.location.href = '/lite-shuffle')}
            className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-base"
          >
            Lite Shuffle
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={() => (window.location.href = '/classic-shuffle')}
            className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-base"
          >
            Classic Shuffle
          </button>
        </div>
      </div>
    </BaseModal>
  )
}
