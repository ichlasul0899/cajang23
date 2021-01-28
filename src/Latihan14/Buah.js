import React from 'react'
import { BuahProvider } from './BuahContext'
import ListBuah from './ListBuah'
import FormBuah from './FormBuah'

const Buah = () => {
  return (
    <BuahProvider>
      <ListBuah />
      <FormBuah />
    </BuahProvider>
  )
}

export default Buah
