import React, { useState } from 'react'

const AddListingForm = ({ onAddListing }) => {
  const [formData, setFormData] = useState({
    description: '',
    image: '',
    location: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

   const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:6001/listings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(newListing => {
        onAddListing(newListing);
        setFormData({ description: "", image: "", location: "" });
      });
  };

  return (
    <form id='listing-form' onSubmit={handleSubmit}>
      <label>Add a listing: </label>
      <input type='text' placeholder='description' name='description' value={formData.description} onChange={handleChange}></input>
      <input type='text' placeholder='image' name='image' value={formData.image} onChange={handleChange}></input>
      <input type='text' placeholder='location' name='location' value={formData.location} onChange={handleChange}></input>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default AddListingForm
