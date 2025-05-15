import { useEffect, useState } from 'react'
import Highlight from '../../components/Highlight/Highlight'
import CheckOn from './sections/CheckOn'
import Quick from './sections/Quick/Quick'
import Peak from './sections/Peak'
import Card from './sections/Card'

import {getBannersByIds} from "./services/bannerAPI"

import './styles/Banner.scss'
import Single from './sections/Single'

/**
 * 
 * @param {*} param0 
 * @returns 
 */
function Banner({ bannersIDArray, type, section }) {
  const [banners, setBanners] = useState([])

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        const result = await getBannersByIds(bannersIDArray)
        setBanners(result)
      } catch (e) {
        console.error('Failed to fetch banners:', e)
      }
    }

    if (bannersIDArray?.length > 0) {
      fetchBanners()
    }
  }, [bannersIDArray])

  if (!banners || banners.length === 0) return null

  console.log("PLUS !", banners)

  return (
    <>
      {type === 10 && <Highlight bannerArray={banners} section={section} />}
      {type === 11 && <Single banner={banners[0]} />}
      {type === 12 && <CheckOn bannerArray={banners} section={section} />}
      {type === 13 && <Peak bannerArray={banners} section={section} />}
      {type === 14 && <Card bannerArray={banners} section={section} />}
    </>
  );
}

export default Banner
