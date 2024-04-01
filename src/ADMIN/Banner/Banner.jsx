import React from 'react'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div>
      <div className=''>
      <Link to={'/admin/admin-banner'}>
        <div className=''>
<h1 className=''>Banner1</h1>
        </div>
        </Link>
        <Link to={'/admin/admin-banner2'}>
        <div className=''>
<h1 className=''>Banner2</h1>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Banner
