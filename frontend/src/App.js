import React from 'react'
// import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Landingpage from './screens/landingpage/landingpage'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Myexercise from './screens/myExercise/Myexercise'
import Loginscreen from './screens/loginscreen/Loginscreen'
import Registerscreen from './screens/registerscreen/Registerscreen'
import CreateNote from './screens/createnote/CreateNote'
import SingleNote from './screens/createnote/SingleExercise'
import ProfileScreen from './screens/profilescreen/ProfileScreen'

const App = () => {
  return (
   <>
  <BrowserRouter>
  <Header/>
  <Routes>
  
   
   <Route path='/' element={<Landingpage/>} exact/>
   <Route path='/login' element={<Loginscreen/>} />
   <Route path='/profile' element={<ProfileScreen/>} />
   <Route path='/register' element={<Registerscreen/>} />
   <Route path='/create' element={<CreateNote/>} />
   <Route path='/exercise/:id' element={<SingleNote/>} />
   <Route path='/myexercise' element={<Myexercise/>}/>
  

  </Routes>
  
  </BrowserRouter>
   </>
  )
}

export default App