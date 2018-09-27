import React form 'react'
import {
  Segment,
  Divider,
} from 'semantic-ui-react'
import { connect } from 'react-redux'
import styled from 'styled-components'

const MyMessage = styled(Segment)`
  background-color: blue;
  color: white !important;
`

const TheirMessage = styled(Segment)`
  background-color: light-grey;
`


const ChatMessage = ({ body, email, = 'anon' }) => (
  <Segment>
    <i>{email}</i>
    <Divider hidden />
    <blockquote>{body} 
  </Segment>
)

export defualt ChatMessage
