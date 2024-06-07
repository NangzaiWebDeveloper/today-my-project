
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import SingleProduct from './SingleProduct'

function App() {

  const [product, setProduct] = useState([])
  const [item, setItem] = useState([])

  useEffect(()=>{
    fetch("./FakeData.json")
      .then(response => response.json())
      .then(data => setProduct(data))
  })

  const handleAddCart =(p)=>{
    // console.log([p]);
    setItem([p]);
  }


  return (
    <>
      <div className='main-container flex justify-around'>
        <div className='card-container'>
            {
              product.map((items,index) => <SingleProduct key={index}
                                                          handleAddCart={handleAddCart}
                                                          props={items}
                                                          ></SingleProduct>)
            }
        </div>

        <div className='cart-container-list w-96 border-2 border-green-600 m-6 p-5 rounded-xl'>
          <h1 className='text-2xl font-bold text-center underline'>This is cart container</h1>
          <div className='flex justify-around font-bold mt-3'>
              <h2>Name</h2>
              <p>Price</p>
          </div>
          <div>
            {
              item.map((pro, index) => (
                <div key={index} className='flex justify-around font-semibold'>
                  <h2>{pro.title.slice(0, 10)}</h2>
                  <p>{pro.price}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
