import React from 'react'

function Container(props) {
  return (
    <div style={{border:'solid black'}}>
        {props.children}

    </div>
  )
}

export default Container