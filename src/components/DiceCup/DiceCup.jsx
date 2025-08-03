import { useState } from 'react'
import Die from '/src/components/Die/Die.jsx'
import TickBox from '/src/components/TickBox/TickBox.jsx'
import SearchBox from '/src/components/SearchBox/SearchBox.jsx'
import './DiceCup.css'

function DiceCup({ numberOfDice, handleNextTurn }) {
  const [isTurnOver, setIsTurnOver] = useState(false);
  const [tickStatuses, setTickStatuses] = useState([false, false, false]);
  const generateKey = (prefix) => `${prefix}_${new Date().getTime()}`;
  const [dice, setDice] = useState([...(Array(numberOfDice).fill('-'))].map((value, dieIndex) => {
    const newKey = generateKey(dieIndex);
    return (
      <Die key={newKey} id={newKey} value={value} isAvailable={false} rolling={false} />
    );
  }));

  const handleDiceRoll = () => {
    const rollEndHandler = ({ id, value }) => {
      console.log(`${id} roll ended with a value of ${value}`);
    }

    const newResults = dice.map((die, dieIndex) => {
      const newKey = generateKey(dieIndex);
      return (
        <Die key={newKey} id={newKey} value={Math.floor(Math.random() * 6) + 1} isAvailable={true} rolling={true} handleRollEnd={rollEndHandler} />
      );
    });
    setDice([...newResults]);


    const newTickStatuses = [...tickStatuses];
    setTickStatuses((newTickStatuses.pop(), newTickStatuses.unshift(true), newTickStatuses));
    if (!newTickStatuses.includes(false)) {
      setIsTurnOver(true);
    }

  }

  return (
    <div className='dice-cup'>
      <h3>Search</h3>
      <hr />
      <TickBox tickStatuses={tickStatuses} /><br />
      <div className='dice-container'>{dice}</div>
      <button onClick={handleDiceRoll} disabled={isTurnOver}>Roll</button>
      <hr />
      <SearchBox />
      <hr />
      <button disabled={!isTurnOver} onClick={handleNextTurn}>Next turn</button>
    </div>
  )
}

export default DiceCup