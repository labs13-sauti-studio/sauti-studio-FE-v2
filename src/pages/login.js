import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import LoginForm from '../components/forms/login'

const IndexPage = () => (
  <Layout>
    <SEO title="Login" />
    <LoginForm />
  </Layout>
)

export default IndexPage
