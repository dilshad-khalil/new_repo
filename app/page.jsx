import React from 'react'
import Featured from './(components)/Featured'
import Popular from './(components)/Popular'
import PopularSeries from './(components)/PopularSeries'

const page = () => {
  return (
    <div>
      <Featured />
      <Popular />
      <PopularSeries />
    </div>
  )
}

export default page