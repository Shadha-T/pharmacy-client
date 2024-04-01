import React from 'react'

function Blog() {
  return (
    <div>
          <div className=''>
      <Link to={'/admin/admin-blog'}>
        <div className=''>
<h1 className=''>Banner1</h1>
        </div>
        </Link>
        <Link to={'/admin/admin-blog2'}>
        <div className=''>
<h1 className=''>Banner2</h1>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Blog
