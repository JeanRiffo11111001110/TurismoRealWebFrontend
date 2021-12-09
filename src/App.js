import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import Index from './components/Index';
import Reservation from './components/Reservation';
import ReservarDepartamento from './components/ReservarDepartamento';
import {Container} from '@mui/material'
import ScopedCssBaseLine from '@mui/material/ScopedCssBaseline';


export default function App() {
  return (
      <BrowserRouter>
      <Navbar/>
    <ScopedCssBaseLine>
      <Container disableGutters maxWidth={false}>
      <Index/>
        <Routes>
            <Route path='/reservarDepartamento' element={<ReservarDepartamento/>}/>
            <Route path="/signUp" element={<SignUpForm/>}/>
            <Route path="/signIn" element={<SignInForm/>}/>
            <Route path='/reservation' element={<Reservation/>}/>
        </Routes>
      </Container>
    </ScopedCssBaseLine>
      </BrowserRouter>
  )
}

