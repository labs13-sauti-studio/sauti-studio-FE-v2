import styled from 'styled-components'
import { palette, spacing, borders } from '@material-ui/system'

export const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${props => (props.column ? 'column' : 'row')};
  justify-content: ${props =>
    props.justify ? props.justify : 'space-between'};
  align-items: ${props => props.align};
`

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  button {
    margin-left: 1rem;
  }
`
export const Box = styled.div`
  ${palette}
  ${spacing}
  ${borders}
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  button {
    margin-left: 1rem;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`
