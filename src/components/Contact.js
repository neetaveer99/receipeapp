import React from 'react'

const Contact = () => {
  return (
    <>
     <section className="contact" id="contact">

<div className="heading"><span>contact</span>us</div>

<div className="row">

    <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7899.839122324512!2d73.93717613973133!3d18.55347273659143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c3d957d47cc3%3A0x9ca0c6034542f79e!2sRakshak%20Nagar%2C%20Kharadi%2C%20Pune%2C%20Maharashtra%20411014!5e0!3m2!1sen!2sin!4v1701845507253!5m2!1sen!2sin"
         allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>

        <form action="">
            <h3>get in touch</h3>
            <div className="inputBox">
                <span className="fas fa-user"></span>
                <input type="text" name="" id="" placeholder="name" />
            </div>
            <div className="inputBox">
                <span className="fas fa-envelope"></span>
                <input type="email" name="" id="" placeholder="email" />
            </div>
            <div className="inputBox">
                <span className="fas fa-phone"></span>
                <input type="number" name="" id="" placeholder="number" />
            </div>
            <input type="submit" value="contact now" className="btn" />
        </form>
</div>

</section>
    </>
  )
}

export default Contact