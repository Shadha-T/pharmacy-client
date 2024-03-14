import React from 'react'
import { Link } from 'react-router-dom'

function Items() {
  return (
    <div>
      <div className='flex bg-slate-100 gap-2 text-md justify-between mt-1 '>
        <Link to={`/shop/${'pain-relief'}`}>
          <p>Pain Relif</p>
        </Link>
        <Link to={`/shop/${'cold and flu'}`}>
          <p>Cold and Flu</p>
        </Link>
        <Link to={`/shop/${'Diabetes-care'}`}>
          <p>Diabetes Care</p>
        </Link>
        <Link to={`/shop/${'digestive-health'}`}>
          <p>Digestive Health</p>
        </Link>
        <Link to={`/shop/${'first-aid'}`}>
          <p>First Aid</p>
        </Link>
        <Link to={`/shop/${'skin-care'}`}>
          <p>Skin Care</p>
        </Link>
        <Link to={`/shop/${'child-baby'}`}>
          <p>Child and Baby Care</p>
        </Link>
        <Link to={`/shop/${'heart-health'}`}>
          <p>Heart Health</p>
        </Link>
        <Link to={`/shop/${'eye-ear'}`}>
          <p>Eye and Ear Care</p>
        </Link>
        <Link to={`/shop/${'respiratory-health'}`}>
          <p>Respiratory Health</p>
        </Link>
      </div>
    </div>
  )
}

export default Items
