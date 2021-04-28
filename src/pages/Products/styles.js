import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    padding: '5px 10px',
    marginBottom: "100px"
  },
  root: {
    flexGrow: 1,
  },
  searchBar: {
    width: "70%",
    padding: "12px",
    display: "block",
    marginTop: "100px",
    marginLeft: "auto",
    marginRight: "auto",
    
  },
  selectCat: {
    display: "block",
    width: "40%",
    padding: "12px",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));