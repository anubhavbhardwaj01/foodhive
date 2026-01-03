import React from 'react'

const About = () => {
  return (
    <>
      <div className=' m-4'>
        <p className=' text-5xl text-center font-bold'>"Welcome to Food Donate"</p>
      </div>
      <div>
        <p className=' text-2xl text-center font-bold  text- underline m-4'>
          About us
        </p>
      </div>
      <div>
        <p className=' text-2xl text-center m-6'>
          We are a team of passionate individuals committed to addressing the issue of food waste in India. Our goal is to create a system that connects food donors with charities and NGOs, while also reducing the environmental impact of food waste.
        </p>
      </div>
      <div>
        <p className=' text-2xl text-center font-bold m-4'>
          Help & FAQs
        </p>
        <div className="collapse collapse-arrow bg-base-100 border border-base-300 text-white">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse collapse-arrow bg-base-100 border border-base-300 text-white">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold text-white">How will my donations be used?</div>
  <div className="collapse-content text-sm text-white">Your donation will be used to support our mission and the various programs and initiatives that we have in place. Your donation will help us to continue providing assistance and support to those in need. You can find more information about our programs and initiatives on our website. If you have any specific questions or concerns, please feel free to contact us</div>
          </div>
          
          <div className="collapse collapse-arrow bg-base-100 border border-base-300 text-white">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold text-white">What should I do if my food donation is near or past its expiration date??</div>
  <div className="collapse-content text-sm text-white">We appreciate your willingness to donate, but to ensure the safety of our clients we can't accept food that is near or past its expiration date. We recommend checking expiration dates before making a donation or contact us for further guidance</div>
          </div>
          
         
          
  <div className="collapse-title font-semibold text-white">How do I create an account?</div>
  <div className="collapse-content text-sm text-white">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300 text-white">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold text-white">I forgot my password. What should I do?</div>
  <div className="collapse-content text-sm text-white">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</div>
<div className="collapse collapse-arrow bg-base-100 border border-base-300 text-white">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title font-semibold text-white">How do I update my profile information?</div>
  <div className="collapse-content text-sm text-white">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
</div>
      </div>
    </>
  )
}

export default About
