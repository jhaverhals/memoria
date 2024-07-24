import type { Kerkdienst } from '../types'

type PropsKerkdiensten = {
  kerkdiensten: Kerkdienst[]
}

type PropsKerkdienst = {
  kerkdienst: Kerkdienst
}

const Kerkdiensten = ({ kerkdiensten }: PropsKerkdiensten) => {
  return (
    <div className='my-8 p-4 text-center'>
      <h1 className='text-gray-500 text-4xl my-4'>Kerkdiensten</h1>
        {kerkdiensten.map(kerkdienst => (
          <KerkdienstItem kerkdienst={kerkdienst} />
        ))}
    </div>
  )
}

function KerkdienstItem({kerkdienst}: PropsKerkdienst) {
  return (
    <>
      <div className='grid grid-cols-2 py-1 listItem'>
        <div className='p-4 headlines'>
          <div className='listItemTitle'><b>{datum(kerkdienst.datumTijd)}</b> - {dagdeel(kerkdienst.datumTijd)}</div>
          <div>{kerkdienst.notities}</div>
        </div>
        <div className='p-4 metaInfo'>
          <div className='eigenschap'>{kerkdienst.eigenschap}</div>
          <div className='categorie'>{kerkdienst.categorie}</div>
        </div>
      </div>
    </>
  )
}

function datum(datumTijd: any): string {
  const datum = new Date(datumTijd)
  return dagnaamVanDeWeek(datum.getDay()) + ' ' + datum.getDate() + ' ' + maandnaamVanHetJaar(datum.getMonth()) + ' ' + datum.getFullYear()
}

function dagnaamVanDeWeek(dag: number): string {
  if (dag == 0) return 'Zo'
  else if (dag == 1) return 'Ma'
  else if (dag == 2) return 'Di'
  else if (dag == 3) return 'Wo'
  else if (dag == 4) return 'Do'
  else if (dag == 5) return 'Vr'
  else if (dag == 6) return 'Za'
  else return '??'
}

function maandnaamVanHetJaar(maand: number): string {
  if (maand == 0) return 'jan'
  else if (maand == 1) return 'feb'
  else if (maand == 2) return 'mrt'
  else if (maand == 3) return 'apr'
  else if (maand == 4) return 'mei'
  else if (maand == 5) return 'juni'
  else if (maand == 6) return 'juli'
  else if (maand == 7) return 'aug'
  else if (maand == 8) return 'sept'
  else if (maand == 9) return 'okt'
  else if (maand == 10) return 'nov'
  else if (maand == 11) return 'dec'
  else return '??'
}

function dagdeel(datumTijd: any): string {
  const tijd = new Date(datumTijd)
  if (tijd.getHours() < 12) return 'ochtend'
  else if (tijd.getHours() < 18) return 'middag'
  else return 'avond';
}
export default Kerkdiensten