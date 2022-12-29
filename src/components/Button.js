import PropTypes from 'prop-types'

export const Button = ({color, text, onClick}) => {
    // const onClick = (e) => {
    //     console.log('click', e)
    // }

    return (
        <button
            onClick={onClick}
            style={{backgroundColor:
            color}}
            className='btn'>
            {text}
        </button>
    
  )
}

Button.defaultProps = {
    color: 'steelblue',
    text: 'Button'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}


