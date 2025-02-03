import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react'
import Breadcrumb from '../common/Breadcrumb'
import SuspensionPage from './suspension-page'
import FooterOne from '@/layouts/footers/FooterOne'

export default function EkhlaaProject() {
  return (
    <>


      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="With Suspension of Execution" style_3={true} />
            <SuspensionPage/>
          </main>
          <FooterOne />
        </div>
      </div>

    </>
  )
}
