import React from 'react'
import {myTasks} from './Data/data'
import './Taches.css'

export default function Taches() {
  return (
    <div>
      <ul>
        {myTasks.map((task)=>(<li>{task.name}</li>))}
      </ul>
    </div>
  )
}
