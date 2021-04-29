import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
 
import useStyles from './styles';
import { Link } from 'react-router-dom';

const ListingJS = ({ listings, products, setProducts }) => {
    const removeItem = () => {
        setProducts(products.filter((el) => el.id !== listings.id))
        localStorage.setItem("productObject", JSON.stringify(products.filter((el) => el.id !== listings.id)))
    }
    const classes = useStyles();
    return (
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
                <IconButton aria-label="Remove from Listing" onClick={removeItem}>
                    <HighlightOffIcon/>
                </IconButton>
                <IconButton aria-label="View Product">
                    <Link to={`/products/${listings.id}`}>
                        <ChatBubbleOutlineIcon/>
                    </Link>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default ListingJS
