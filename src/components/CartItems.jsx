import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteTwoTone } from '@mui/icons-material'
import "./style.css"
import ProductionQuantityLimitsTwoToneIcon from '@mui/icons-material/ProductionQuantityLimitsTwoTone';
import { DeleteItem } from '../state/action-creator';
  export default function CartItems() {
    
    const data = useSelector((state)=>state.cartItems.carts)
    const dispatch = useDispatch();

    const remove=(item)=>{
      return dispatch(DeleteItem(item))
    }
    const Noitem=()=>{
      return(
        <div className='text-capitalize  mt-5 '>
          <p className='text-dark mx-auto display-6 text-center lead '>Your cart is Empty! <span className='text-danger'><ProductionQuantityLimitsTwoToneIcon fontSize='large'/></span></p>
        </div>
      )
    }
    const iterate = (e)=>{
      return(
        <div className="card  mb-3 mt-5 bg-light shadow" key={e.id} >
        <div className="row g-0">
          
          <div className="col-3 text-center py-3">
            <img src={e.image} className=" rounded-start" height="200px" width={e.category==="jewelery"?"260":"null"}alt="..." />
          </div>

          <div className="col-9">
            
            <div className="card-body">
              <span className=' text-secondary'>{e.category}</span>
              <h5 className="card-title h2 ">{e.title}</h5>
            </div>
            
            <div className="d-flex">
             
              
              <div className="col-4  ms-3
               d-flex align-items-center  fw-bold text-dark h3">
               Price: ${e.price}/-
              </div>
            </div>
              <div className='text-success fw-bold h3 mt-3 mx-3 d-flex justify-content-between'>
                <p>Total:<span className='text-dark mx-1'> ${e.price}/-</span> </p>
                <DeleteTwoTone onClick={()=>remove(e)} style={{fontSize:"50"}} className='text-danger scale-hover'/>
              </div>
          </div>
        
        </div>
      </div>
      )
    }
  return (
    <>
        
        {data.length===0? <Noitem/>:data.map(iterate)}
      
    </>
  )
}
