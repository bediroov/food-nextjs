import React from 'react'

const Title = ({children,addclass}) => {
  return (
    <div className={`${addclass} font-dancing text-black font-bold   `}>{children} </div>
  )
}

export default Title