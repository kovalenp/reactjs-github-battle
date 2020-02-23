import React from 'react'
import PropTypes from 'prop-types'

function LanguagesNav({ selected, onUpdateLanguage }) {

  const languages = ['All', 'Javascript', 'Java', 'Python', '.Net']

  return (
    <ul className='flex-center'>
      {languages.map((language, i) => (
        <li key={i}>
          <button
            className='btn-clear nav-link'
            style={selected === language ? { color: 'coral' } : null}
            onClick={() => onUpdateLanguage(language)}
          >
            {language}
          </button>
        </li>)
      )}
    </ul>
  )
}

LanguagesNav.propTypes = {
  selected: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired,
}

export default LanguagesNav;