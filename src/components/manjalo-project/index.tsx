import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react'
import Breadcrumb from '../common/Breadcrumb'
import ManjaloPage from './manjalo-page'
import FooterOne from '@/layouts/footers/FooterOne'

export default function ManjaloProject() {
  return (
    <>


      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Manjalo Gold" style_3={true} />
            <ManjaloPage />
          </main>
          <FooterOne />
        </div>
      </div>

    </>
  )
}
