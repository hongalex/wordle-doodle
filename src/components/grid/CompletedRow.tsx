import { getGuessStatuses } from '../../lib/statuses'
import { Cell } from './Cell'
import { doodleSolutions } from '../../lib/words'

type Props = {
  rowIndex: number
  guess: string
}

export const CompletedRow = ({ rowIndex, guess }: Props) => {
  const statuses = getGuessStatuses(guess, doodleSolutions[rowIndex])

  return (
    <div className="flex justify-center mb-1">
      {guess.split('').map((letter, i) => (
        <Cell key={i} value={letter} status={statuses[i]} />
      ))}
    </div>
  )
}
