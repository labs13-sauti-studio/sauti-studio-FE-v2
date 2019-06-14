import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'

const WorkflowCard = ({ id, name, category }) => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="h2">
        {name}
      </Typography>
      {category !== '' ? (
        <Typography color="textSecondary">{category}</Typography>
      ) : (
        <br />
      )}
    </CardContent>
    <CardActions>
      <Button
        size="small"
        color="primary"
        onClick={() => navigate(`/workflow/${id}`)}
      >
        Edit
      </Button>
      <Button
        size="small"
        color="primary"
        onClick={() => console.log('delete')}
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
}

export default WorkflowCard
