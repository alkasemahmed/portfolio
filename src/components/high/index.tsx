import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react'
import Breadcrumb from '../common/Breadcrumb'
import HighPage from './high-page'
import FooterOne from '@/layouts/footers/FooterOne'

export default function HighProject() {
  return (
    <>


      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="High People" style_3={true} />
            <HighPage />
          </main>
          <FooterOne />
        </div>
      </div>

    </>
  )
}
