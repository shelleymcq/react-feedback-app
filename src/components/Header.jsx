import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor, 
    color: textColor,
  }
  
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
      
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  // 'rgb alpha' 0,0,0 = black, opacity = 0.4
  bgColor: 'rgba(0,0,0,0.4)',
  // hex color
  textColor: '#ff6a95',
}

// define our propTypes
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header
