import React from 'react'
import { useState, useEffect } from "react";
import { getProduct } from "../services/auth"
import { updateProduct } from "../services/auth"
import { useParams, useHistory } from "react-router-dom"

export default function EditProduct(props) {
  let { id } = useParams()
  let [product, setProduct] = useState({})

  useEffect(() => {
    getProductData()
    // eslint-disable-next-line
  }, [id])

  async function getProductData() {
    let data = await getProduct(id)
    setProduct(data)
  }

  const defaultInput = {
    name: product.name,
    price: product.price,
    img_url: product.img_url,
    description: product.description
  }

  const history = useHistory()
  const [input, setInput] = useState(defaultInput)

  const handleChange = (e) => {
    let { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      let result = await updateProduct(id, input);
      setInput(input)
      setProduct(result)
      props.setProductToggle(prevState => !prevState)
      history.push(`/products/${product.id}`)
  }


  return (
    <div>
      <h3>Edit Item</h3>
      <form onChange={handleChange} onSubmit={handleSubmit}>
        <label>Product name:</label>
        <input name="name" type="text" defaultValue={product.name}/>
        <label>Price:</label>
        <input name="price" type="integer" defaultValue={product.price} />
        <label>Product Image Url:</label>
        <input name="img_url" type="text" defaultValue={product.img_url} />
        <label>Product description:</label>
        <input name="description" type="text" defaultValue={product.description} />
        <button type="submit">Submit Changes</button>
      </form>
    </div>
  )
}
