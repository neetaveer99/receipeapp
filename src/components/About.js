import React from 'react'
import img1 from "../components/images/bg2.jpg"

const About = () => {
  return (
    <>
    {/* about section starts  */}

<section class="about" id="about">
    <h1 class="heading"><span>about</span> us </h1>
    <div class="row">
        <div class="image">
            <img src={img1} alt="" />
        </div>

        <div class="content">
            <h3>what makes our coffee special?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores deleniti eius tempora dolorum
                eveniet quisquam cumque nam quia quod? Fugiat provident porro placeat natus aperiam id doloremque in
                tenetur fuga.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, dolore voluptates soluta ipsa atque
                impedit asperiores expedita iusto ad sed?</p>
            <a href="#" class="btn">learn more</a>
        </div>
    </div>
</section>

 {/* about section ends  */}
    </>
  )
}

export default About