import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react'
import Breadcrumb from '../common/Breadcrumb'
import AladhamPage from './aladham-page'
import FooterOne from '@/layouts/footers/FooterOne'

export default function AladhamProject() {
  return (
    <>


      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Aladham Production" style_3={true} />
            <AladhamPage />
          </main>
          <FooterOne />
        </div>
      </div>

    </>
  )
}
