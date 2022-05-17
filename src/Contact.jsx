import React from 'react'

export default function Contact() {
    return (
        <div className='container mt-5 bg-white'>
            <div className="row">
                <div className="col-lg-6">
                    <img src="assets/contact.jpg" alt="contact" />
                </div>
                <div className="col-lg-6 bg-light p-4 rounded-5">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                            <input type="text" className="form-control rounded-pill w-100" min="10" id="exampleInputPassword1" />
                        </div>
                        <div className="mb-3 ">
                            <label htmlFor="exampleInputEmail1" className="form-label text-dark">Email address</label>
                            <input type="email" className="form-control rounded-pill w-100" id="exampleInputEmail1" aria-describedby="emailHelp" />

                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Enquiry</label>
                            <textarea type="text" className="form-control rounded w-100 "  placeholder="Type what you want to ask..."rows={8}/>
                        </div>
                        <div className='text-center w-100'>
                            <button type="submit" className="btn btn-primary w-25 " data-bs-dismiss="modal">submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
