import React from 'react'
import LanguagesNav from './LanguagesNav'
import ReposGrid from './ReposGrid'
import { fetchPopularRepos } from '../utils/api'

export default class Popular extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedLanguage: 'All',
      error: null,
      repos: {},
    }

    this.updateLanguage = this.updateLanguage.bind(this)
    this.isLoading = this.isLoading.bind(this)
  }

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage)
  }
  updateLanguage(selectedLanguage) {

    this.setState({
      selectedLanguage,
      error: null,
    })

    if (!this.state.repos[selectedLanguage]) {
      fetchPopularRepos(selectedLanguage)
        .then(data => this.setState({ repos: { ...this.state.repos, [selectedLanguage]: data } }))
        .catch(err => {
          console.warn('Error during fetching the data', err)
          this.setState({ error: 'There was an error fetching the repostories' })
        })
    }
  }

  isLoading() {
    const { selectedLanguage, repos, error } = this.state
    return error === null && !repos[selectedLanguage]
  }

  render() {

    const { selectedLanguage, repos, error } = this.state;

    return (
      <React.Fragment>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />
        {this.isLoading() && <p>Loading data...</p>}

        {error ?? <p>{error}</p>}

        {repos[selectedLanguage] && <ReposGrid repos={repos[selectedLanguage]} />}
      </React.Fragment>
    )
  }
}
