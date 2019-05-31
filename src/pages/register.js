import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import RegistrationForm from '../components/forms/register'

const IndexPage = () => (
  <Layout>
    <SEO title="Register" />
    <RegistrationForm />
  </Layout>
)

export default IndexPage
