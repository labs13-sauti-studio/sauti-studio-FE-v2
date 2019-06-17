import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserLayout from '@/userLayout'
import { connect } from 'react-redux'
import { loadUserInfo, toggleEditProfileModal } from 'state/actions'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import EditUserDetailsModal from '@/EditUserDetailsModel'

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
    const {
      company_name,
      country,
      display_name,
      email,
      phone_num,
      pic,
      isEditingProfile,
      dispatch,
    } = this.props

    return (
      <UserLayout>
        <Card>
          <CardContent>
            <Avatar src={pic} />
            <br />
            <Typography color="textSecondary">{display_name}</Typography>
            <Typography color="textSecondary" variant="body2" component="p">
              {email}
            </Typography>
            <br />
            <Typography variant="body2" component="p">
              {company_name}
            </Typography>
            <Typography variant="body2" component="p">
              {country}
            </Typography>
            <Typography variant="body2" component="p">
              {phone_num}
            </Typography>
          </CardContent>
          <CardActions>
            <a href={`${process.env.GATSBY_API_URL}/logout`}>
              <Button size="small">Logout</Button>
            </a>
            <Button
              onClick={() =>
                dispatch(toggleEditProfileModal(!isEditingProfile))
              }
            >
              Edit Profile
            </Button>
          </CardActions>
        </Card>
        <EditUserDetailsModal />
      </UserLayout>
    )
  }
}

ProfilePage.propTypes = {
  company_name: PropTypes.string,
  country: PropTypes.string,
  display_name: PropTypes.string,
  email: PropTypes.string,
  phone_num: PropTypes.string,
  pic: PropTypes.string,
  isEditingProfile: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect(state => ({
  id: state.user.id,
  display_name: state.user.display_name,
  country: state.user.country,
  phone_num: state.user.phone_num,
  email: state.user.email,
  company_name: state.user.company_name,
  pic: state.user.pic,
  isEditingProfile: state.ui.isEditingProfile,
}))(ProfilePage)
