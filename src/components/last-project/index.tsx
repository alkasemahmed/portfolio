import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react'
import Breadcrumb from '../common/Breadcrumb'
import LastPage from './last-page'
import FooterOne from '@/layouts/footers/FooterOne'

export default function LastProject() {
  return (
    <>


      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="The Last Shot" style_3={true} />
            <LastPage />
          </main>
          <FooterOne />
        </div>
      </div>

    </>
  )
}
