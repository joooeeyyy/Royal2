/* eslint-disable react/prop-types */
import  {Typography} from '@mui/material';

const Text = (props) => {
    return (
      <Typography fontFamily={'Poppins'} {...props}>
       {props.children}
      </Typography>
    );
  };

export default Text