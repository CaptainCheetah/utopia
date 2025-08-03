import './Die.css'

function Die({ id, value, displayOnly, isAvailable, rolling, handleRollEnd }) {
  const activeClasses = () => {
    const classNames = ['die'];
    if (displayOnly) {
      classNames.push('displayOnly');
    } else {
      if (isAvailable) classNames.push('isAvailable');
      if (rolling) classNames.push('rolling');
    }
    return classNames.join(' ');
  }

  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", value);
    event.dataTransfer.setDragImage(event.target, 48, 48);
  }

  const removeRolling = () => {
    handleRollEnd({ id, value });
  }

  return (
    <div
      className={activeClasses()}
      onAnimationEnd={removeRolling}
      draggable={isAvailable}
      onDragStart={handleDragStart}
    >{value}</div>
  )
}

export default Die