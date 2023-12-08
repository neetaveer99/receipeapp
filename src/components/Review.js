import React from 'react'
import quotes from "../components/images/q3.png";
import f1 from "../components/images/f1.jpeg";
import m1 from "../components/images/m1.jpeg";
import f2 from "../components/images/f2.jpeg";



const Review = () => {
  return (
    <>
    <section className="review" id="review">
        <h1 className="heading">customer's <span>review</span></h1>

        <div className="box-container">

            <div className="box">
                <img src={quotes} alt="" className="quote" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae possimus inventore dolore, sapiente
                    aut nam repellendus doloremque, iure recusandae earum nobis nesciunt officia autem pariatur vel
                    vitae iste consectetur reiciendis.</p>
                <img src={f1} className="user" alt="" />
                <h3>john doe</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>

                </div>
            </div>

            <div className="box">
                <img src={quotes} alt="" className="quote" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae possimus inventore dolore, sapiente
                    aut nam repellendus doloremque, iure recusandae earum nobis nesciunt officia autem pariatur vel
                    vitae iste consectetur reiciendis.</p>
                <img src={m1} className="user" alt="" />
                <h3>john doe</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>

                </div>
            </div>


            <div className="box">
                <img src={quotes} alt="" className="quote" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae possimus inventore dolore, sapiente
                    aut nam repellendus doloremque, iure recusandae earum nobis nesciunt officia autem pariatur vel
                    vitae iste consectetur reiciendis.</p>
                <img src={f2} className="user" alt="" />
                <h3>john doe</h3>
                <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>

                </div>
            </div>

        </div>
    </section>

    </>
  )
}

export default Review