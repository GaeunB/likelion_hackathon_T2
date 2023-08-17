import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()
  const [total, setTotal] = useState(0)
  const carts = JSON.parse(localStorage.getItem('cart')) || []
  const payPage = () => {
    window.location.href = '/pay';
  };

  useEffect(() => {
    const total = carts.reduce((acc, item) => {
      return acc + (item.price * item.quantity)
    }, 0)
    setTotal(total)
  }, [carts])

  const handleInc = (id) => {
    const updatedCart = carts.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    navigate('/cart')
  }

  const handleDec = (id) => {
    const updatedCart = carts.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    navigate('/cart')
  }

  return (
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <img  alt="logo" src="./logoCBG.png" className="lg:w-1/6 px-4 py-10 mx-auto"/>
    <div className="container mx-auto">
      <div className="flex shadow-md my-10">
        <div className="w-3/4 bg-white px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-5xl">장바구니</h1>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-3xl uppercase w-2/5">해당상품</h3>
            <h3 className="font-semibold text-center text-gray-600 text-3xl uppercase w-1/5">양</h3>
            <h3 className="font-semibold text-center text-gray-600 text-3xl uppercase w-1/5">가격</h3>
            <h3 className="font-semibold text-center text-gray-600 text-3xl uppercase w-1/5">합계</h3>
          </div>
          {
            carts?.map(cart => {
              return (
                <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                  <div className="flex w-2/5">
                    <div className="w-50">
                      <img className="h-30" src="./Tshirts.jpg" alt="조던 드라이 핏 스포츠 " />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm">{cart?.title}</span>
                      <span className="text-red-500 text-xs capitalize">{cart?.category}</span>

                    </div>

                  </div>

                  <div className="flex justify-center w-1/5">
                    <svg className="fill-current text-gray-600 w-3 cursor-pointer" viewBox="0 0 448 512" onClick={() => handleDec(cart?.id)}><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>

                    <input className="text-3xl border text-center w-8" type="text" value={cart?.quantity} />

                    <svg className="fill-current text-gray-600 w-3 cursor-pointer" onClick={() => handleInc(cart?.id)} viewBox="0 0 448 512">
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </div>
                  <span className="text-center w-1/5 font-semibold text-3xl">199,900</span>
                  <span className="text-center w-1/5 font-semibold text-3xl">{199900 * cart?.quantity}원</span>
                </div>



              )
            })
          }
        </div>

        <div id="summary" className="w-1/4 px-8 py-10">
          <h1 className="font-semibold text-2xl border-b pb-8"></h1>
          <div className="flex justify-between mt-80 mb-80">
            <button className="bg-pink-300 font-semibold hover:bg-pink-800 py-3 text-3xl text-white uppercase w-full" onClick={payPage}>결제하기</button>
          </div>
        </div>

      </div>
      </div>
      </div>

  )
}

export default Cart