import React from 'react'
import './dropdown.css'
import Link from 'next/link'

type Props = {}

const Dropdown = (props: Props) => {

  return (
    <div className='dropdown activeDrop'>
        <span className='link '>Category</span>
        <div className='dropdown-list'>
            <ul className='droptext'>
                <Link className='link' href={'/'}>Commady</Link>
                <Link className='link' href={'/'}>Horror</Link>
                <Link className='link' href={'/'}>Horror</Link>
            </ul>
        </div>
    </div>
  )
}

export default Dropdown