import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react'
import Breadcrumb from '../common/Breadcrumb'
import WladPage from './wlad-page'
import FooterOne from '@/layouts/footers/FooterOne'

export default function WladProject() {
  return (
    <>


      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Sons of The Homland" style_3={true} />
            <WladPage />
          </main>
          <FooterOne />
        </div>
      </div>

    </>
  )
}
