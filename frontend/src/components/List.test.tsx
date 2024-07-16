
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import List from './List'

const fewKerkdiensten = [
  { id: 1, datumTijd: '2010-01-01 11:00:00', notities: 'dienst 1' },
  { id: 2, datumTijd: '2020-02-02 12:00:00', notities: 'dienst 2' },
]

describe('List tests', () => {
  it('Should render the list', () => {
    render(<List kerkdiensten={fewKerkdiensten} />)
    // there should be ${fewBooks.length} books in the list
    expect(screen.getAllByRole('listitem')).toHaveLength(fewKerkdiensten.length)
    // it should render the title of the first book
    expect(screen.getByText(fewKerkdiensten[0].datumTijd)).toBeInTheDocument()
  })
})
