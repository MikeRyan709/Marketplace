import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    // flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
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
    marginTop: "20px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  createButton: {
    width: "144px",
    padding: "12px",
    display: "block",
    marginTop: "100px",
    marginLeft: "auto",
    marginRight: "auto",
    textIndent: "3px",
    fontWeight: "bold",
  }
}));