import { makeStyles } from '@mui/styles'

import { Button } from '@mui/material';

const useStyles = makeStyles({
   root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    borderRadius: 15,
    color: 'white',
     padding : '15px 30px'
  },
});

export const ButtonStyled = (props) => {
  const classes = useStyles();
  return <Button className={classes.root}> {props.value}</Button>
}