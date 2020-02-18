import React from 'react'
import PriceList from './components/PriceList'
import items from './items'

const PriceDemo = () => {
  return (
    <PriceList 
      items={items} 
      onModifyItem={() => {}} 
      onDeleteItem={() => {}} 
    />
  )
}

export default PriceDemo