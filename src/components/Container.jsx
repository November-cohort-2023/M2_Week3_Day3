import React from 'react'

function Container(props) {
  return (
    <div style={{border:'solid black'}}>
        <h2>First Line</h2>
        <h2>Second Line</h2>
        {props.children}

    </div>
  )
}

export default Container