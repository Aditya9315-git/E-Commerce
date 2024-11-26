import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  
  let[ProductName,setproductName]=useState('')
  let[ProductDescription,setProductDescription]=useState('')
  let[ProductTitle,setProductTitle]=useState('')
  let[ProductPrice,setProductPrice]=useState('')
  let[ProductImage,setProductImage]=useState(null)

  let navigate=useNavigate()


  async function handlesubmit(e){
    e.preventDefault()
    let data= new FormData()
    data.append('ProductName',ProductName)
    data.append('ProductDescription',ProductDescription)
    data.append('ProductTitle',ProductTitle)
    data.append('ProductPrice',ProductPrice)
    data.append('ProductImage',ProductImage)

    await axios.post('http://localhost:3000/api/ProductSave', data ,{
      headers:{
        'Content-Type':'multiPart/Form-Data'
      }
      
      
    })
    navigate('/AdminDashboard')

    alert('Datasubmit')


  }




  return (
    <>
      <div className='h-[100vh] p-10 bg-gray-700'>
        <h1 className='p-3 text-2xl font-semibold text-white'>Add Product In your Cart..</h1>
        <div className='h-[80vh] w-[50vw] border bg-gray-200'>
          <form onSubmit={handlesubmit} className='flex flex-col h-full w-full p-8 gap-10' >

            <input type="text" name='ProductName' value={ProductName} placeholder='Product Name' className=' p-3 text-xl text-gray-700 border border-gray-400 rounded-md text-start'  onChange={(e)=>setproductName(e.target.value)}/>

            <input type="text" name='ProductDescription' value={ProductDescription} placeholder='ProductDescription ' className=' p-3 text-xl text-gray-700 border border-gray-400 rounded-md text-start'  onChange={(e)=> setProductDescription(e.target.value)} />

            <input type="text" name='ProductTitle' value={ProductTitle} placeholder='ProductTitle' className=' p-3 text-xl text-gray-700 border border-gray-400 rounded-md text-start' onChange={(e)=> setProductTitle(e.target.value)} />

            <input type="number" name='ProductPrice' value={ProductPrice} placeholder='Price' className=' p-3 text-xl text-gray-700 border border-gray-400 rounded-md text-start' onChange={(e)=> setProductPrice(e.target.value)} />

            <input type="file" name='ProductImage'  placeholder='Images' className=' p-3 text-xl text-gray-700 border border-gray-400 rounded-md text-start'  onChange={(e)=> setProductImage(e.target.files[0])} />
            <button type='submit' className='bg-green-500 px-10 py-3 w-[270px] text-xl rounded-md text-white'> Add Product</button>


          </form>
        </div>
      </div>
    </>
  )
}

export default AddProduct