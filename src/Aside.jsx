import React from 'react'
import './screen2.css'

function Aside() {
  return (
      <aside className='SideBar'>
        <button className='mx-auto butn'>Dashboard</button>
        <button className='mx-auto butn'>Statistics</button>
        <button className='mx-auto butn'>LogOut</button>
      </aside>
  )
}

export default Aside