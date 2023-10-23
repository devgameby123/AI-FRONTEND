import Link from 'next/link'
import React from 'react'
import "./navbar.css"
import Image from 'next/image'
import Button from './Button'
import { TextField } from '@mui/material'
import Dropdown from './Dropdown'


type Props = {}

function Navbar({}: Props) {

 

  return (
    <nav className='navbar'>
        <Link  className='box' href={"/"}>
          <Image src={"/Logo.png"} width={50} height={50} alt='Logo'/>
          <span>บริษัท เพื่อน มี จำกัด</span>
        </Link>
        
        <ul>

            <Link className='link' href={"/"}>Home</Link>
            <span> | </span>
            <Link className='link' href={"/#TRENDING"}>TRENDING</Link>
            <span> | </span>
            <Dropdown/>
        </ul>
    </nav>
  )
}

export default Navbar