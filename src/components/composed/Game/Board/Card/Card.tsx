import React from 'react'
import styled from 'styled-components'

import { CLASSICDECK } from '@/assets/data/CLASSICDECK'
 
export const CardStyledLite = styled.div`
.card {
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  margin: 1px; /* Create a consistent gap between cards */
}

.card-front,
.card-back {
  width: 60px;
  height: 84px;
  border-radius: 5px;
  cursor: pointer;

  img {
    margin: 0;
  }
  /* @tall phones */
  @media (max-width: 431px) and (max-height: 933px) and (min-width: 380px) {
    width: 70px;
    height: 98px;
  }
  /* @desktop */
  @media (min-width: 640px) {
    width: 90px;
    height: 126px;
  }
}

.card-front {
  transform: rotateY(90deg);
  transition: all ease-in 0.2s;
  position: absolute;
}

.flipped .card-front {
  transform: rotateY(0deg);
  transition-delay: 0.2s;
}

.card-back {
  transition: all ease-in 0.2s;
  transition-delay: 0.2s;
}

.flipped .card-back {
  transform: rotateY(90deg);
  transition-delay: 0s;
}

.flipped & .inactive {
  visibility: hidden;
}
`

const CardStyledClassic = styled.div`
.card {
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  margin: 0.5px; /* Create a consistent gap between cards */
}

.card-front,
.card-back {
  width: 49px;
  height: 68.6px;
  border-radius: 2px;
  cursor: pointer;

  img {
    margin: 0;
  }

  /* @desktop */
  @media (min-width: 640px) {
    width: 90px;
    height: 126px;
  }
}

.card-front {
  transform: rotateY(90deg);
  transition: all ease-in 0.2s;
  position: absolute;
}

.flipped .card-front {
  transform: rotateY(0deg);
  transition-delay: 0.2s;
}

.card-back {
  transition: all ease-in 0.2s;
  transition-delay: 0.2s;
}

.flipped .card-back {
  transform: rotateY(90deg);
  transition-delay: 0s;
}

.flipped & .inactive {
  visibility: hidden;
}
`





type CardProps = {
    image: string,
    cardId: string,
    isFlipped: boolean,
    handleClick: () => void,
    difficulty: string,
    isDisabled?: boolean,
}

export const Card = ({
    image,
    cardId,
    isFlipped,
    handleClick,
    difficulty,
    isDisabled,
}: CardProps) => {

const cardClasses = `card ${isFlipped ? 'flipped' : ''} ${
    isDisabled ? 'inactive' : ''
  }`

  const cardStyle = {
    visibility: isFlipped && isDisabled ? 'hidden' : 'visible',
  }
  console.log(difficulty)
   if (difficulty === 'CLASSIC_SHUFFLE') {
    console.log('difficulty')
    return (
      <CardStyledClassic onClick={handleClick}>
        {/* @ts-ignore */}
        <div className={cardClasses} style={cardStyle}>
          <img src={image} data-id={cardId} className="card-front" alt="" />
          <img
            src={CLASSICDECK.cover.src}
            data-id={cardId}
            className="card-back"
            alt=""
          />
        </div>
      </CardStyledClassic>
    )
  }

  return (
    <CardStyledLite onClick={handleClick}>
                {/* @ts-ignore */}
      <div className={cardClasses} style={cardStyle}>
        <img src={image} data-id={cardId} className="card-front" alt="" />
        <img
          src={CLASSICDECK.cover.src}
          data-id={cardId}
          className="card-back"
          alt=""
        />
      </div>
    </CardStyledLite>
  )
}

 