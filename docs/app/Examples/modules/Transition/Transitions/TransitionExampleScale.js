import React, { Component } from 'react'
import { Button, Divider, Image, Transition } from 'semantic-ui-react'

export default class TransitionExampleScale extends Component {
  state = { active: true }

  handleClick = () => {
    const { active } = this.state

    this.setState({ active: !active })
  }

  render() {
    const { active } = this.state

    return (
      <div>
        <Transition
          active={active}
          animation='scale'
          as={Image}
          size='small'
          src='http://semantic-ui.com/images/leaves/1.png'
        />

        <Divider hidden />

        <Button onClick={this.handleClick}>Run</Button>
      </div>
    )
  }
}