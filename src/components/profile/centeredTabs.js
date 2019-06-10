import React, { Fragment } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const CenteredTabs = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Fragment>
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
      {value === 0 && <div>Page One</div>}
    </Fragment>
  )
}

export default CenteredTabs
