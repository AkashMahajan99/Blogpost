import React from 'react'

const Logo = ({width= '24'}) => {
  return (
    <div >
        <img className={`w-${width} w-24 `} src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572.png" alt="" />
    </div>
  )
}

export default Logo