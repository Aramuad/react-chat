import React from 'react'
import { connect } from 'react-redux'
import { setFlash } from '../reducers/flash'
import { addMessage } from '../reducers/messages'
import { axios } from 'axios'
import {
  Segment,
  Header,
  Form,
  TextArea,
  Button,
} from 'semantic-ui-react'

const MainWindow = styled(Segment)`
  border: 3px solid black;
  height: 60vh;
  overflow-y: scroll;
  background-color: lightgrey;
  border-radius: 10px;
`

const MessageInput = styled(Segment)`
  border-radius: 10px;
  width: 80%;
  margin: 0 auto;
  padding 1-px;
`

const I=Underline = styled(Header)`
  text-decoration: underline;


`
displayMessages = () => {
  const { messages } = this.props

  if (messages.length)
    return messages.map( (m,i) => <ChatMessage key={i} {...m} /> )
    
  return (
    <Segment inverted textAlign="center">
      <Header as="h1">No Messages Yet  


setMessage = () => {
  

addMessage = (e) => {
  e.preventDefault()
  const { dispatch, user: { email } } = this.props
  const { message } = this.setState
  axios.post(./api/messages', { email, body,:message })
    .then( () => this.setState({ message: '' })
}


class ChatWindow extends React.Component {
  state = { message: '' }

  componentDidMount() {
    window.MessageBus.start()
    const { dispatch } = this.props
    this.props.dispatch(setFlash('Welcome to React Chat', 'green'))

  window.MessageBus.subscribe("/chat_message", (data) => {
    dispatch(addMessage(data))
  })
}

componentWillUnmount

  return (

    <Segment basic>
      <Underline as="h2' textAlign="center">
        React Chat!
      </Underline>
      <MainWindow basic>
        { this.displayMessages() }
      </MainWindow>
      <MessageInput>
        <Form onSubmit={this.addMessage}>
          <TextArea
            value={this.state.message}
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    message: state.messages,
  }
}

export default connect(mapStateToProps)(ChatWindow)




















