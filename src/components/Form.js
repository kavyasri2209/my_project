import React from 'react'

function Form() {
  return (
    <div>
    <section id="contact" className="py-5 bg-dark text-white">
        <div className="container">
            <h2 className="text-center mb-4">Contact Me</h2>
            <form className="mx-auto" style={{ maxWidth: "600px" }}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" ></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email"></input> 
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="4" placeholder="Your message here"></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
        </div>
    </section>
    </div>
  )
}

export default Form
