
import PropTypes from 'prop-types'

function Button({color, text, onClick}) {


  return  <button
   onClick={onClick} 
   className='btn' 
  style={{backgroundColor:color}}
  >
    {text}
  </button>
}

export default Button
 

Button.defaultProp = {
    color: 'steelblue'
    
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    noClick: PropTypes.func,
}
