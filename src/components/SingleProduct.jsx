import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import LoadingSpinner from './LoadingSpinner';
import { useDispatch } from 'react-redux';
import { AddItem } from '../state/action-creator';

export default function SingleProduct() {
    const [singlePro, setSinglePro] = useState([]);
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    const add=(item)=>{
        dispatch(AddItem(item))
        
    }
    const getProduct = async () => {
      
            setLoading(true);
            const url = `https://fakestoreapi.com/products/${id}`
            const response = await fetch(url);
            const data = await response.json();
            setSinglePro(data)
            setLoading(false);
            
            
        }

    
    useEffect(() => {
        getProduct()
        //eslint-disable-next-line
    },[])

    const ShowProduct2 = () => {
        return (
            <div className='row mb-5'>
                <div className="col-md-6 mt-5 col-sm-12 text-center mb-5">
                    <img src={singlePro.image} alt={singlePro.title} height="400px" width={singlePro.category==="jewelery" || "Electronics" ? 550: null}     />
                </div>
                <div className="col-md-6 col-sm-12 ">
                    <h4 className='text-uppercase text-black-50'>{singlePro.category}</h4>
                    <h1 className='text-capitalize mt-1 text-dark'>{singlePro.title}</h1>
                    <p className='fw-bold text-secondary'> {`Rating ${singlePro.rating && singlePro.rating.rate}`}<StarRateRoundedIcon className='mb-2' /></p>
                    <p className='lead text-secondary fw-bold text-capitalize'>{singlePro.description}</p>
                    <p className='display-4 fw-bolder my-4 '>${singlePro.price}</p>
                    <div className='mt-5 d-flex justify-content-' >
                        <button className='btn btn-outline-dark  py-2  px-4 ' onClick={()=>add(singlePro)} >Add to Cart</button>
                        <Link to="/cart" className='btn btn-dark px-4 py-2 mx-5'>Go to Cart</Link>
                    </div>
                </div>
            </div>
        )
    }
 
    
           return (
                <div className='container '>
                    <div className="row mt-5">
                    {loading ? <LoadingSpinner /> : <ShowProduct2 />}
                    </div>
                </div>
                )
}
