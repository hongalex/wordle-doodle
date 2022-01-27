import { Cell } from './Cell'
import { doodleSolution, doodleSolutions } from '../../lib/words'
import { getGuessStatuses } from '../../lib/statuses'

type Props = {
  rowIndex: number
}

export const EmptyRow = ({ rowIndex }: Props) => {
  if (rowIndex < doodleSolutions.length) {
    const statuses = getGuessStatuses(doodleSolutions[rowIndex], doodleSolution)

    return (
      <div className="flex justify-center mb-1">
        {statuses.map((status, i) => (
          <Cell key={i} status={status} />
        ))}
      </div>
    )
  } else {
    const emptyCells = Array.from(Array(5))

    return (
      <div className="flex justify-center mb-1">
        {emptyCells.map((_, i) => (
          <Cell key={i} />
        ))}
      </div>
    )
  }
}
