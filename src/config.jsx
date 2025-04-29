import {
  getStoreInfoData,
  getMainPageSectionsData,
  getMainPageSectionsOrderData,
  getMainPageBannerData,
  getHeaderPagesData,
  getCategoriesBannerData,
  getFooterSectionsData
} from './api'

import {
  getLocalStorageItem,
  setLocalStorageItem,
  removeLocalStorageItem
} from './localStorage'

export const appTitle = 'Minha Aplicação de Produtos'
export const apiUrl = null
export const currencySymbol = '$'
export const lang = 'PT/BR'
export const gridTypes = ['wholesale', 'retail']

export const storeInfo = getLocalStorageItem('store')
  ? getLocalStorageItem('store')
  : await getStoreInfoData()
export const homeOrder = await getMainPageSectionsOrderData()
export const mainPageSections = await getMainPageSectionsData()
export const mainPageBanners = await getMainPageBannerData()
export const menuPages = await getHeaderPagesData()
export const categoriesBanner = await getCategoriesBannerData()
export const footerPages = await getFooterSectionsData()
