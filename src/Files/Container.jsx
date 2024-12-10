import React from 'react'
import Header from './Header'

function Container() {
  return (
    <div style={{background:"url('./Images/Figure.png')",
        backgroundSize: 'cover'

    }}>
       <Header />
       <div>
        <img src='./Images/Container.png' className='w-100'/>
       </div>

    </div>
  )
}

export default Container