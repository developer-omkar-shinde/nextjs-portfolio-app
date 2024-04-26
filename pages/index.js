import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss';
import About from '../componants/About';
import Projects from '../componants/Projects';
import Navbar from '../componants/Navbar';
import Script from 'next/script'

export default function Home() {

  const [toggle, setToggle] = useState(true)

  const Toggle = () => {
    setToggle(!toggle)
  }

  const Navlinks = () => {
    return (
      <>
        <li><a href="#"> Home </a></li>
        <li><a href="#achivments">Achivments </a></li>
        <li><a href="#projects" > Projects </a></li>
        <li><a href="https://github.com/omkar-shinde-96k" > Github </a></li>
        <li><a href="#about"> About Us </a></li>
        <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/learn_web_development/" > Insta page </a></li>
      </>
    )
  }


  return (
    <div className={styles.HomeContainer}>

      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' />
        <meta name='description' content='Portfolio of omkar shinde' />
        <meta name='keywords' content='omkar shinde , omkar , omkar shinde portfolio , omkar portfolio , omkarshinde , omkarshinde.com' />
        <title>Omkar Shinde Portfolio</title>
        <link rel="manifest" href="/manifest.json" />
        <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
        <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
        <link rel="apple-touch-icon" href="/apple-icon.png"></link>
        <meta name="theme-color" content="#317EFB" />

        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

      </Head>
      <main className={styles.HomeMain} itemScope itemType="https://omkarshinde.vercel.app/">
        <div id="nav" className={styles.navbar}>
          // <div className={styles.menu1} onClick={Toggle}><i className="fa fa-bars"></i></div>
          // <ul>
          //   <Navlinks />
          // </ul>
          <a className={styles.mybtn} href="https://wa.me/919309120138" role="button">Contact Us</a>
        </div>

        <div className='main'>
          <h1 itemProp="omkar shinde">Hello,</h1>
          <h2 itemProp="name">I&apos;m Omkar Shinde</h2>
          <h1 itemProp="omkar shinde" className="typewrite" data-period="2000" data-type='["Web Devloper", "React Developer","Web Designer"]'>
            <span className="wrap"></span>
          </h1>
          <p itemProp="description">
            I am passionate about building excellent Website that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software expert available at your fingertips?
          </p>
          <br />
          <div style={{ display: "flex" }}>
            <a href="https://www.linkedin.com/in/omkar-shinde-992b9120b/" target="_blank" rel="noreferrer" itemProp="Download Resume" itemType="https://omkarshinde.com/" className="mybtn text-center"> Hire Me</a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a itemProp="telephone" href="https://drive.google.com/file/d/1ibG6vJ19vLw_W84av2xUc-xXD2EcD3Yi/view" className="mybtn text-center"> Download Resume</a>
          </div>
          <br />

          // {toggle ? "" :
          //   <div className={styles.drower}>
          //     <div className="menu2" onClick={Toggle}>
          //       <i className="fa fa-bars"></i>
          //     </div>
          //     <ul>
          //       <Navlinks />
          //     </ul>
          //   </div>
          // }

          <div className={styles.SocialIcons}>
            <a href="https://github.com/omkar-shinde-96k" itemProp="Github" target="_blank" rel="noreferrer" itemType="https://github.com/omkar-shinde-96k" className="fa fa-github"></a>

            <a style={{ color: "green" }} itemProp="whatsapp" target="_blank" rel="noreferrer"  href="https://wa.me/919309120138" className="fa fa-whatsapp"></a>

            <a style={{ color: "rgb(234,66,52)" }} itemProp="email" target="_blank" rel="noreferrer" href="mailto:oshinde796@gmail.com" className="fa fa-envelope"></a>

            <a style={{ color: "#3366ff" }} itemProp="linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/omkar-shinde-992b9120b/" className="fa fa-linkedin"></a>

            <a style={{ color: "#bc2a8d" }} itemProp="instagram" target="_blank" rel="noreferrer" href="https://www.instagram.com/learn_web_development/" className="fa fa-instagram"></a>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <a href="#about" className=" fa fa-chevron-circle-down" style={{ color: "white", fontSize: "50px", textDecoration: "none", textAlign: "center" }}></a>
          </div>
        </div>
      </main>
      <About />
      <br />
      <br />

     {/* <Projects /> */}
      <br />
      <br />
      <br />
    </div>
  )
}


