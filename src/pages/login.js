import React from 'react'
import Container from '@material-ui/core/Container'
import Layout from '@/layout'
import SEO from '@/seo'
import GoogleLoginButton from 'src/images/google-login-button.png'
import FacebookLoginButton from 'src/images/facebook-login-button.png'
import LoginModal from '@/modal'

const LoginPage = () => (
  <LoginModal>
    <Layout>
      <SEO title="Login" />

      <Container>
        {/* <a href={`${process.env.GATSBY_API_URL}/auth/google`}>
        <img src={GoogleLoginButton} alt="" />
      </a>

      <a href={`${process.env.GATSBY_API_URL}/auth/facebook`}>
        <img src={FacebookLoginButton} alt="" />
      </a> */}
      </Container>
    </Layout>
  </LoginModal>
)

export default LoginPage
