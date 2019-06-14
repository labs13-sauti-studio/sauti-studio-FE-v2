/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import WorkflowCard from '@/workflowCard'
import { axiosInstance } from 'src/helpers'
import { media } from 'src/theme'

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

export default function UserWorkflows() {
  const [data, setData] = useState([])

  useEffect(() => {
    axiosInstance.get('/workflows').then(result => setData(result.data))
  }, [])

  return (
    <WorkflowGrid>
      {data.map((wf, i) => (
        <WorkflowCard key={i} {...wf} />
      ))}
    </WorkflowGrid>
  )
}
