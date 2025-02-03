import HeaderOne from '@/layouts/headers/HeaderOne'
import React from 'react'
import Breadcrumb from '../common/Breadcrumb'
import HeadlinePage from './headline-page'
import FooterOne from '@/layouts/footers/FooterOne'

export default function HeadlineProject() {
  return (
    <>


      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Breadcrumb title="Headline Mediahub" style_3={true} />
            <HeadlinePage />
          </main>
          <FooterOne />
        </div>
      </div>

    </>
  )
}
