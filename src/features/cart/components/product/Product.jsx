import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import { BsTrash } from 'react-icons/bs'

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { fetchData } from '../../../../api'

/**
 *
 * @param {*} param0
 * @returns
 */

const Product = ({ user }) => {

  const [cart, setCart] = useState(null); // Estado para armazenar o carrinho do usuário
  const [loading, setLoading] = useState(true); // Estado para indicar o carregamento dos dados


  const isMobile = useMediaQuery({ maxWidth: 767 })
  const slider = React.createRef()

  /**
   * 
   * @returns 
   * 
   */

  const fetchCartData = async () => {
    if (!user) return; // Se não houver usuário, não faz a consulta
  
    setLoading(true); // Marca como "carregando" antes de fazer a requisição
  
    try {
      console.log('Buscando carrinho para o usuário:', user.id);
      const data = await fetchData(`carts/${user.id}`); // Supondo que o endpoint seja 'carts/{userId}.json'
      console.log('Carrinho recebido:', data);
  
      if (data && data.items) {
        setCart(data); // Verifique se `data.items` realmente existe
      } else {
        setCart({ items: [], totalPrice: 0 }); // Carrinho vazio
      }
    } catch (error) {
      console.error('Erro ao buscar carrinho:', error);
      setCart({ items: [], totalPrice: 0 });
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };
  

  useEffect(() => {
    fetchCartData();
  }, [user]); // Reexecuta quando o `user` mudar

  // Exibir carregando enquanto os dados estão sendo buscados
  if (loading) {
    return <div>Carregando...</div>;
  }
  console.log("CAR ", cart)

  // Caso o carrinho não exista ou esteja vazio
  if (!cart || cart.items.length === 0) {
    return <div>Seu carrinho está vazio.</div>;
  }

  /**
   * 
   * 
   */
  const sliderSettings = {
    slidesToShow: isMobile ? 5 : 3,
    slidesToScroll: 1,
    speed: 500,
    infinite: false,
    dots: false,
    centerMode: false
  }

  const handleRemoveQuantity = (item) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === item.id && cartItem.quantity > 0) {
        return { ...cartItem, quantity: cartItem.quantity - 1 }
      }
      return cartItem
    })
    setCartItems(updatedCart)
  }

  const handleAddQuantity = (item) => {
    const updatedCart = cartItems.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, quantity: cartItem.quantity + 1 }
      }
      return cartItem
    })
    setCartItems(updatedCart)
  }

  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id)
    setCartItems(updatedCart)
  }

  return (
    <section>
      <div className='checkout__wrap'>
        <p className='checkout__title'>Meus produtos</p>

        <Slider ref={slider} {...sliderSettings} className='checkout__list'>
          {cart.items.map((item) => (
            <li className='checkout__item' key={item.id}>
              <img
                className='checkout__item-image'
                src={item.image}
                alt={item.name}
              />
              <div className='checkout__item-details'>
                <h3 className='checkout__item-name'>
                  {item.name}
                  <span className='checkout__item-price'>${item.price}</span>
                </h3>
                <div className='checkout__item-quantity'>
                  {/* <button
                    onClick={() => handleRemoveQuantity(item)}
                    className='checkout__quantity--less'
                  >
                    -
                  </button>
                  <input
                    type='number'
                    value={item.quantity}
                    className='checkout__amount'
                    onChange={(e) => {
                      if (e.target.value >= 0) {
                        const updatedCart = cartItems.map((cartItem) => {
                          if (cartItem.id === item.id) {
                            return {
                              ...cartItem,
                              quantity: parseInt(e.target.value)
                            }
                          }
                          return cartItem
                        })
                        setCartItems(updatedCart)
                      }
                    }}
                  />
                  <button
                    onClick={() => handleAddQuantity(item)}
                    className='checkout__quantity--add'
                  >
                    +
                  </button> */}
                </div>
                <button
                  onClick={() => handleRemoveItem(item)}
                  className='checkout__quantity--remove'
                >
                  <BsTrash />
                </button>
              </div>
            </li>
          ))}
        </Slider>
      </div>
      <div className='checkout__total'>
        <div className='checkout__wrap'>
          Total Items: {cart.items.length} | R$ {cart.totalPrice}
        </div>
      </div>
    </section>
  )
}

export default Product
