import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminPanel from './Components/AdminPanel'
import EditProduct from './Components/EditProduct'
import { Adminlogin } from './Components/Adminlogin'
import AddProduct from './Components/AddProduct'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Adminlogin />}></Route>
        <Route path='/AdminDashboard' element={<AdminPanel />}></Route>
        <Route path='/EditProduct' element={<EditProduct />}></Route>
        <Route path='/AddProduct' element={<AddProduct />}></Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App