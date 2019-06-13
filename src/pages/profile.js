import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserLayout from '@/userLayout'
import { connect } from 'react-redux'
import { loadUserInfo } from 'state/actions'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

class ProfilePage extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  componentDidMount() {
    const { dispatch } = this.props

    dispatch(loadUserInfo())
  }

  render() {
    const { user } = this.props

    const { company_name, country, display_name, email, phone_num, pic } = user

    return (
      <UserLayout>
        <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              <Avatar src={pic} />
            </Typography>
            <Typography className="{classes.pos}" color="textSecondary">
              {display_name}
            </Typography>
            <Typography variant="body2" component="p">
              {company_name}
            </Typography>
            <Typography variant="body2" component="p">
              {country}
            </Typography>
            <Typography variant="body2" component="p">
              {email}
            </Typography>
            <Typography variant="body2" component="p">
              {phone_num}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </UserLayout>
    )
  }
}

ProfilePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object,
}

export default connect(state => ({
  user: state.user.info,
}))(ProfilePage)
