import PropTypes from 'prop-types';
import { Button } from './Button';

export const Header = ({title, text, onAdd, showAdd}) => {

    // const onClick = () => {
    //     console.log('button clicked');
    // }

    return (
        <header className="header">
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Cancel' : 'Add'} onClick={onAdd}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Default: Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

// CSS in JSX
// const headingStyle = {
//     color:'red', backgroundColor:'black'
// }

