import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import style from '../styles/tweet-to-image.module.scss';
import personImg from '../assets/person.jpg'
import TwitterLogo from '../assets/TwitterLogo.png'

const TweetToImage = () => {
 
  const [data, setData] = useState([])

  const featchTweet = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "id": "1611034662301995010"
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const result = await fetch(`${window.location.origin}/api/hello`, requestOptions)
    const data = await result.json();
    console.log("data",data); 
    setData(data)
  }

  useEffect(() => {
    featchTweet()
  }, [])




  return (
    <div class={style.main}>
      {/* <!-- header --> */}
      <header className={style.header}>
        <div class={style.container}>
          <div class={style.wrapper}>
            <div class={style.logo}>Tweet To Image</div>
          </div>
        </div>
      </header>
      {/* <!-- header end --> */}

      <div class={style.pagebody}>
        <div class={style.container}>
          <section>
            <div class={style.box}>
              {/* <div class={style.icon}>
                <span>twi</span>
                <span>=</span>
                <span>img</span>
              </div> */}
              <h1>Convert tweets to image</h1>
              <p>
                Create perfect screenshots from your tweets, paste the tweet
                URL, customize your screenshot and share it wherever you want.
              </p>
              <input
                placeholder="Paste tweet URL and hit enter"
                class={style.input}
                type="text"
              />
            </div>
          </section>
        </div>
      </div>



      <div className={style.editorWraper}>
        <div className={style.container}>
          <div className={style.editor}>
            <div className={style.tweetWrapper}>
              <div className={style.tweet}>
                <div className={style.tweetUserInfo}>

                  <div className={style.profilePic}>
                    <Image src={personImg}   alt="omkar" width="50" height="50" />
                  </div>
                  
                  <div className={style.userInfo}>
                    <h3>Omkar Shinde</h3>
                    <p>@omkar_shinde_01</p>
                  </div>
                  
                  <div className={style.twitterIcon}> 
                    <Image src={TwitterLogo} alt="omkar" width="30" height="30" />
                  </div>
                  
                </div>
              </div>
            </div>
            <div className={style.tools}>
              <div className={style.backgroundOptions}>
                <p>Background</p>
                <div className={style.backgroundOptionsList}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className={style.showLikes}>
                <input className={style.likesCheck} type="checkbox"/>
                <div className={style.likesInfo}>
                  <h3>Show like and retweet count</h3> 
                  <p>Show or hide numbers for likes, RTs etc.</p> 
                </div>
              </div>
              <button className={style.saveButton}>Save Image</button>
            </div>
          </div>
        </div>
      </div>


      <article>
        <div class={style.login}>
          <div class={style.box2}>
            <p>
              <span>Tweet To Image</span> is a super clean, ad-free Twitter client with powerful
              features. Try Kizie for ree and do more with Twitter.
            </p>

            <button>Login with Twitter</button>
          </div>
        </div>
      </article>

      <aside>
        <div class={style.app}>
          <div class={style.box3}>
            <h2>How to use Tweet to Image App</h2>
            <div class={style.boxchild}>
              <div class=" sub-box" >
                <div class="boxchild-1">
                  <div >1</div>
                </div>
                <h3>Enter tweet link</h3>
                <p>
                  Copy the link of the tweet you want to convert to image and
                  paste it in the input field at the top of the page. Hit enter
                  and it&apos;ll fetch your tweet and update preview
                </p>
              </div>

              <div class="sub-box">
                <div class="boxchild-2">
                  <div>2</div>
                </div>
                <h3>Customize the image</h3>
                <p>
                  On the left you&apos;ll see the preview of the image with tweet. On
                  the right you&apos;ll see various customisations options to make
                  the image look better and as you want.
                </p>
              </div>

              <div class="sub-box">
                <div class="boxchild-3">
                  <div>3</div>
                </div>

                <h3>Export image as PNG or copy
                </h3>
                <p>Once you&apos;re done customising the
                  image, you can save the image as PNG
                  file, or you also have the option to copy the
                  screenshot to clipboard for quicker
                  use.</p>

              </div>
            </div>
          </div>
        </div>
      </aside>

      <footer className={style.footer}>
        <div class={style.container}>
          <div class={style.wrapper}>
            <p>Design and developed by omkar and shrikant @2023</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default TweetToImage