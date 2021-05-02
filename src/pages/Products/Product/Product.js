import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'; 
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
 
import useStyles from './styles';
import { Link } from 'react-router-dom';

const Product = ({products}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={products.image} title={products.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {products.name}
                    </Typography>
                    <Typography variant="h5" className={classes.priceColor}>
                        {products.price}
                    </Typography>
                </div>
                <Typography variant="body2" color="textSecondary">{products.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCart/>
                </IconButton>
                <IconButton aria-label="View Product" >
                    <Link to={`/products/${products.id}`}>
                        <ChatBubbleOutlineIcon />
                    </Link>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
