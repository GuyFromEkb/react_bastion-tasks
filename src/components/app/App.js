import { Routes, Route } from 'react-router-dom'

import './App.scss';
import Header from '../header/Header';
import Product from '../pages/product/Product';
import Type from '../pages/type/Type';
import NoteFound from '../pages/404/NoteFound';

function App() {
  return (

    <>
      <Header />

      <main>

        <Routes>
          <Route path='/' element={<Type />} />
          <Route path='/type' element={<Product />} />
          <Route path='*' element={<NoteFound />} />
        </Routes>

      </main>

    </>
  );
}

export default App;
