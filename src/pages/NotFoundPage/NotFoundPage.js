import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'

export default function NotFoundPage() {
  document.title = `In Stock | page Not Found`
  return (
    <>
      <PageHeader text={'Page Not Found'}/>
    </>
  )
}
