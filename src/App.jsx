import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import ContactUs from './pages/ContactUs'
import Classes from './pages/Classes'
import  { Routes, Route} from 'react-router-dom'

import Trainer from './pages/Trainer'
import Schedule from './pages/Schedule'
import Bodybuilding from './pages/Bodybuilding'
import Martialarts from './pages/Martialarts'
import Crossfit from './pages/Crossfit'
import Karate from './pages/Karate'
import Yoga from './pages/Yoga'
import Fitness from './pages/Fitness'
import Login from './pages/Login'
import Register from './pages/Register'
import Payment from './pages/Payment'
import Plan2 from './pages/Plan2'
import Plan3 from './pages/Plan3'
import Admin from './pages/Admin'
import UsersDetails from './pages2/UsersDetails'
import Classesdetails from './pages2/Classesdetails'
import Request from './pages2/Request'
import Information from './pages2/Information'
import Subscribers from './pages2/Subscribers'
import ClassesForm from './pages2/ClassesForm'
import Trainers from './pages2/Trainers'
import Workouts from './pages2/Workouts'
import WorkoutDetails from './pages2/WorkoutDetails'
import TrainerDetails from './pages2/TrainerDetails'
import Singlepage from './pages2/Singlepage'
import SinglePageDetails from './pages2/SinglePageDetails'
import PackagesForm from './pages2/PackagesForm'
import PackageDetails from './pages2/PackageDetails'
import AdminLogin from './pages/Adminlogin'
import Edit_classes from './pages2/Edit_classes'
import Edit_package from './pages2/Edit_package'
import Edit_trainer from './pages2/Edit_trainer'
import Edit_workout from './pages2/Edit_workout'
import Edit_singleclass from './pages2/Edit_singleclass'
import Informations from './pages/Informations'

function App() {
 

  return (
    <>
      <div className=' App'>
       
     
        <Routes>
        <Route path='/'  element={<Home />}/>
          <Route path='/about'  element={<About />}/>
          <Route path='/contact'  element={<ContactUs/>}/>
          <Route path='/classes'  element={<Classes />}/>
          <Route path='/martialarts'  element={<Martialarts />}/>
          <Route path='/crossfit'  element={<Crossfit />}/>
          <Route path='/karate'  element={<Karate />}/>
          <Route path='/yoga'  element={<Yoga />}/>
          <Route path='/bodybuilding'  element={<Bodybuilding />}/>
          <Route path='/fitness'  element={<Fitness />}/>
          <Route path='/schedule'  element={<Schedule />}/>
          <Route path='/trainer'  element={<Trainer />}/>
          <Route path='/login'  element={<Login />}/>
          <Route path='/register'  element={<Register />}/>
          <Route path='/payment'  element={<Payment />}/>
          <Route path='/plan2'  element={<Plan2 />}/>
          <Route path='/plan3'  element={<Plan3 />}/>
          <Route path='/admin'  element={<Admin />}/>
          <Route path='/usersdetails'  element={<UsersDetails />}/>
          <Route path='/classesdetails'  element={<Classesdetails />}/>
          <Route path='/request'  element={<Request />}/>
          <Route path='/information'  element={<Information />}/>
          <Route path='/subscribers'  element={<Subscribers />}/>
          <Route path='/classesform'  element={<ClassesForm />}/>
          <Route path='/trainersform'  element={<Trainers />}/>
          <Route path='/workouts'  element={<Workouts />}/>
          <Route path='/workoutdetails'  element={<WorkoutDetails />}/>
          <Route path='/trainerDetails'  element={<TrainerDetails />}/>
          <Route path='/singlepage'  element={<Singlepage />}/>
          <Route path='/singlepagedetails'  element={<SinglePageDetails />}/>
          <Route path='/packagesform'  element={<PackagesForm />}/>
          <Route path='/packagedetails'  element={<PackageDetails />}/>
          <Route path='/adminlogin'  element={<AdminLogin />}/>
          <Route path='/edit_class'  element={<Edit_classes />}/>
          <Route path='/edit_package'  element={<Edit_package />}/>
          <Route path='/edit_trainer'  element={<Edit_trainer />}/>
          <Route path='/edit_workout'  element={<Edit_workout />}/>
          <Route path='/edit_singleclass'  element={<Edit_singleclass />}/>
          <Route path='/informations'  element={<Informations />}/>
          {/* <Route path='/informations'  element={<Informations />}/> */}
         

          
 
       
       

        </Routes>
           
       </div>
      
      
    </>
    
  )
}

export default App
