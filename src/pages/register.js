import React from 'react'
import Layout from '@/layout'
import SEO from '@/seo'
import RegistrationForm from '@/forms/register'

const IndexPage = () => (
  <Layout>
    <SEO title="Register" />
    <RegistrationForm />
  </Layout>
)

export default IndexPage
