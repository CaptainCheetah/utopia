import { useState } from 'react'
import Die from '/src/components/Die/Die.jsx'
import TickBox from '/src/components/TickBox/TickBox.jsx'
import './Location.css'

function Location({ theme, number, name, construct, component, treasure }) {
  return (
    <div className={`location ${theme}`}>
      <h3>
        <Die value={number} displayOnly={true} />
        &nbsp;{name}
        <TickBox tickStatuses={[false, false, false, false, false, false]} />
      </h3>
      <hr />
      <div className="container">
        <strong>Construct: </strong>{construct}<br />
        <strong>Componeent: </strong>{component}<br />
        <strong>Treasure: </strong>{treasure}
      </div>
    </div>
  )
}

export default Location