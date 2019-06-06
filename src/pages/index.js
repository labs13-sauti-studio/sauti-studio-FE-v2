import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Graphic1, Graphic2 } from '../components/graphics'

const Landing = styled.div`
  section {
    h2 {
      margin-bottom: 1rem;
    }
    h4 {
      text-align: left;
    }
    margin: 1rem 0;
  }
`

const Section2 = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing>
      <section>
        <Typography variant="h2">Design Your Own Text-Based Flow</Typography>
        <Typography variant="h4">
          Sharing information made simple & easy with Sauti Studio + Design
        </Typography>
        <Graphic1 />
        <Button variant="outlined" color="primary">
          Start a New Flow
        </Button>
      </section>
      <Section2>
        <div>
          <ul>
            <li>
              <Typography varient="h3">
                No programming background needed
              </Typography>
            </li>
            <li>
              <Typography varient="h3">
                Create, Update, save & delete flows
              </Typography>
            </li>
            <li>
              <Typography varient="h3">
                Create, Update, save & delete flows
              </Typography>
            </li>
            <li>
              <Typography varient="h3">Simple & intuative visual</Typography>
            </li>
            <li>
              <Typography varient="h3">Cloud-based tool</Typography>
            </li>
            <li>
              <Typography varient="h3">Click through mockup view</Typography>
            </li>
            <li>
              <Typography varient="h3">Cloud-based tool</Typography>
            </li>
          </ul>
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
          information. You can create any text-based app flow with our product.{' '}
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
