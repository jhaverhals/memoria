import type { Kerkdienst } from '../types'

type Props = {
  kerkdiensten: Kerkdienst[]
}

const List = ({ kerkdiensten }: Props) => {
  return (
    <div className="mx-auto my-8 p-4 text-center">
      <h1 className="text-gray-500 text-4xl my-4">Kerkdiensten</h1>
      <ul>
        {kerkdiensten.map(kerkdienst => (
          <li key={kerkdienst.id}>{kerkdienst.datumTijd.toString()} - {kerkdienst.notities}</li>
        ))}
      </ul>
    </div>
  )
}

export default List