import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className="flex shadow-lg  mt-10  justify-center">
    <ul className="flex ">
      <Link href={"/home"}>
        <li className="m-4 ">Home</li>
      </Link>
      <Link href={"/product"}>
        <li className="m-4 ">product</li>
      </Link>
      <Link href={"/dashboard"}>
        <li className="m-4 ">Dashboard</li>
      </Link>
    </ul>
  </div>
  )
}

export default Navbar