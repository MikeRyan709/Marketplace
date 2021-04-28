import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Button, TextField, InputLabel, OutlinedInput, IconButton} from '@material-ui/core';
import NumberFormat from 'react-number-format';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Autocomplete from '@material-ui/lab/Autocomplete';
import productsDATA from '../Products/ProductsData'
import './Posting.css'

function Posting() {
  const [products, setProducts] = useState([])
  let localDATA = JSON.parse(localStorage.getItem("productObject"))

  const [price, setPrice] = useState('')
  const [name, setName] = useState('')
  const [categoriesstate, setCategories] = useState('')
  const [desc, setDesc] = useState('')
  
  const [imageURL, setImageURL] = useState('') 
  

  let getImageURL = () => {
    const preview = document.querySelector('img');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();
  
    reader.addEventListener("load", function () {
      // convert image file to base64 string
      preview.src = reader.result;
      setImageURL(reader.result)
    }, false);
  
    if (file) {
      reader.readAsDataURL(file);
    }

  }

  let submitBtn = () => {
    if (price === '' || name === '' || categoriesstate === '' || desc === '' || imageURL === ''){
      alert("A Text Field is not filled in!")
    } else {
    let productObject = {
      id: productsDATA.length + localDATA.length + 1,
      name: name, 
      description: desc, 
      category: categoriesstate + " All", 
      price: price, 
      image: imageURL
    }
    products.push(productObject)
    localStorage.setItem("productObject", JSON.stringify(products))
    window.location.href="/listings"
    }}

    const history = useHistory()


  let cancelBtn = () => {
    // localStorage.setItem("productObject", JSON.stringify(products))
    history.goBack()
  }


  const getLocalProducts = () => {
    if(JSON.parse(localStorage.getItem('productObject')) === null){
      localStorage.setItem('productObject', JSON.stringify([]));
    } else {
     let productLocal = JSON.parse(localStorage.getItem('productObject'))
    setProducts(productLocal)
     localStorage.setItem('productObject', JSON.stringify(productLocal));
    }
  }

  useEffect(()=> {
    getLocalProducts()
}, [])

  window.addEventListener('load', getLocalProducts)

  return(
    <div className='BG'>
        <div className="imgPreview">
        <input accept="image/*" id="icon-button-file" type="file" onChange={getImageURL}/>
        <label htmlFor="icon-button-file" id='Photo'>
          <IconButton color="primary" aria-label="upload picture" component="span" style={{marginTop: "50px"}}>
            <PhotoCamera style={{fontSize: 60}}/>
          </IconButton>   
        </label>
          <img width="350px" height="200px" alt="" className="previewImg">
          </img>
        </div> 
        

      <InputLabel htmlFor="Selling-Price">Selling Price</InputLabel>
      <NumberFormat type="numbers" className='Selling-Price' id="Selling-Price" variant="outlined" prefix="$" onChange={(e)=> setPrice(e.target.value)} />

      <InputLabel htmlFor="Product-Name">Product Name</InputLabel>
      <OutlinedInput className='Product-Name' id="Product-Name" onChange={(e)=> setName(e.target.value)}/>

      <InputLabel htmlFor="Categories">Categories</InputLabel>
      <Autocomplete 
        id="Categories"
        className='Categories'
        options={categories}
        getOptionLabel={(option) => option.title}
        onChange={(event, value)=> setCategories(value.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            
          />
        )}
      />

      <InputLabel htmlFor="Description">Description</InputLabel>
      <TextField name="description" className='Description' id="Description" multiline rows={5} variant="outlined" onChange={(e)=> setDesc(e.target.value)}/>


      <Button id="Cancel" variant="contained" color="secondary" onClick={cancelBtn}>Cancel</Button>

      
      <Button id="Submit" variant="contained" color="primary" onClick={submitBtn}>Submit</Button>
      

    </div>
  )
}

const categories = [
  { title: 'Electronics'},{ title: 'Entertainment'},{ title: 'Garden and Outdoors'},{ title: 'Education'},{ title: 'Cooking'},{ title: 'Furniture'},{ title: 'Health and Fitness'}]

export default Posting