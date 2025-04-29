import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'
import Filter from '../../../components/Filter/Filter'
import Shelf from '../../../components/Product/Shelf'

import { MdSortByAlpha } from "react-icons/md"
import { LiaSortNumericDownSolid, LiaSortNumericUpAltSolid } from "react-icons/lia"

/**
 *
 * @returns
 */

function Category() {
  const { id } = useParams()

  console.log(id)
  const [products, setProducts] = useState({
    id: '098765434567890',
    sectionName: 'section-ProductHighlight',
    name: 'Destaque',
    order: 1,
    type: 'list',
    products: [
      {
        id: '98765456789',
        name: 'Bose Soundlink Color II',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image:
          'https://th.bing.com/th/id/OIP.G3qeQAwBEi4Y93PJS9ozmAHaI0?pid=ImgDet&rs=1',
        price: '$9.99',
        oldPrice: '$10.99',
        friendlyUrl: 'produtoQuerido'
      },
      {
        id: '98765456789',
        name: 'Bose Soundlink Color II',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image:
          'https://th.bing.com/th/id/OIP.G3qeQAwBEi4Y93PJS9ozmAHaI0?pid=ImgDet&rs=1',
        price: '$9.99',
        oldPrice: '$10.99',
        friendlyUrl: null
      },
      {
        id: '98765456789',
        name: 'Bose Soundlink Color II',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image:
          'https://th.bing.com/th/id/OIP.G3qeQAwBEi4Y93PJS9ozmAHaI0?pid=ImgDet&rs=1',
        price: '$9.99',
        oldPrice: '$10.99',
        friendlyUrl: null
      },
      {
        id: '98765456789',
        name: 'Bose Soundlink Color II',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image:
          'https://th.bing.com/th/id/OIP.G3qeQAwBEi4Y93PJS9ozmAHaI0?pid=ImgDet&rs=1',
        price: '$9.99',
        oldPrice: '$10.99',
        friendlyUrl: null
      },
      {
        id: '98765456789',
        name: 'Bose Soundlink Color II',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image:
          'https://th.bing.com/th/id/OIP.G3qeQAwBEi4Y93PJS9ozmAHaI0?pid=ImgDet&rs=1',
        price: '$9.99',
        oldPrice: '$10.99',
        friendlyUrl: null
      }
    ]
  })

  return (
    <div className='category'>
      <div className='category__wrapper'>
        <header className='category__header'>
          <div className='category__name'>Phones</div>
          <Breadcrumb
            style='breadcrumb--category'
            paths={[
              { label: 'Home', url: '/' },
              { label: 'Phones', url: '/' }
            ]}
          />
          <div className='category__order'>
            <button className='category__button category__button--filter'><LiaSortNumericDownSolid /></button>
            <button className='category__button category__button--filter'><LiaSortNumericUpAltSolid /></button>
            <button className='category__button category__button--filter'><MdSortByAlpha /></button>
          </div>
        </header>
        <aside className='category__aside'>
          <div className='category__filters'>
            {/* <select className="category__filter category__filter--">
                            <option>Preço</option>
                        </select>
                        <select className="category__filter category__filter--">
                            <option>Preço</option>
                        </select>
                        <select className="category__filter category__filter--">
                            <option>Preço</option>
                        </select> */}
            <Filter categoryId={id} />
          </div>
        </aside>
        <main className='category__main'>
          <Shelf section={products} />
        </main>
        <footer className='category__footer'></footer>
      </div>
    </div>
  )
}

export default Category
