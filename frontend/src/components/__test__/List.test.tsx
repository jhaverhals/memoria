import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Kerkdiensten from '../Kerkdienst'

const datumTijd1 = new Date('2010-01-01 11:00:00')
const datumTijd2 = new Date('2020-02-02 12:00:00')

const fewKerkdiensten = [
  { id: 1, datumTijd: datumTijd1, notities: 'dienst 1', denominatie: 'Den 1', plaats: 'Stad 1', eigenschap: '', categorie: '' },
  { id: 2, datumTijd: datumTijd2, notities: 'dienst 2', denominatie: 'Den 2', plaats: 'Dorp 2', eigenschap: '', categorie: '' },
]

describe('List tests', () => {
  it('Should render the list', () => {
    render(<Kerkdiensten kerkdiensten={fewKerkdiensten} />)

    expect(screen.getAllByRole('listitem')).toHaveLength(fewKerkdiensten.length)

    // const textToBeExists = fewKerkdiensten[0].datumTijd.toString() + ' - ' + fewKerkdiensten[0].notities
    const textToBeExists = fewKerkdiensten[0].notities
    expect(screen.getByText(textToBeExists)).toBeInTheDocument()
  })
})