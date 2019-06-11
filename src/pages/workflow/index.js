/* eslint-disable no-unused-expressions */
import React, { Fragment } from 'react'
import Layout from '@/layout'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'
import TextField from '@material-ui/core/TextField'
import { axiosInstance } from 'src/helpers'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 1rem;
  justify-content: flex-start;
  align-content: flex-end;
`

export default class WorkflowPage extends React.Component {
  constructor() {
    super()
    this.state = {
      title: 'My first Workflow',
      description: 'I hope my very first workflow works',
      options: [
        {
          id: 1,
          title: 'Weather forcast',
          responses: [
            { id: 0, text: "Today's forcast" },
            { id: 1, text: 'Highs & Lows' },
            { id: 2, text: 'Weekly Forcast' },
          ],
        },
      ],
      newOption: {},
    }
  }

  componentDidMount = () => {
    // axiosInstance.get('workflows').then(res => console.log(res))
    axiosInstance
      .post('/workflows', {
        name: 'this is from gatsby yo',
        area_code: 3,
        category: 'info',
        client_id: 1,
        question_id: 1,
      })
      .then(res => console.log(res))
  }

  handleChange = e => {
    const { options } = this.state

    const obj = {
      [e.target.name]: e.target.value,
      responses: [],
      id: options.length + 1,
    }

    this.setState(prevState => ({
      ...prevState,
      newOption: { ...obj },
    }))
  }

  handleOptionSubmit = e => {
    e.preventDefault()

    const { options, newOption } = this.state
    const arr = [...options, ...newOption]

    newOption.title
      ? this.setState(prevState => ({
          ...prevState,
          options: arr,
          newOption: { title: '' },
        }))
      : console.log("can't be empty")
  }

  render() {
    const { handleChange, handleOptionSubmit } = this
    const { title, description, options } = this.state
    const { newOption } = this.state

    return (
      <Layout>
        <Container>
          <Card className="grid-item">
            <CardContent>
              <Typography variant="h5" component="h2">
                {title}
              </Typography>
              <Typography color="textSecondary">{description}</Typography>
              <form onSubmit={handleOptionSubmit}>
                <TextField
                  type="text"
                  placeholder="Add an option"
                  name="title"
                  value={newOption.title}
                  onChange={handleChange}
                />
                <Button type="submit" color="primary">
                  add option
                </Button>
              </form>
            </CardContent>
          </Card>
          <Grid>
            {options.map(option => (
              <Fragment key={option.id}>
                <Card className="grid-item">
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {option.title}
                    </Typography>
                    <Typography color="textSecondary">'desc'</Typography>
                  </CardContent>
                  <CardActions />
                </Card>
                <div>
                  {option.responses.map(res => (
                    <Card key={res.id}>
                      <CardContent>{res.text}</CardContent>
                    </Card>
                  ))}
                </div>
              </Fragment>
            ))}
          </Grid>
        </Container>
      </Layout>
    )
  }
}
