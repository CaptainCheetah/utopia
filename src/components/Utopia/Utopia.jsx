import { useState } from 'react'
import DiceCup from '/src/components/DiceCup/DiceCup.jsx'
import Location from '/src/components/Location/Location.jsx'
import './Utopia.css'

function Utopia() {
  const [turnNumber, setTurnNumber] = useState(1);
  const nextTurnHandler = () => {
    setTurnNumber(turnNumber + 1);
  }
  return (
    <>
      <h1>Utopia turn {turnNumber}</h1>
      <DiceCup key={turnNumber} numberOfDice={2} handleNextTurn={nextTurnHandler} />
      <div className="locations">
        <Location
          number={1}
          theme={'gray'}
          name={'Halebeard Peaks'}
          construct={'Seal of Balance'}
          component={'Silver'}
          treasure={'Ice Plate'} />
        <Location
          number={2}
          theme={'green'}
          name={'The Great Wilds'}
          construct={'Hermetic Mirror'}
          component={'Quartz'}
          treasure={'Bracelet of Ios'} />
        <Location
          number={3}
          theme="violet"
          name={'Root Strangled Marshes'}
          construct={'Void Gate'}
          component={'Gum'}
          treasure={'Shimmering Moonlace'} />
      </div>
    </>
  )
}

export default Utopia
