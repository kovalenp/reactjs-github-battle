import React from 'react'
import PlayerInput from './PlayerInput'
import Instructions from './Instructions'
import PlayerPreview from './PlayerPreview'
import Results from './Results'

export default class Battle extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      playerOne: null,
      playerTwo: null,
      battle: false,
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
    const { playerOne, playerTwo, battle } = this.state

    if (battle) {
      return <Results
        playerOne={playerOne}
        playerTwo={playerTwo}
        onReset={() => { this.setState({ playerOne: null, playerTwo: null, battle: false }) }}
      />
    }

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

          {playerOne && playerTwo && (
            <button className='btn dark-btn btn-space' onClick={() => this.setState({ battle: true })}>
              Battle
              </button>
          )}

        </div>

      </React.Fragment>
    )
  }
}