import React from 'react'
import Details from './Details'

const page = ({searchParams}) => {
  return (
    <div>
        <Details series_id={searchParams.id} />
    </div>
  )
}

export default page