import Link from 'next/link'
import React from 'react'
import "./navbar.css"
import Image from 'next/image'
import Button from './Button'



type Props = {}

function Navbar({}: Props) {
  const handleSearch = (query: string) => {
    // Add your search logic here, e.g., fetch data based on the query
    console.log(`Searching for: ${query}`);
  };

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
            <Link className='link' href={"/#TRENDING"}>Category</Link>
        </ul>
    </nav>
  )
}

export default Navbar