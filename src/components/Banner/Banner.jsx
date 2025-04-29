import React from 'react'
import Highlight from '../Highlight/Highlight'

import CheckOn from './Sections/CheckOn'
import BannerSingle from './BannerSingle'
import Quick from './Sections/Quick/Quick'
import Peak from './Sections/Peak'
import Card from './Sections/Card'

/**
 *
 * @param {*} param0
 * @returns
 */

function Banner({ banner }) {
  return (
    <React.Fragment>
      {[banner].map((banner, index) => {
        return (
          <React.Fragment key={index}>
            {banner.kind === 'highlight' ? <Highlight banner={banner} /> : null}
            {banner.kind === 'single' ? <Quick banner={banner} /> : null}
            {banner.kind === 'double' ? <CheckOn banner={banner} /> : null}
            {banner.kind === 'peak' ? <Peak banner={banner} /> : null}
            {banner.kind === 'card' ? <Card banner={banner} /> : null}
          </React.Fragment>
        )
      })}
    </React.Fragment>
  )
}

export default Banner
