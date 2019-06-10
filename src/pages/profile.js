import React from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import UserWorkflows from '@/profile/userWorksflows'
import Layout from '@/layout'
import UserInfo from '@/profile/userInfo'

const IndexPage = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Layout>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Workflows" />
        <Tab label="Profile" />
      </Tabs>
      {value === 0 && <UserWorkflows />}
      {value === 1 && <UserInfo>Page One</UserInfo>}
    </Layout>
  )
}

export default IndexPage
