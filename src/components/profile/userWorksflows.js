import React from 'react'
import styled from 'styled-components'
import WorkflowCard from './workflowCard'
import { media } from '../../theme'

const workflows = [
  { id: 0, title: 'Workflow 1', description: 'very cool wf' },
  { id: 1, title: 'Workflow 2', description: 'badass wf' },
  { id: 2, title: 'Workflow 2', description: 'badass wf' },
  { id: 3, title: 'Workflow 2', description: 'badass wf' },
  { id: 4, title: 'Workflow 2', description: 'badass wf' },
  { id: 5, title: 'Workflow 2', description: 'badass wf' },
]

const WorkflowGrid = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1rem;
  ${media.phone`
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  `}
`

const UserWorkflows = () => (
  <WorkflowGrid>
    {workflows.map((wf, i) => (
      <WorkflowCard key={i} {...wf} />
    ))}
  </WorkflowGrid>
)

export default UserWorkflows
