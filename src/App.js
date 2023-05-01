

import { Home } from './routes/home/home.componet';
import { Navigation } from './routes/navigation/navigation.componet';
import { Routes, Route } from 'react-router-dom';
import { Authentification } from './routes/Authentification/authentification.component';





const Shop = () => {
  return <h2>Shop Page</h2>
}

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentification />} />


      </Route>
    </Routes>
  )
}



export default App;
