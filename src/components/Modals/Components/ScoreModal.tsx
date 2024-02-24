import React, { useEffect } from 'react'

import { useAppSelector } from '@/store/hooks'
import { startOfTomorrow } from 'date-fns'
import { BaseModal } from './BaseModal'

import { useState } from 'react'
import getCurrentDate from '../../../utils/getCurrentDate'
import { getGameTitle } from '../../../utils/getGameTitle'
import { formatTime, timeUntilTomorrow } from '@/utils'
// @todo pass the difficulty in as a prop
export const ScoreModal = ({
  isOpen,
  handleClose,
  turns,
  gameDifficulty,
  handlePlayAgain,
}:{
  isOpen: boolean,
  handleClose: () => void,
turns: number | string, 
gameDifficulty: string, 
handlePlayAgain: () => void
}) => {
  const turnsCount = useAppSelector((state) => state.finishedGameStats.moves)
  const timeCount = useAppSelector((state) => state.finishedGameStats.finalTime)
  // get best time, get best moves
  const [bestTurns, setBestTurns] = useState<string | number>(turnsCount)
  const [bestTime, setBestTime] = useState<string | number>(timeCount)
  const [copySuccess, setCopySuccess] = useState<string>('Share results')
 
  const formattedTime: string = formatTime(timeCount)

 
  const copyToClipboard = async () => {
    const gameModeString = getGameTitle(gameDifficulty)

    try {
      const gameInfo = `26 Pairs ${gameModeString} shuffle 🎲
    ⏱️ ${formattedTime}
    🃏 ${turnsCount} moves
    
    Try and beat it: 26pairs.com`

      await navigator.clipboard.writeText(gameInfo)
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

  const getBestStats = () => {
    // @todo need to format this to get the best stats for that difficulty
    const val = JSON.parse(localStorage.getItem('scoreHistory'))

    const filteredByDifficulty = val?.filter(
      (score) => score.difficulty === gameDifficulty,
    )

    // if there is no score history
    if (!val || !filteredByDifficulty) {
      setBestTime('-')
      setBestTurns('-')
      return
    }

    const result = {
      lowestTime: Infinity,
      lowestMoves: Infinity,
    }

    filteredByDifficulty.forEach((item) => {
      const { time, moves } = item

      // Update lowest time if current time is smaller
      result.lowestTime = Math.min(result.lowestTime, parseInt(time))

      // Update lowest moves if current moves is smaller
      result.lowestMoves = Math.min(result.lowestMoves, parseInt(moves))
    })

    const newLowestTime = Math.min(result.lowestTime, timeCount)
    const minutes = Math.floor((newLowestTime % 360000) / 6000)

    // Seconds calculation
    const seconds = Math.floor((newLowestTime % 6000) / 100)
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}`

    setBestTime(formattedTime)
    setBestTurns(Math.min(result.lowestMoves, turns))
  }

  useEffect(() => {
    getBestStats()
  }, [bestTime, bestTurns, turnsCount])

  const timeTillTommorow = timeUntilTomorrow()

 

  return (
    <BaseModal title="Score" isOpen={isOpen} handleClose={handleClose}>
      <div className="my-2 flex justify-center">
        <div className="m-1 w-1/4 items-center justify-center dark:text-white">
          <div className="text-3xl font-bold">{turns}</div>
          <div className="text-xs">{'Turns'}</div>
        </div>
        <div className="m-1 w-1/4 items-center justify-center dark:text-white">
          <div className="text-3xl font-bold">{formattedTime}</div>
          <div className="text-xs">{'Time'}</div>
        </div>
        <div className="m-1 w-1/4 items-center justify-center dark:text-white">
          <div className="text-3xl font-bold">{bestTurns}</div>
          <div className="text-xs">{'Best Turns'}</div>
        </div>
        <div className="m-1 w-1/4 items-center justify-center dark:text-white">
          <div className="text-3xl font-bold">{bestTime}</div>
          <div className="text-xs">{'Best Time'}</div>
        </div>
      </div>
      {/* need to pass in a prop to say if the game is over or not */}
      {(true || true) && (
        <div className="mt-5 columns-2 items-center  justify-center text-center dark:text-white sm:mt-6">
          <button
            type="button"
            onClick={handlePlayAgain}
            className="mt-2 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-base"
          >
            {/* <ShareIcon className="mr-2 h-6 w-6 cursor-pointer dark:stroke-white" /> */}
            Play again
          </button>
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
    </BaseModal>
  )
}
