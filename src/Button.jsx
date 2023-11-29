import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import './Button.css';

const SimpleButton = ({ onClick, text }) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {text}
    </Button>
  );
};

SimpleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export default SimpleButton;
