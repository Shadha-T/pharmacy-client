import React from 'react'
import { Link } from 'react-router-dom'

function Blogg() {
  return (
    <div>
              <div className=''>
      <Link to={'/admin/admin-blog'}>
        <div className=''>
<h1 className=''>Blog1</h1>
        </div>
        </Link>
        <Link to={'/admin/admin-blog2'}>
        <div className=''>
<h1 className=''>Blog2</h1>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Blogg
