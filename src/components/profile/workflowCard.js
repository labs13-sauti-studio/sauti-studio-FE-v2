import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const WorkflowCard = ({ id, name, category }) => (
  <Card>
    <CardContent>
      <Typography variant="h5" component="h2">
        {name}
      </Typography>
      <Typography color="textSecondary">{category}</Typography>
    </CardContent>
    <CardActions>
      <Link to={`workflow/${id}`}>
        <Button size="small" color="primary">
          Edit
        </Button>
      </Link>
    </CardActions>
  </Card>
)

WorkflowCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
}

export default WorkflowCard
