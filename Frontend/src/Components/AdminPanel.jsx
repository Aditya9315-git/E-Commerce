import React, { useEffect, useState } from 'react'
import axios from 'axios'

const AdminPanel = () => {
    const [product,setproduct]=useState([])

    const productdata= async()=>{
        let response= await axios.get('http://localhost:3000/api/Productget')
        setproduct(response.data.Product)
        
    }

    const productdelete= async(id)=>{
        let response=await axios.delete(`http://localhost:3000/api/ProductDelete/${id}`)
    }

    useEffect(()=>{
        productdata()
    },[product])
    

  return (
    <>
    <h1 className='text-center font-semibold text-2xl p-8 bg-black text-white'>Admin Dashboard</h1>
    <div className='border-[1px] border-red-900 w-[100vw]'>
        
        <table className='w-full bg-red-100'>
            <thead className='border text-2xl text-gray-700'>
                <tr>
                <th>ProductName</th>
                <th>ProductDescription</th>
                <th>ProductTitle</th>
                <th>ProductPrice</th>
                <th>ProductImage</th>
                </tr>
            </thead>
            {product.map((item,id)=>(
            <tbody className='border bg-white'>
                <tr className='text-xl text-center border'>
                    <td>{item.ProductName}</td>
                    <td>{item.ProductDescription}</td>
                    <td>{item.ProductTitle}</td>
                    <td>{item.ProductPrice}</td>
                    <td>{item.ProductImage}</td>
                <button 
                onClick={()=>productdelete(item._id)} className='border bg-green-500 text-white text-sm px-6 mt-2 mb-2 text-center p-2 rounded-lg m-2'>Delete</button>
                <button className='border bg-green-500 text-white text-sm px-6 mt-2 mb-2 text-center p-2 rounded-lg'>Edit</button>

                </tr>
            </tbody>


            ))}
        </table>
    </div>

    </>
  )
}

export default AdminPanel