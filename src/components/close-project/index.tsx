import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react'
import Breadcrumb from '../common/Breadcrumb'
import ClosePage from './close-page'
import FooterOne from '@/layouts/footers/FooterOne'

export default function CloseProject() {
  return (
    <>


      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Close Your Eyes" style_3={true} />
            <ClosePage />
          </main>
          <FooterOne />
        </div>
      </div>

    </>
  )
}
