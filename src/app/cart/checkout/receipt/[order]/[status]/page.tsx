import Receipt from '@/components/Receipt/Receipt'
import React from 'react'

function page({ params }: { params: { order: string, status: string }}) {

  return (
    <Receipt order={params.order} status={decodeURIComponent(params.status)}/>
  )
}

export default page