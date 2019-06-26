import styled from 'styled-components'

export const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
`
