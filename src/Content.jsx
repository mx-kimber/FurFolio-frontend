import React from 'react'
import "./CSS/Global.css"
import { Signup } from './Signup'
import UsersIndex from './UsersIndex'

export function Content() {
  return (
    <div>
      <div>Content</div>
      
      <div><Signup /></div>
      <div><UsersIndex /></div>
    </div>
  )
}

export default Content