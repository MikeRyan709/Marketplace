import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    // flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    padding: '5px 10px',
  },
  root: {
    flexGrow: 1,
  },
  searchBar: {
    width: "40%",
    padding: "12px",
    display: "block",
    marginTop: "4%",
    marginLeft: "auto",
    marginRight: "auto",
    
  },
}));