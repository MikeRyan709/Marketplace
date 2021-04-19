import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '90%',
    backgroundColor: '#dde6eb',
    marginTop: '35px',
    marginLeft: '22px',
    padding: '10px 10px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', 
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'left',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  priceColor: {
    color: "green",
  },
}));