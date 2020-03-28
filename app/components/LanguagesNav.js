import React from 'react';
import PropTypes from 'prop-types';

function LanguagesNav({ selected, onUpdateLanguage }) {

  const languages = ['All', 'Javascript', 'CSS', 'Python', 'Java'];

  return (
    <ul className='flex-center'>
      {languages.map((language, i) => (
        <li key={i}>
          <button
            className='btn-clear nav-link'
            style={selected === language ? { color: 'rgb(187, 46, 31)' } : null}
            onClick={() => onUpdateLanguage(language)}
          >
            {language}
          </button>
        </li>)
      )}
    </ul>
  );
}

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired,
};

export default LanguagesNav;