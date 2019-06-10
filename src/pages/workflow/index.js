import React, { Fragment } from 'react'
import Layout from '@/layout'
import Container from '@material-ui/core/Container'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
// import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components'

const data = {
  title: 'My first Workflow',
  description: 'I hope my very first workflow works',
  options: [
    {
      id: 0,
      title: 'Weather forcast',
      responses: [
        { id: 0, text: "Today's forcast" },
        { id: 1, text: 'Highs & Lows' },
        { id: 2, text: 'Weekly Forcast' },
      ],
    },
  ],
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`

const index = () => (
  <Layout>
    <Container>
      <Grid>
        <Card className="grid-item">
          <CardContent>
            <Typography variant="h5" component="h2">
              {data.title}
            </Typography>
            <Typography color="textSecondary">{data.description}</Typography>
          </CardContent>
        </Card>
        {data.options.map(option => (
          <Fragment>
            <Card key={option.id} className="grid-item">
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

export default index
