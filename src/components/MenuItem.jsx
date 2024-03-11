import React from 'react'
import Link from 'next/link'

function MenuItem({title, address, Icon}) {
  return (
    <Link href={address} className="hover:text-blue-700">
        <Icon className = "text-4xl sm:hidden"/>
        <p className='uppercase hidden sm:inline text-2xl'>{title}</p>
    </Link>
  )
}

export default MenuItem