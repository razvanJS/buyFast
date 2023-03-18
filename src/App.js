

import { Home } from './routes/home/home.componet';
import { Navigation } from './routes/navigation/navigation.componet';
import { Routes, Route } from 'react-router-dom';





const Shop = () => {
  return <h1>Shop page</h1>


}
const App = () => {
  //  /shop
  // /contact
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />



      </Route>
    </Routes>
  )
}



export default App;
