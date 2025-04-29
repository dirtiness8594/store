import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomeIndexPage from './features/home/pages'
import ProductIndexPage from './features/product/pages'
import Header from './shared/components/Header/Header'
import Footer from './shared/components/Footer/Footer'
import Cart from './features/cart/pages'
import './styles/Main.scss'
import Category from "./features/category/pages"
import InstitutionalIndexPage from './features/institutional/pages'

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
