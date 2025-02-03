import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react'
import Breadcrumb from '../common/Breadcrumb'
import BuriedPage from './buried-page'
import FooterOne from '@/layouts/footers/FooterOne'

export default function BuriedProject() {
  return (
    <>


      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Not Buried Yet" style_3={true} />
            <BuriedPage />
          </main>
          <FooterOne />
        </div>
      </div>

    </>
  )
}
