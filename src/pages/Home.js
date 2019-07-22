import React from "react"
import "../App.css"
import image1 from "../images/image1.svg"
import image2 from "../images/image2.svg"
import image3 from "../images/image3.svg"

const Home = () => {
  return (
    <div>
      <div className="home1">
        <div className="textbig">
          <h1>Design Your Own Text-Based Flow</h1>
        </div>
      </div>

      <div className="home1a">
        <div className="homeleft">
          <img src={image1} alt="placeholder alt text" />
        </div>

        <div className="homeleft">
          <h1>
            Sharing information made simple & easy with Sauti Design Studio
          </h1>
          <button>STAR A NEW FLOW</button>
        </div>
      </div>

      <div className="home1a">
        <div className="homesub">
          <p>No programming background needed</p>
          <br />
          <p>Create, Update, save & delete flows</p>
          <br />
          <p>Simple & intuitive visual</p>
          <br />
          <p>Cloud-based tool</p>
          <br />
          <p>Click through mockup view</p>
          <br />
          <p>Simple and Easy</p>
          <br />
          <p>No Code Required</p>
        </div>

        <div className="homeleft">
          <img src={image2} alt="placeholder alt text" />
        </div>
      </div>

      <div className="home1b">
      <iframe
            title="demo"
            width="1024"
            height="576"
            src="https://www.youtube.com/embed/nFO9hyGIBrU"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
      </div>

      <div className="home1c">
        <h1>Knowledge is Power - Sharing it is Powerful</h1>
        <p>
          Sauti Studio & Design is an online tool that allows people without any
          programming background to build their own text-based apps.
        </p>
        <p>
          In Sauti Studio & Design, We offer a simple and easy tool for anyone
          to create their own flow whether to promote a business or share
          essential information that can support their community. From bus
          schedules to a church event calendar, the weather or legal
          information. You can create any text-based app flow with our product.
        </p>
        <p>
          Our mission is to allow anyone to design their own text-based
          applications, and share Knowledge that will strengthen the community.
          Providing a simple tool to create (develop and deploy) empowering
          solutions and quickly communicate ideas to address property.
        </p>
      </div>

      <div className="home1b">
        <h1>TRY OUR DEMO! Placeholder !</h1>
      </div>

      <div className="home1b">
        <img src={image3} alt="placeholder alt text" />
      </div>
    </div>
  )
}

export default Home
