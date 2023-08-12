import React from 'react'

const Tags = ({styles, tagName}) => {
  return (
    <div>
        <div className={`${styles} text-white h-6 w-20 text-center rounded-sm`}>
           {tagName}
        </div>
    </div>
  )
}

export default Tags