import React from 'react'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

export default function Login() {
    return (
        <div>

            <button type="button" className="btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <LoginRoundedIcon />  Login
            </button>

            {/* modal */}
            <div className="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-md ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title text-center text-primary fw-bold text-uppercase  w-100" id="exampleModalLabel">Login</h3>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body ">
                            <form>
                                <div className='   '>
                                <button className="w-100 btn btn-primary text-capitalize mb-1"><span><GoogleIcon/></span> Login -with Google</button>
                                <button className="w-100 btn btn-primary text-capitalize "><span><FacebookOutlinedIcon/></span> Login with Facebook</button>

                                </div>
                        <p className='text-secondary text-center my-3'>OR</p>
                                <div className="mb-2 ">
                                    <label htmlFor="exampleInputEmail1" className="form-label text-dark">Email address</label>
                                    <input type="email" className="form-control rounded-pill" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                        
                                </div>
                                <div className="mb-2">
                                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control rounded-pill" id="exampleInputPassword1"/>
                                </div>
                                
                                <button type="submit" className="btn btn-primary w-100 " data-bs-dismiss="modal">Login</button>
                            </form>
                        </div>
                        {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Login</button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
