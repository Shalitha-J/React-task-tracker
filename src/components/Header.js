import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({ title, onAdd, showAdd }) => {
    
  return (
    <header className='header'>
        <h1 >{title}</h1>
        <Button color={showAdd ? 'green' : 'blue'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>
       
    </header>
  )
}


Header.defaultProps = {
    title:'task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}



// const headerStyling = {
//     color:'red',
//     backgroundColor:'black' 
// }



export default Header

