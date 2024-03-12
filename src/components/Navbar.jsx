import React from 'react'
import NavItem from './NavItem'
export default function Navbar() {
  return (
    <div className = 'flex dark:bg-gray-500 bg-blue-400 p-4 lg:text-lg justify-center gap-8'>
        <NavItem title = "Trending" param= "fetchTrending"/>
        <NavItem title = "Top Rated" param= "fetchTopRated"/>
    </div>
  )
}
