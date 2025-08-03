import { useState } from 'react'
import './SearchBox.css'

function Cell({ locked }) {
  const [value, setValue] = useState('-');
  const handleDragEnter = (event) => {
    if (event.target.classList.contains("drop-zone")) {
      event.target.classList.add("drag-over");
    }
  }
  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "copy";
  }
  const handleDragLeave = (event) => {
    if (event.target.classList.contains("drag-over")) {
      event.target.classList.remove("drag-over");
    }
  }

  const handleDrop = (event) => {
    if (event.target.classList.contains("drop-zone")) {
      event.target.classList.remove("drag-over");
      setValue(event.dataTransfer.getData("text/plain"));
      console.log('set die as unavailable');
      console.log(event);
    }
  }

  if (value === '-' && !locked) {
    return (
      <div
        className="cell drop-zone"
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}>{value}</div>
    );
  } else {
    return (
      <div className="cell">{value}</div>
    );
  }
}

function Row({ children, className }) {
  return (
    <div className={`row ${className}`}>{children}</div>
  )
}

function SearchBox() {
  return (
    <div className="area">
      <Row key="minuend">
        <Cell key="hundreds" />
        <Cell key="tens" />
        <Cell key="ones" />
      </Row>
      <Row key="subtrahend">
        <Cell key="hundreds" />
        <Cell key="tens" />
        <Cell key="ones" />
      </Row>
      <Row key="difference" className="difference">
        <Cell key="hundreds" locked={true} />
        <Cell key="tens" locked={true} />
        <Cell key="ones" locked={true} />
      </Row>
    </div>
  );
}

export default SearchBox;