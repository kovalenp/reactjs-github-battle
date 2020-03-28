import React from 'react';
import LanguagesNav from './LanguagesNav';
import ReposGrid from './ReposGrid';
import Loading from './Loading';
import { fetchPopularRepos } from '../utils/api';

export default class Popular extends React.Component {
  state = {
    selectedLanguage: 'All',
    error: null,
    repos: {},
  };

  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage);
  }

  updateLanguage = (selectedLanguage) => {
    this.setState({
      selectedLanguage,
      error: null,
    });

    if (!this.state.repos[selectedLanguage]) {
      fetchPopularRepos(selectedLanguage)
        .then((data) =>
          this.setState({
            repos: { ...this.state.repos, [selectedLanguage]: data },
          })
        )
        .catch(() => {
          this.setState({
            error: 'There was an error fetching the repostories',
          });
        });
    }
  };

  isLoading = () => {
    const { selectedLanguage, repos, error } = this.state;
    return error === null && !repos[selectedLanguage];
  };

  render() {
    const { selectedLanguage, repos, error } = this.state;

    return (
      <>
        <LanguagesNav
          selected={selectedLanguage}
          onUpdateLanguage={this.updateLanguage}
        />
        {this.isLoading() && <Loading text="Fetching profiles" />}

        {error ?? <p>{error}</p>}

        {repos[selectedLanguage] && (
          <ReposGrid repos={repos[selectedLanguage]} />
        )}
      </>
    );
  }
}
