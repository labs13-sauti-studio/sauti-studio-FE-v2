import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import Layout from '@/layout'
import SEO from '@/seo'
import { Link } from 'gatsby'
import { Graphic1, Graphic2, Graphic3 } from '@/graphics'
import { media } from 'src/theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Phone from '../images/sautiphone.png'
import Form from '../components/forms/Form'
const Landing = styled.div`
  margin-top: 4rem;
  * {
    max-width: 100%;
  }
  section {
    h2 {
      margin-bottom: 3rem;
    }
    h4 {
      text-align: left;
    }
    margin: 1rem 0;
  }
`
const Section1 = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  align-items: space-between;
  /* text-align: center; */
  h2 {
    grid-column: 1/-1;
  }
  .sub-info {
    text-align: right;
    .start {
      height: 100%;
      text-align: center;
      button {
        margin-top: 4rem;
      }
    }
  }
  ${media.tablet`
    grid-template-columns: 1fr;
    button {
      margin-bottom: 4rem;
    }
   `}
`
const Section2 = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  .list {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  ${media.phone`
    grid-template-columns: 1fr;

    .list {
      text-align: center;
    }
   `}
`

const Section3 = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  align-items: space-between;
  /* text-align: center; */
  h2 {
    grid-column: 1/-1;
  }
  .sub-info {
    text-align: right;
    .start {
      height: 100%;
      text-align: center;
      button {
        margin-top: 4rem;
      }
    }
  }
  ${media.tablet`
    grid-template-columns: 1fr;
    button {
      margin-bottom: 4rem;
    }
   `}
`

const Section4 = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  align-items: space-between;
  text-align: center;
  h2 {
    grid-column: 1/-1;
  }
  .sub-info {
    text-align: center;
    .start {
      height: 100%;
      text-align: center;
      button {
        margin-top: 4rem;
      }
    }
  }
  ${media.tablet`
    grid-template-columns: 1fr;
    button {
      margin-bottom: 4rem;
    }
   `}
`
const VideoMedia = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  align-items: space-between;
  text-align: center;
  h2 {
    grid-column: 1/-1;
  }
  .sub-info {
    text-align: center;
    .start {
      height: 100%;
      text-align: center;
      button {
        margin-top: 4rem;
      }
    }
  }
  ${media.tablet`
    grid-template-columns: 1fr;
    button {
      margin-bottom: 4rem;
    }
   `}
`

const FormStyle = styled.section`
width: 340px;
height: 440px;
background: #F2F5F8;
border-radius: 8px;
box-shadow: 0 0 20px -10px #000;
padding: 20px 30px;
max-width: calc(100vw - 40px);
box-sizing: border-box;
font-family: 'Lato',sans-serif;
position: relative;
textAlign: center,
margin: 0 auto,
`
const contentCenter = {
  margin: '0 auto',
}
const btnCenter = {
  textAlign: 'center',
  margin: '0 auto',
}
const btnBG = {
  backgroundColor: '#E74C3D',
  color: 'white',
}
const BoldText = styled.section`
  fontweight: 'bold';
`
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing>
      <Section1>
        <Typography variant="h2">Design Your Own Text-Based Flow</Typography>
        <Graphic1 />
        <div className="sub-info">
          <Typography variant="h4">
            Sharing information made simple & easy with Sauti Studio + Design
          </Typography>
          <div className="start">
            <Link to="/login">
              <Button variant="outlined" color="primary" style={btnBG}>
                Start a New Flow
              </Button>
            </Link>
          </div>
        </div>
      </Section1>

      <Section2>
        <div>
          <Typography varient="ul" className="list">
            <Typography varient="li">
              <FontAwesomeIcon icon="check-circle" /> No programming background
              needed
            </Typography>
            <Typography varient="li">
              <FontAwesomeIcon icon="check-circle" /> Create, Update, save &
              delete flows
            </Typography>
            <Typography varient="li">
              <FontAwesomeIcon icon="check-circle" /> Create, Update, save &
              delete flows
            </Typography>
            <Typography varient="li">
              <FontAwesomeIcon icon="check-circle" /> Simple & intuative visual
            </Typography>
            <Typography varient="li">
              <FontAwesomeIcon icon="check-circle" /> Cloud-based tool
            </Typography>
            <Typography varient="li">
              <FontAwesomeIcon icon="check-circle" /> Click through mockup view
            </Typography>
            <Typography varient="li">
              <FontAwesomeIcon icon="check-circle" /> Cloud-based tool
            </Typography>
          </Typography>
        </div>
        <div>
          <Graphic2 />
        </div>
      </Section2>
      <section style={{ textAlign: 'center' }}>
        <div style={btnCenter}>
          <Button
            variant="outlined"
            color="primary"
            href="https://www.youtube.com/watch?v=nFO9hyGIBrU"
            target="_blank"
            style={btnBG}
          >
            Watch the Video to Learn More
          </Button>
        </div>
        <VideoMedia>
          <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/nFO9hyGIBrU"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VideoMedia>
        <div style={{ margin: '50px 0' }}>
          <Typography variant="h4" style={{ textAlign: 'center' }}>
            Knowledge is power - Sharing it is powerful
          </Typography>
          <p>
            Sauti Studio & Design is an online tool that allows people without
            any programming background to build their own text-based apps.
          </p>

          <p>
            In Sauti Studio & Design, We offer a simple and easy tool for anyone
            to create their own flow whether to promote a buisness or share
            essential information that can support their community. From bus
            scheduals to a church event calendar, the weather or legal
            information. You can create any text-based app flow with our
            product.{' '}
          </p>

          <p>
            Our mission is to allow anyone to design their own text-based
            applications, and share Knowledge that will stregthin the community.
            Providing a simple tool to create (develop and deploy) empowering
            solutions and quickly communicate ideas to address proverty.
          </p>
        </div>
        <hr
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginLeft: 5,
            marginRight: 5,
          }}
        ></hr>
      </section>

      {/* TRY OUT INTERACTIVE DEMO SECTION */}
      <Section4>
        <Typography variant="h3">Try Our Interactive Demo</Typography>
        <div>
          <Typography>
            In this simulation we're using Sauti East Africa flow to demonstrate
            Sauti Studio + Design text-based app creation tool.
          </Typography>
        </div>
        <div>
          <img src={Phone} />
        </div>
        <div>
          <Button
            variant="outlined"
            color="primary"
            href="http://sautiafrica.org/sauti-platform/"
            target="_blank"
            style={btnBG}
          >
            Interactive Demo
          </Button>
        </div>
      </Section4>
      <hr
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          marginLeft: 5,
          marginRight: 5,
        }}
      ></hr>
      {/* EXPLORE OUR FLOW SAMPLES SECTION */}
      <Section4>
        <Typography variant="h3">Explor Our Flow Samples</Typography>
        <div>
          <Graphic3 />
        </div>
      </Section4>
      <hr
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          marginLeft: 5,
          marginRight: 5,
        }}
      ></hr>
      <Section4 style={contentCenter}>
<FormStyle style={{ margin: '0 auto' }}>
      <Typography variant="h3">Contact Us</Typography>

    <div>
    <Form/>
  </div>
</FormStyle>
      </Section4>
    </Landing>
  </Layout>
)

export default IndexPage
