import React from 'react'
import { Grid } from '@material-ui/core'

import Product from './Product/Product'
import products from './ProductsData'

import useStyles from './styles';
import {useState} from 'react'
 
function Products() {
    const [searchTerm, setSearchTerm] = useState('')
    const [categories, setCategory] = useState("all");
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <input type="text" className={classes.searchBar} placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>
            <br>
            </br>
            <select onChange={event => {setCategory(event.target.value)}} name="categories" className={classes.selectCat}>
                <option value="all">All</option>
                <option value="Electronics">Electronics</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Garden and Outdoor">Garden and Outdoor</option>
                <option value="Education">Education</option>
                <option value="Cooking">Cooking</option>
                <option value="Furniture">Furniture</option>
                <option value="Health and Fitness">Health and Fitness</option>
            </select>
            <div className={classes.toolbar}/>
            <Grid container justify="center">
                {products.filter((val) => {
                    if (searchTerm === "" && categories === "all") {
                        return val 
                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase()) && val.category.toLowerCase().includes(categories.toLowerCase())){
                        return val
                    }
                }).map((products) => (
                    <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>
                        <Product products={products}/>
                    </Grid>
                  ))}
            </Grid>
        </main>
    )
}

export default Products
