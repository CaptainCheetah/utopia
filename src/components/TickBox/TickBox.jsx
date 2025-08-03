
import { useState } from 'react'
import './TickBox.css'

function Tick({ isTicked }) {
  return (
    <div className={`tick ${isTicked ? 'ticked' : ''}`} />
  )
}

function TickBox({ tickStatuses }) {
  const ticks = [...tickStatuses].map((status, index) => (<Tick key={index} isTicked={status} />));

  return(
    <div className="tickbox">{ticks}</div>
  )
}

export default TickBox