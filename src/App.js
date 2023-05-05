

import { Home } from './routes/home/home.componet';
import { Navigation } from './routes/navigation/navigation.componet';
import { Routes, Route } from 'react-router-dom';
import { Authentification } from './routes/Authentification/authentification.component';
import { Shop } from './routes/shop/shop-component';
import { Checkout } from './routes/checkout/checkout.component';





const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentification />} />
        <Route path='checkout' element={<Checkout />} />


      </Route>
    </Routes>
  )
}



export default App;
