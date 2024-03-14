import React from 'react'
import { useParams } from 'react-router-dom'

function ItemLayout() {
    const {page} = useParams()
  return (
    <div>
    {page}
    </div>
  )
}

export default ItemLayout
