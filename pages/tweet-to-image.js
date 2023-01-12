import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import style from '../styles/tweet-to-image.module.scss';
import personImg from '../assets/person.jpg'
import TwitterLogo from '../assets/TwitterLogo.png'
import html2canvas from "html2canvas"
import { FcLike } from "react-icons/fc";
import { FiRepeat } from "react-icons/fi";
import Head from 'next/head';

const TweetToImage = () => {

  const [data, setData] = useState([])
  const [error, setError] = useState(null)

  const featchTweet = async (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "id": id || "1611034662301995010"
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const result = await fetch(`${window.location.origin}/api/hello`, requestOptions)
    const data = await result.json();
    console.log("data", data);
    setData(data)
  }

  useEffect(() => {
    featchTweet()
  }, [])

  function download() {
    const canvas = document.getElementById("tweetWrapper");

    html2canvas(document.getElementById("tweetWrapper")).then(function (canvas) {
      var anchorTag = document.createElement("a");
      document.body.appendChild(anchorTag);
      anchorTag.download = "tweet.jpg";
      anchorTag.href = canvas.toDataURL();
      anchorTag.target = '_blank';
      anchorTag.click();
    });
  }

  const onInputChange = (e) => {
    setError(null)
    let link = e.target.value;
    if (!(link).trim()) return
    let a = link.split("/");
    let b = a[a.length - 1]
    if (b?.length === 19) {
      featchTweet(b)
      return
    }
    setError("Invalid Tweet Link")

  }


  return (
    <> 
      <Head>
      
      <title>Tweet to Image Converter Online</title>
       <meta name='keywords' content='tweet to image, tweet to image online, tweet to image app, tweet to image generator, tweet to image without watermark, tweet to image free, convert tweets to image, tweet 2 image, how to take picture of a tweet, fake tweet photo editor' />
       <meta name='description' content='Online Tweet to Image Converter is a free tool for converting tweets into images and get tweet screenshots. You can add customized backgrounds such as gradients, solid colors or images and generate images from tweets. You can use light or dark theme. Also, language can be set before capturing tweets.' />
      </Head>
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
                Create perfect screenshots from your tweets, paste the tweet URL, customize your screenshot and share it wherever you want.
              </p>
              <input
                placeholder="https://twitter.com/SpaceX/status/1612698343691673601"
                class={style.input}
                type="text"
                onChange={onInputChange}
              />
              <span>{error}</span>
            </div>
          </section>
        </div>
      </div>


      <div className={style.container}>
        <div className={style.editor}>
          <div id="tweetWrapper" className={style.tweetWrapper}>
            <div className={style.tweet}>
              <div className={style.tweetUserInfo}>
                <div className={style.profilePicWrapper}>
                  <div className={style.profilePic}>
                    <img src={data?.user?.profile_image_url_https} alt="" width="50" height="50" />
                  </div>
                  <div className={style.userInfo}>
                    <h3>{data?.user?.name}</h3>
                    <p>@{data?.user?.screen_name}</p>
                  </div>
                </div>
                <div className={style.twitterIcon}>
                  <Image src={TwitterLogo} alt="" width="30" height="30" />
                </div>
              </div>
              <div className={style.tweetText}>
                {data?.text}
              </div>
              <p className={style.tweetTime}>{data?.created_at}</p>
              <div className={style.tweetLikesRetweets}>
                <span>
                  <FcLike size="20" /> &nbsp;&nbsp; {data?.favorite_count}
                </span>
                <span>
                  <FiRepeat size="20" color="green" />  &nbsp;&nbsp; {data?.retweet_count}
                </span>
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
              </div>
            </div>
            <div className={style.showLikes}>
              <input className={style.likesCheck} type="checkbox" />
              <div className={style.likesInfo}>
                <h3>Show like and retweet count</h3>
                <p>Show or hide numbers for likes, RTs etc.</p>
              </div>
            </div>
            <button onClick={download} className={style.saveButton}>Download Image</button>
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

      <div class={style.container}>
        <div class={style.app}>
          <div class={style.box3}>
            <h2>How to use Tweet to Image App</h2>
            <div class={style.boxchild}>
              <div class={style.subBox} >
                <div class={style.boxchild1}>
                  <div >1</div>
                </div>
                <h3>Enter tweet link</h3>
                <p>
                  Copy the link of the tweet you want to convert to image and
                  paste it in the input field at the top of the page. Hit enter
                  and it&apos;ll fetch your tweet and update preview
                </p>
              </div>

              <div class={style.subBox}>
                <div class={style.boxchild2}>
                  <div>2</div>
                </div>
                <h3>Customize the image</h3>
                <p>
                  On the left you&apos;ll see the preview of the image with tweet. On
                  the right you&apos;ll see various customisations options to make
                  the image look better and as you want.
                </p>
              </div>

              <div class={style.subBox}>
                <div class={style.boxchild3}>
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
      </div>

      <footer className={style.footer}>
        <div class={style.container}>
          <div class={style.wrapper}>
            <p>Design and developed by omkar and shrikant @2023</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}

export default TweetToImage