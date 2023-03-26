

import { Home } from './routes/home/home.componet';
import { Navigation } from './routes/navigation/navigation.componet';
import { Routes, Route } from 'react-router-dom';
import { SignIn } from './routes/sing-in/sign-in.component';




const Shop = () => {
  return <h2>Shop Page</h2>
}

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />


      </Route>
    </Routes>
  )
}



export default App;
