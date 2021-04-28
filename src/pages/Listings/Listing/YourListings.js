import React, {useEffect} from 'react'
import { Grid, Button } from '@material-ui/core'

import ListingJS from './ListingJS/ListingJS'
// import listingsData from './ListingData'

import useStyles from './styles';
import {useState} from 'react';
import { Link } from 'react-router-dom';

const YourListings = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [products, setProducts] = useState([])
    let productLocal = JSON.parse(localStorage.getItem('productObject'))
    let productsDATA = [{}]
    
      const getLocalProducts = () => {
        if(productLocal === null){
            
        } else {
            setProducts(productLocal)
        }
      }

      useEffect(()=> {
        getLocalProducts()
      }, [])

      window.addEventListener('load', getLocalProducts)

    const classes = useStyles();

    return (
        <main className={classes.content}>
            <Button component={ Link } to="/post" variant="contained" color="primary" className={classes.createButton}>Create Listing</Button>
            <input type="text" className={classes.searchBar} placeholder="Search..." onChange={event => {setSearchTerm(event.target.value)}}/>
            <div className={classes.toolbar}/>
            <Grid container justify="center">
                {products.filter((val => {
                    if (searchTerm === "") {
                        return val 
                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return val
                    }
                })).map((listingsData) => (
                    <Grid item key={listingsData.id} xs={12} sm={6} md={4} lg={3}>
                        <ListingJS listings={listingsData}/>
                    </Grid>
                  ))}
            </Grid>
        </main>
    )
}

export default YourListings
