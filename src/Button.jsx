import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import './Button.css';

const SimpleButton = ({ onClick, text, style }) => {
  return (
    <Button className="btn" variant="contained" onClick={onClick} sx={style}>
      {text}
    </Button>
  );
};

SimpleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
  style: PropTypes.any,
};

export default SimpleButton;
