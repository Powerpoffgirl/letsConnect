import React from 'react'

const NavComponent = ({Icon, title}) => {
  return (
    <div>
      {Icon && <Icon className="headerOption_icon"/>}
      <p className='headerOptionTitle'>{title}</p>
    </div>
  )
}

export default NavComponent