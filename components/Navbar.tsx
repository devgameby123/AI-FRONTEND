import Link from 'next/link'
import React from 'react'
import "./navbar.css"
import Image from 'next/image'
import Button from './Button'

type Props = {}

function Navbar({}: Props) {
  return (
    <nav className='navbar'>
        <div className='box'>
          <Image src={"/Logo.png"} width={50} height={50} alt='Logo'/>
          <span>บริษัท เพื่อน มี จำกัด</span>
        </div>
        <ul>
            
            <Link className='link' href={"/"}>Home</Link>
            <span> | </span>
            <Link className='link' href={"/#TRENDING"}>TRENDING</Link>
            <span> | </span>
            <Link className='link' href={"/#COMEDY"}>COMEDY</Link>
            <span> | </span>
            <Link className='link' href={"/#HORROR"}>HORROR</Link>
            <span> | </span>
            <Link className='link' href={"/#SCIFI"}>SCI FI</Link>
            <span> | </span>
            <Link className='link' href={"/#ACTION"}>ACTION</Link>
        </ul>
    </nav>
  )
}

export default Navbar