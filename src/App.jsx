import { useState } from 'react'
import { Route, Routes } from 'react-router'
import SideBar from './Components/SideBar/SideBar'
import Header from './Components/Header/Header'
import AddContact from './Components/AddContact/AddContact'
import ViewContact from './Components/ViewContact/ViewContact'
import EditContact from './Components/EditContact/EditContact'
import OtherContact from './Components/Page/OtherContact'
import Frequent from './Components/Page/Frequent'
import Fix from './Components/Page/Fix'
import LoginForm from './Components/LoginForm/LoginForm'
import ViewHOC from './Components/ViewHOC/ViewHOC'

const ViewData = ViewHOC(ViewContact);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <SideBar />
        <Routes>
          <Route path='/' element={<ViewData/>} />
          <Route path='/form' element={<AddContact />} />
          <Route path='/edit' element={<EditContact />} />
          <Route path='/page' element={<OtherContact />} />
          <Route path='/frequent' element={<Frequent />} />
          <Route path='/fix' element={<Fix />} />
          <Route path='/login' element={<LoginForm />} />
        </Routes>
    </>
  )
}

export default App
