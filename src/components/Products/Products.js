import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product'
import products from './ProductsData'

import useStyles from './styles';
import {useState} from 'react'
 
function Products() {
    const [searchTerm, setSearchTerm] = useState('')
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <input type="text" className={classes.searchBar} placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>
            <div className={classes.toolbar}/>
            <Grid container justify="center">
                {products.filter((val => {
                    if (searchTerm === "") {
                        return val 
                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                    }
                })).map((products) => (
                    <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>
                        <Product products={products}/>
                    </Grid>
                  ))}
            </Grid>
        </main>
    )
}

export default Products
