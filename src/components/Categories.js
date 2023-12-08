import React from 'react'
import c1 from "../components/images/south.jpg";
import c2 from "../components/images/nonveg.jpg"
import c3 from "../components/images/seafood.jpg"
import c4 from "../components/images/biryani.jpg"
import c5 from "../components/images/thali.jpg"




const Categories = () => {
  return (
    <>
      {/* menu section starts  */}
    <section class="menu" id="menu">
        <h1 class="heading">our <span>Categories</span></h1>

        <div class="box-container">

            <div class="box">
                <img src={c1} alt="" />
                <h3>south dishesh</h3>
                <a href="#" class="btn">check more...</a>
            </div>

            <div class="box">
                <img src={c2} alt="" />
                <h3>Non-Veg</h3>
                <a href="#" class="btn">check more...</a>
            </div>

            <div class="box">
                <img src={c3} alt="" />
                <h3>sea food</h3>
                <a href="#" class="btn">check more...</a>
            </div>

            <div class="box">
                <img src={c4} alt="" />
                <h3>Biryani</h3>
                <a href="#" class="btn">check more...</a>
            </div>

            <div class="box">
                <img src={c5} alt="" />
                <h3>veg</h3>
                <a href="#" class="btn">check more...</a>
            </div>

            <div class="box">
                <img src={c1} alt="" />
                <h3>Drinks</h3>
                <a href="#" class="btn">check more...</a>
            </div>

        </div>
    </section>
     {/* menu section ends  */}
    </>
  )
}

export default Categories