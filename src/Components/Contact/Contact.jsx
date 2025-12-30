import React from 'react'
import "./contact.css"
function Contact() {
  return <>
  <div className="container d-flex flex-column justify-content-center align-items-center">
     <h2 className="text-center fw-bold mt-4">CONTACT SECTION</h2>
        <div className="lines d-flex justify-content-between align-items-center mt-3 mb-5">
          <div className="left"></div>
          <i class="fa-solid fa-star mx-2"></i>
          <div className="right"></div>
        </div>
        <form className='w-50 d-flex flex-column  my-4 gap-5'>
          <input type="text"  name='username' className='form-control w-100' placeholder='userName'/>
          <input type="number"  name='userAge' className='form-control w-100' placeholder='userAge'/>
          <input type="text"  name='userEmail' className='form-control w-100' placeholder='userEmail'/>
          <input type="password"  name='userPassword' className='form-control w-100' placeholder='userPassword'/>
          <button type="submit" className='px-3 py-2 rounded-3 border-0 align-self-start'>send massage</button>
        </form>

  </div>
  </>
}

export default Contact