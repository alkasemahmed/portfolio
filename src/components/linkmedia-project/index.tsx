import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react'
import Breadcrumb from '../common/Breadcrumb'
import LinkmediaPage from './linkmedia-page'
import FooterOne from '@/layouts/footers/FooterOne'

export default function LinkmediaProject() {
  return (
    <>


      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Link Media" style_3={true} />
            <LinkmediaPage />
          </main>
          <FooterOne />
        </div>
      </div>

    </>
  )
}
