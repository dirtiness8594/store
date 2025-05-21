import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { BsTrash } from 'react-icons/bs'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { fetchData } from '../../../../api'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { updateCartItems } from '../../services/cartAPI'

const Product = () => {
  const [user, setUser] = useState(null)
  const [cart, setCart] = useState(null)
  const [loading, setLoading] = useState(true)
  const isMobile = useMediaQuery({ maxWidth: 767 })
  const slider = React.createRef()

  const auth = getAuth()

  useEffect(() => {
    // Escuta o login/logout
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser)
      } else {
        setUser(null)
        setCart({ items: [], totalPrice: 0 })
      }
    })

    return () => unsubscribe() // cleanup
  }, [])

  useEffect(() => {
    const fetchCartData = async () => {
      if (!user) return

      setLoading(true)
      try {
        console.log('Buscando carrinho para o usuário:', user.uid)
        const data = await fetchData(`carts/${user.uid}`)
        if (data && data.items) {
          setCart(data)
        } else {
          setCart({ items: [], totalPrice: 0 })
        }
      } catch (error) {
        console.error('Erro ao buscar carrinho:', error)
        setCart({ items: [], totalPrice: 0 })
      } finally {
        setLoading(false)
      }
    }

    fetchCartData()
  }, [user])

  if (loading) return <div>Carregando...</div>
  if (!cart || cart.items.length === 0) return <div>Seu carrinho está vazio.</div>

  const totalPrice = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalItems = cart.items.reduce((sum, item) => sum + item.quantity, 0)

  const sliderSettings = {
    slidesToShow: isMobile ? 5 : 3,
    slidesToScroll: 1,
    speed: 500,
    infinite: false,
    dots: false,
    centerMode: false
  }

 
const handleRemoveItem = async (itemToRemove) => {
  console.log("OLD CART ", cart, itemToRemove)
  const updatedItems = cart.items.filter(item => item.skuId !== itemToRemove.skuId);
  setCart({ ...cart, items: updatedItems });

    console.log("New cart ", cart)

  try {
    await updateCartItems(user.uid, updatedItems);
  } catch (error) {
    console.error('Erro ao atualizar carrinho:', error);
  }
};
  

  return (
    <section>
      <div className='checkout__wrap'>
        <p className='checkout__title'>Meus produtos</p>
          {cart.items.map((item) => (
            <li className='checkout__item' key={item.id}>
              <img className='checkout__item-image' src={item.image} alt={item.name} />
              <div className='checkout__item-details'>
                <h3 className='checkout__item-name'>
                  {item.name}
                  <span className='checkout__item-price'>${item.price}</span>
                </h3>
                <button onClick={() => handleRemoveItem(item)} className='checkout__quantity--remove'>
                  <BsTrash />
                </button>
              </div>
            </li>
          ))}
        <Slider ref={slider} {...sliderSettings} className='checkout__list'>
        </Slider>
      </div>
      <div className='checkout__total'>
        <div className='checkout__wrap'>
          Total Items: {totalItems} | R$ {totalPrice.toFixed(2)}
        </div>
      </div>
    </section>
  )
}

export default Product
