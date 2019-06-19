import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import { deleteUserWorkflow, setActiveWorkflowId } from 'actions'
import { connect } from 'react-redux'

const WorkflowCard = ({ id, name, category, area_code, dispatch }) => (
  <Card>
    <CardContent
      onClick={() => {
        navigate(`/workflow/${id}`)
        dispatch(setActiveWorkflowId(id))
      }}
    >
      <Typography variant="h5" component="h2">
        {name}
      </Typography>
      {category !== '' ? (
        <Typography color="textSecondary">{category}</Typography>
      ) : (
        <br />
      )}
      {area_code !== '' ? (
        <Typography color="textSecondary">{area_code}</Typography>
      ) : (
        <br />
      )}
    </CardContent>
    <CardActions>
      <Button
        size="small"
        color="primary"
        onClick={() => dispatch(deleteUserWorkflow(id))}
      >
        Delete
      </Button>
    </CardActions>
  </Card>
)

WorkflowCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  area_code: PropTypes.string,
  dispatch: PropTypes.func.isRequired,
}

export default connect()(WorkflowCard)
