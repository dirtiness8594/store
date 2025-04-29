import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomeIndexPage from './features/home/pages'
// import ProductIndexPage from './pages/Product/ProductIndexPage'

import ProductIndexPage from './features/product/pages'


import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Cart from './pages/Cart/Cart'

import './styles/Main.scss'
// import Category from './pages/Category/Category'
import Category from "./features/category/pages"
import InstitutionalIndexPage from './features/institutional/pages'
// import InstitutionalIndexPage from './pages/Institucional/InstitutionalIndexPage'

/**
 *
 * @returns
 */

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeIndexPage />
  },
  {
    path: '/product/:id',
    element: <ProductIndexPage />
  },
  {
    path: '/cart/:id?',
    element: <Cart />
  },
  {
    path: '/category/:id?',
    element: <Category />
  },
  {
    path: '/institutional/:name',
    element: <InstitutionalIndexPage />
  }
])

/**
 *
 *
 */

function App() {
  const isCartPage = window.location.pathname.includes('cart')

  return (
    <>
      {!isCartPage && <Header />}
      <RouterProvider router={router} />
      {!isCartPage && <Footer />}
      {/* <Router>
      <Switch>
        <Route path="/" exact component={HomeIndexPage} />
      </Switch>
    </Router> */}
    </>
  )
}

export default App
