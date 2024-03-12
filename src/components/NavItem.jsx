'use client'
import React from 'react'
import Link  from 'next/link';
import {useSearchParams} from 'next/navigation'
export default function NavItem({title, param}) {
    const searchParams = useSearchParams()
    const genre = searchParams.get('genre')
  return (
    <div>
        <Link 
        className = {`hover:text-blue-600 font-semibold ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-blue-600 rounded-lg': ''}`} 
        href={`/?genre=${param}`} >{title}
        </Link>
    </div>
  )
}
