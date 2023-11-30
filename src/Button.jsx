import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import './Button.css';
// import StyledEngineProvider from '@mui/material/styles';

const SimpleButton = ({ onClick, text }) => {
  return (
    // <StyledEngineProvider injectFirst>
    <Button className="btn" variant="contained" onClick={onClick}>
      {text}
    </Button>
    // </StyledEngineProvider>
  );
};

SimpleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string,
};

export default SimpleButton;
