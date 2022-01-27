import { WORDS } from '../constants/wordlist'
import { VALIDGUESSES } from '../constants/validGuesses'

export const isWordInWordList = (word: string) => {
  return (
    WORDS.includes(word.toLowerCase()) ||
    VALIDGUESSES.includes(word.toLowerCase())
  )
}

export const isWinningWord = (word: string) => {
  return solution === word
}

export const isWinningDoodleWord = (word: string) => {
  return doodleSolution === word
}

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  const epochMs = 1641013200000
  const now = Date.now()
  const msInDay = 86400000
  const index = Math.floor((now - epochMs) / msInDay)
  const nextday = (index + 1) * msInDay + epochMs

  return {
    solution: WORDS[index].toUpperCase(),
    solutionIndex: index,
    tomorrow: nextday,
  }
}

export const { doodleSolution, doodleSolutions, doodleSolutionIndex } = {
  doodleSolution: 'WHACK',
  doodleSolutions: ['WOMAN', 'WRATH', 'WHALE', 'WHACK'],
  doodleSolutionIndex: 221,
}

export const { solution, solutionIndex, tomorrow } = getWordOfDay()
