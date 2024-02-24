export const formatTime = (time: number): string => {
    const minutes = Math.floor((time % 360000) / 6000)
    const seconds = Math.floor((time % 6000) / 100)
    return`${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}`

}