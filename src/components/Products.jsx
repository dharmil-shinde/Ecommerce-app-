import React, { useEffect, useState } from 'react'
import LoadingSpinner from './LoadingSpinner';
import { Link } from 'react-router-dom';
import"./style.css"
export default function Products() {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);


  const getProducts = async () => {
    try {
      setLoading(true)
      const url = "https://fakestoreapi.com/products"
      const response = await fetch(url)
    
      
      setData(await response.clone().json())
      setFilter(await response.json())
  
      setLoading(false);      
    } catch (error) {
      console.log(error)
    }
 

  }
  useEffect(() => {
   
    getProducts()
    // eslint-disable-next-line 
  }, []
  )
  const filterCategory= (category)=>{

    const filtering= data.filter((x)=> x.category === category)
    setFilter(filtering)
}
  const ShowProduct = () => {
    return (
      <>
        <div className='d-flex justify-content-center mt-2 mb-5'>
          <button onClick={()=>{setFilter(data)}} className='btn btn-outline-dark'>All</button>
          <button onClick={()=>filterCategory("men's clothing") } className='btn btn-outline-dark ms-3'>Men Clothing</button>
          <button onClick={()=>{filterCategory("women's clothing")}} className='btn btn-outline-dark ms-3'>Women Clothing</button>
          <button onClick={()=>{filterCategory("electronics")}} className='btn btn-outline-dark ms-3'>Electronics</button>
          <button onClick={()=>{filterCategory("jewelery")}} className='btn btn-outline-dark ms-3 ' >Jewelery</button>
        </div>
        {
          filter.map((product) => {
            return (
              
                <div className='col-md-4 col-lg-3 col-sm-12 mb-2 my-4 ' key={product.id}>
                  <div className="card text-center p-4 h-100  scale-hover-shadow " >
                    <img src={product.image} className="Product" alt={product.title} height="250px"/>
                    
                      <div className="card-body w">
                        <h6 className="card-title">{product.title.substring(0,18)}</h6>
                        <p className="card-text fw-bold">${product.price}</p>
                        <Link to={`/products/${product.id}`} className="btn btn-outline-dark ">Buy Now</Link>
                      </div>
                  </div>
                </div>
              
            )
          })
        }
      </>
    )


  }
  return (
    <div className='container  my-4 '>
      <h1 className='display-6 fw-bold pt-4 p-2 text-center'>Latest Products</h1>
      <hr />
      
      <div className="row">
        {loading ? <LoadingSpinner /> :   <ShowProduct />}
      </div>
    
    </div>
  )
}
