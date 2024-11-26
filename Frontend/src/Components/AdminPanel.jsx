import React, { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

const AdminPanel = () => {
    const [product, setproduct] = useState([])

    const productdata = async () => {
        let response = await axios.get('http://localhost:3000/api/Productget')
        setproduct(response.data.Product)

    }

    const productdelete = async (id) => {
        let response = await axios.delete(`http://localhost:3000/api/ProductDelete/${id}`)
    }

    useEffect(() => {
        productdata()
    }, [product])


    // let Navigate= useNavigate

    return (
        <>
            <div className='flex justify-between items-center p-4 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300'>
                <h1 className='text-3xl font-bold text-white bg-green-500 p-6 rounded-lg shadow-md'>
                    Admin Dashboard
                </h1>
                <div>
                    <Link to='/AddProduct' className='bg-yellow-600 px-6 py-3 text-lg text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300'>
                        Add Product
                    </Link>
                </div>
            </div>
            
            <div className='border-[1px] border-red-900 w-[100vw]'>

                <table className='w-full bg-red-100'>
                    <thead className='border text-xl text-gray-700'>
                        <tr>
                            <th>ProductName</th>
                            <th>ProductDescription</th>
                            <th>ProductTitle</th>
                            <th>ProductPrice</th>
                            <th>ProductImage</th>
                        </tr>
                    </thead>
                    {product.map((item, id) => (
                        <tbody className='border bg-white'>
                            <tr className='text-xl text-center border'>
                                <td>{item.ProductName}</td>
                                <td>{item.ProductDescription}</td>
                                <td>{item.ProductTitle}</td>
                                <td>{item.ProductPrice}</td>
                                <td>{item.ProductImage}</td>
                                <td>  <button
                                    onClick={() => productdelete(item._id)} className='border bg-green-500 text-white text-[18px] px-6 mt-2 mb-2 text-center p-2 rounded-lg m-2'>Delete</button></td>
                                <td><Link to='/EditProduct' className='border bg-red-500 text-white text-[18px] px-6 mt-2 mb-2 text-center p-2 rounded-lg m-2'>Edit</Link></td>

                            </tr>
                        </tbody>
                    ))}
                </table>
            </div>

        </>
    )
}

export default AdminPanel