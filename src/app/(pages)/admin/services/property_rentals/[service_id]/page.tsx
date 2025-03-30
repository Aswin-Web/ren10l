"use client"
import React from 'react'
import { useParams } from 'next/navigation'

const page = () => {
  const params = useParams()
  console.log("🚀 ~ page ~ router:", params.service_id)

  return (
    <div>123
      {/* {router.query.service_id} */}
    </div>
  )
}

export default page