import React, { Component } from 'react'
import PropTypes from 'prop-types'

const styles = {
  content: {
    fontSize: '35px',
    color: 'gray',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '20px',
    textAlign: 'center',
  }
}

class Loader extends Component {


  state = { content: this.props.text }

  componentDidMount() {

    const { text, speed } = this.props

    this.interval = window.setInterval(() => {
      this.state.content === `${text}...`
        ? this.setState({ content: text })
        : this.setState(({ content }) => ({ content: content + '.' }))
    }, speed)
  }

  componentWillUnmount() {
    window.clearInterval(this.interval)
  }

  render() {
    return (
      <p style={styles.content}>
        {this.state.content}
      </p>
    )
  }
}

Loader.propTypes = {
  text: PropTypes.string.isRequired,
}

Loader.defaultProps = {
  text: 'Loading',
  speed: 300
}

export default Loader