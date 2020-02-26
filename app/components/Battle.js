import React from 'react'
import PlayerInput from './PlayerInput'
import Instructions from './Instructions'
import PlayerPreview from './PlayerPreview'

export default class Battle extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      playerOne: null,
      playerTwo: null,
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleSubmit(id, player) {
    this.setState({ [id]: player })
  }

  handleReset(id) {
    this.setState({ [id]: null })
  }

  render() {
    const { playerOne, playerTwo } = this.state

    return (
      <React.Fragment>
        <Instructions />
        <div className='players-container'>
          <h1 className='center-text header-lg'>Players</h1>
          <div className='row space-around'>
            {(playerOne === null)
              ? <PlayerInput label='Player One' onSubmit={(player) => this.handleSubmit('playerOne', player)} />
              : <PlayerPreview label='Player One' onReset={() => this.handleReset('playerOne')} username={playerOne} />
            }
            {(playerTwo === null)
              ? <PlayerInput label='Player Two' onSubmit={(player) => this.handleSubmit('playerTwo', player)} />
              : <PlayerPreview label='Player Two' onReset={() => this.handleReset('playerTwo')} username={playerTwo} />
            }
          </div>
        </div>
      </React.Fragment>
    )
  }
}