import { Cell } from './Cell'
import { doodleSolution, doodleSolutions } from '../../lib/words'
import { getGuessStatuses } from '../../lib/statuses'

type Props = {
  rowIndex: number
  guess: string
}

export const CurrentRow = ({ rowIndex, guess }: Props) => {
  const splitGuess = guess.split('')
  const emptyCells = Array.from(Array(5 - splitGuess.length))
  if (rowIndex < doodleSolutions.length) {
    const statuses = getGuessStatuses(doodleSolutions[rowIndex], doodleSolution)

    return (
      <div className="flex justify-center mb-1">
        {splitGuess.map((letter, i) => (
          <Cell key={i} value={letter} status={statuses[i]} />
        ))}
        {emptyCells.map((_, i) => (
          <Cell key={i} status={statuses[i + splitGuess.length]} />
        ))}
      </div>
    )
  } else {
    return (
      <div className="flex justify-center mb-1">
        {splitGuess.map((letter, i) => (
          <Cell key={i} value={letter} />
        ))}
        {emptyCells.map((_, i) => (
          <Cell key={i} />
        ))}
      </div>
    )
  }
}
