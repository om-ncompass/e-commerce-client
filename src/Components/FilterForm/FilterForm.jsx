import axios from 'axios';
import React, { useEffect, useState } from 'react'

const FilterForm = () => {


    let url = "http://54.153.234.233:3002/product";

    const [type, setType] = useState();
    const [rating, setRating] = useState();
    const [minPrice, setMinPrice] = useState();
    const [maxPrice, setMaxPrice] = useState();
    const [sortBy, setSortBy] = useState();
    const [sortAs, setSortAs] = useState();
  
    const [productList, setProductList] = useState([]);
  
    const fetchProductList = async (url) => {
        const allProducts = await axios.get(
          url,
          {},
          {
            headers: {
              "Access-Control-Allow-Origin": true,
            },
          }
        );
    
        setProductList(await allProducts.data.data.data)
      }
    
      useEffect(() => {
        fetchProductList(url);
      }, [])
  
    const onChangeHandler = (e) => {
      if (e.target.name === "type") setType(e.target.value);
      if (e.target.name === "rating") setRating(e.target.value);
      if (e.target.name === "min-price") setMinPrice(e.target.value);
      if (e.target.name === "max-price") setMaxPrice(e.target.value);
      if (e.target.name === "sort-by") setSortBy(e.target.value);
      if (e.target.name === "sort-as") setSortAs(e.target.value);
      console.log(type, rating, minPrice, maxPrice, sortBy, sortAs);
    };
    const onClickhandler = async (e) => {
      e.preventDefault();
      url += `?`;
      {
        type && (url += `type=${type}&`);
      }
      {
        rating && (url += `minRating=${rating}&`);
      }
      {
        minPrice && (url += `minPrice=${minPrice}&`);
      }
      {
        maxPrice && (url += `maxPrice=${maxPrice}&`);
      }
      {
        sortBy && (url += `sortField=${sortBy}&`);
      }
      {
        sortAs && (url += `sortValue=${sortAs}&`);
      }
      console.log(url);
      fetchProductList(url);
    };


  return (
    <>

        <form className="filter-form">
          <div className="type-filter">
            <label>Type:</label>
            <select id="type-dropdown" name="type" onChange={onChangeHandler}>
              <option value="mobile_phones">mobile_phones</option>
              <option value="laptops">laptops</option>
              <option value="smartwatches">smartwatches</option>
              <option value="tablets">tablets</option>
            </select>
          </div>
          <div className="rating-filter">
            <label>Rating:</label>
            <select
              id="rating-dropdown"
              name="rating"
              onChange={onChangeHandler}
            >
              <option value="5">5</option>
              <option value="4">4</option>
              <option value="3">3</option>
              <option value="2">2</option>
              <option value="1">1</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Minimum Price"
            name="min-price"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="Maximum Price"
            name="max-price"
            onChange={onChangeHandler}
          />
          <input
            type="text"
            placeholder="Sort By"
            name="sort-by"
            onChange={onChangeHandler}
          />
          <select id="sort-dropdown" name="sort-as" onChange={onChangeHandler}>
            <option value="ASC">ASC</option>
            <option value="DESC">DESC</option>
          </select>
          <button className="apply-filter-btn" onClick={onClickhandler}>
            Apply
          </button>
        </form>
      
    </>
  )
}

export default FilterForm
