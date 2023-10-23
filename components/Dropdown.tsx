import React from 'react'
import './dropdown.css'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

const Dropdown = (props: Props) => {

  return (
    <div className='dropdown activeDrop'>
        <span className='link '>Category<Image className='imagein' src={'/calendar.png'} alt='hello' width={30} height={30}/></span>
        <div className='dropdown-list'>
            <ul className='droptext'>
                <Link className='link' href={'/'}>Thriller</Link>
                <Link className='link' href={'/'}>Adventure</Link>
                <Link className='link' href={'/'}>Comedy</Link>
                <Link className='link' href={'/'}>Crime</Link>
                <Link className='link' href={'/'}>Horror</Link>
                <Link className='link' href={'/'}>Drama</Link>
                <Link className='link' href={'/'}>Action</Link>
                <Link className='link' href={'/'}>Mystery</Link>
                <Link className='link' href={'/'}>Sci Fi</Link>

            </ul>
        </div>
    </div>
  )
}

export default Dropdown