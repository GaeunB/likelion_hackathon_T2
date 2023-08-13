import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Product = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [product, setProduct] = useState({})
    console.log(id, 'id', product)

    const handleCart = (product, redirect) => {
        console.log(product)
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const isProductExist = cart.find(item => item.id === product.id)
        if (isProductExist) {
            const updatedCart = cart.map(item => {
                if (item.id === product.id) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item
            })
            localStorage.setItem('cart', JSON.stringify(updatedCart))
        } else {
            localStorage.setItem('cart', JSON.stringify([...cart, { ...product, quantity: 1 }]))
        }
        alert('Product added to cart')
        if (redirect) {
            navigate('/cart')
        }
    }



    return (
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <img  alt="logo" src="./logoCBG.png" className="lg:w-1/6 px-4 py-10 mx-auto"/>
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img src="./Tshirts.jpg" alt="조던 드라이 핏 스포츠 " className="lg:w-1/2 w-full lg:h-auto max-h-[600px] h-64 object-contain object-center rounded" />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-3xl mb-1 title-font text-gray-500 tracking-widest uppercase"> 골프웨어</h2>
                        <h1 className="text-gray-900 text-6xl title-font font-medium mb-8">[남성용] 조던 드라이 핏 스포츠 티셔츠 </h1>
                        <div className="flex mb-5">
                            <span className="flex items-center">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-pink-300" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-pink-300" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-pink-300" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-pink-300" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-pink-300" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                </svg>
                                <span className="text-gray-600 text-3xl ml-10">34건의 후기</span>
                            </span>
                        </div>
                        <p className="leading-relaxed">{product?.description}</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-3">
                            <div className="flex">
                                <span className="text-3xl mr-5">색상</span>
                                <button className="border-2 border-gray-300 rounded-full w-10 h-10 focus:outline-none"></button>
                                <button className="border-2 border-gray-300 ml-2 bg-gray-700 rounded-full w-10 h-10 focus:outline-none"></button>
                                <button className="border-2 border-gray-300 ml-2 bg-blue-900 rounded-full w-10 h-10 focus:outline-none"></button>
                            </div>
                            <div className="flex ml-6 items-center">
                                <span className="text-3xl mr-3">크기</span>
                                <div className="relative">
                                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-pink-300 text-base pl-3 pr-10">
                                        <option>85</option>
                                        <option>90</option>
                                        <option>95</option>
                                        <option>100</option>
                                        <option>105</option>
                                        <option>110</option>
                                    </select>
                                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                                            <path d="M6 9l6 6 6-6"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="title-font font-medium text-4xl text-gray-900 mb-5"> 199,900 원</span>
                        </div>
                        <div className=' flex'>
                            <button className=" text-4xl font-semibold text-white bg-pink-300 border-0 py-5 px-24 focus:outline-none hover:bg-pink-700 rounded mr-2" onClick={() => handleCart(product, true)}>바로 구매하기</button>
                        </div>
                        <div>
                            <button className=" text-4xl font-semibold border border-pink-400 py-5 px-20 focus:outline-none hover:bg-pink-700 hover:text-white rounded mt-10" onClick={() => handleCart(product)}>장바구니에 담기</button>
                        </div>
                    </div>
                </div>                
            </div>

            <div className="container px-10 py-24 mx-auto flex flex-wrap">
            <span className="title-font font-medium text-4xl text-gray-900 mx-auto mb-10">소재 : 폴리에스터 섬유 / 제조국 : 대한민국</span>
                <div className="lg:w-2/3 mx-auto">
                    <div className="flex flex-wrap w-full bg-gray-100 py-32 px-20 relative mb-4">
                        <img src="./shirts_Detail3.jpg" alt="디테일3" className="w-full object-cover h-full object-center block absolute inset-0"/>
                    </div>
        
                    <div className="flex flex-wrap -mx-2">
                        <div className="px-2 w-1/2">
                            <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                                <img src="./shirts_Detail1.jpg" alt="디테일1" className="w-full object-cover h-full object-center block absolute inset-0"/>
                            </div>
                        </div>
                        <div className="px-2 w-1/2">
                            <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                                <img src="./shirts_Detail2.jpg" alt="디테일2" className="w-full object-cover h-full object-center block absolute inset-0" />
                
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
        </div>
    )
}

export default Product