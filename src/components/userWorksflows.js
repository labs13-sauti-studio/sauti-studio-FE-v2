/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import styled from 'styled-components'
import WorkflowCard from '@/workflowCard'
import { media } from 'src/theme'

import PropTypes from 'prop-types'

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

const UserWorkflows = ({ workflows }) => (
  <WorkflowGrid>
    {workflows.map((wf, i) => (
      <WorkflowCard key={i} {...wf} onClick={() => console.log(wf)} />
    ))}
  </WorkflowGrid>
)

UserWorkflows.propTypes = {
  workflows: PropTypes.array.isRequired,
}

export default UserWorkflows
