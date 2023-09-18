import React from 'react'
import './content.css'

function Content({children}) {
  return (
    <div id="content">
        {children}
    </div>
  )
}

export default Content