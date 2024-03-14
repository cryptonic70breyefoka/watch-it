import React from 'react'
import { BiSearchAlt } from "react-icons/bi";
export default function SearchBox() {
  return (
   < form>
      <input className="w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1" type="text" placeholder="Search Keywords" />
      <button > Search <BiSearchAlt class/>
      </button>

   </form>
  )
}
