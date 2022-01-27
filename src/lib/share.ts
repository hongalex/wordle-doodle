import { getGuessStatuses } from './statuses'
import { doodleSolution, doodleSolutions, doodleSolutionIndex } from './words'

export const shareStatus = (guesses: string[], lost: boolean) => {
  const { got, total } = getPointsFor(guesses)

  navigator.clipboard.writeText(
    `WorDoodle ${doodleSolutionIndex} ${lost ? 'X' : got}/${total}\n\n` +
      generateEmojiGrid(guesses)
  )
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess, i) => {
      const status = getGuessStatuses(guess, doodleSolutions[i])
      return guess
        .split('')
        .map((letter, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟩'
            case 'present':
              return '🟨'
            default:
              return '⬜'
          }
        })
        .join('')
    })
    .join('\n')
}

export const getPointsFor = (guesses: string[]) => {
  let got = 0
  let total = 0
  guesses.forEach((guess, i) => {
    const theirStatus = getGuessStatuses(guess, doodleSolutions[i])
    const myStatus = getGuessStatuses(doodleSolutions[i], doodleSolution)
    myStatus.forEach((status, j) => {
      if (status === 'absent') {
        total += 1
        if (theirStatus[j] === 'correct') {
          got += 1
        }
      }
      if (status === 'present') {
        total += 0.5
        if (theirStatus[j] === 'correct') {
          got += 0.5
        }
      }
    })
  })

  return {
    got: got,
    total: total,
  }
}
