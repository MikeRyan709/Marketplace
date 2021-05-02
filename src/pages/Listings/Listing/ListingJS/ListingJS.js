import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
 
import useStyles from './styles';
import { Link } from 'react-router-dom';

const ListingJS = ({ listings, products, setProducts }) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    const removeItem = () => {
        setProducts(products.filter((el) => el.id !== listings.id))
        localStorage.setItem("productObject", JSON.stringify(products.filter((el) => el.id !== listings.id)))
        setOpen(false)

    }
    const classes = useStyles();
    return (
        <div>
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={listings.image} title={listings.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {listings.name}
                    </Typography>
                    <Typography variant="h5" className={classes.priceColor}>
                        {listings.price}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">{listings.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Remove from Listing" onClick={handleClickOpen}>
                    <HighlightOffIcon/>
                </IconButton>
                <IconButton aria-label="View Product">
                    <Link to={`/products/${listings.id}`}>
                        <ChatBubbleOutlineIcon/>
                    </Link>
                </IconButton>
            </CardActions>
        </Card>
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle id="alert-dialog-title">{"Are you sure you want to remove this listing?"}</DialogTitle>
        <DialogContent>
            <DialogContentText id="alert-dialog-description">
            Press Remove if you are sure you want to remove {listings.name}. Press Cancel if you want to keep the listing.
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
            Cancel
            </Button>
            <Button onClick={removeItem} color="primary" autoFocus>
            Remove
            </Button>
        </DialogActions>
        </Dialog>
        </div>
    )
}

export default ListingJS
