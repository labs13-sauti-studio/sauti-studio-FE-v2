import React from "react"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import styled from "styled-components"
import Layout from "@/layout"
import SEO from "@/seo"
import { Graphic1, Graphic2 } from "@/graphics"
import { media } from "src/theme"

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
            <Button variant="outlined" color="primary">
              Start a New Flow
            </Button>
          </div>
        </div>
      </Section1>

      <Section2>
        <div>
          <Typography varient="ul" className="list">
            <Typography varient="li">
              No programming background needed
            </Typography>
            <Typography varient="li">
              Create, Update, save & delete flows
            </Typography>
            <Typography varient="li">
              Create, Update, save & delete flows
            </Typography>
            <Typography varient="li">Simple & intuative visual</Typography>
            <Typography varient="li">Cloud-based tool</Typography>
            <Typography varient="li">Click through mockup view</Typography>
            <Typography varient="li">Cloud-based tool</Typography>
          </Typography>
        </div>
        <div>
          <Graphic2 />
        </div>
      </Section2>
      <section>
        <Typography variant="h4">
          Knowledge is power - Sharing it is powerful
        </Typography>
        <p>
          Sauti Studio & Design is an online tool that allows people without any
          programming background to build their own text-based apps.
        </p>

        <p>
          In Sauti Studio & Design, We offer a simple and easy tool for anyone
          to create their own flow whether to promote a buisness or share
          essential information that can support their community. From bus
          scheduals to a church event calendar, the weather or legal
          information. You can create any text-based app flow with our product.{" "}
        </p>

        <p>
          Our mission is to allow anyone to design their own text-based
          applications, and share Knowledge that will stregthin the community.
          Providing a simple tool to create (develop and deploy) empowering
          solutions and quickly communicate ideas to address proverty.
        </p>
      </section>
    </Landing>
  </Layout>
)

export default IndexPage
