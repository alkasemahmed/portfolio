import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react'
import Breadcrumb from '../common/Breadcrumb'
import EkhlaaPage from './ekhlaa-page'
import SingleProjectArea from '../single-project/SingleProjectArea'
import FooterOne from '@/layouts/footers/FooterOne'

export default function EkhlaaProject() {
  return (
    <>


      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Ekhlaa Zameel" style_3={true} />
            <EkhlaaPage />
          </main>
          <FooterOne />
        </div>
      </div>

    </>
  )
}
