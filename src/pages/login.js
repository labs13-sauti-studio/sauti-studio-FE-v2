import React from 'react'
import Container from '@material-ui/core/Container'
import Layout from '../components/layout'
import SEO from '../components/seo'
import GoogleLoginButton from '../images/google-login-button.png'

const LoginPage = () => (
  <Layout>
    <SEO title="Login" />

    <Container>
      <a href={`${process.env.GATSBY_API_URL}/auth/google`}>
        <img src={GoogleLoginButton} alt="" />
      </a>
    </Container>
  </Layout>
)

export default LoginPage
