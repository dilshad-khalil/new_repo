import React from 'react'
import Link from 'next/link'

const Button = ({buttonName, ButtonUrl, pathName}) => {

  return (
    <>
      <Link
          href={{
            pathname: `${pathName}`,
            query: {
              id: `${ButtonUrl}`,
            }
          }}
        >
          <div className={`bg-[#5979EA] text-white w-40 h-14 items-center rounded-md justify-center flex mt-6 cursor-pointer transition-all ease-in-out duration-100 active:bg-[#4d68cc] active:scale-95`}>
              {buttonName}
          </div>
      </Link>
    </>
  )
}

export default Button