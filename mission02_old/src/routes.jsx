import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Event from './pages/Event';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Community from './pages/board/notice/List';
import Collaboration from './pages/board/gallery/List';

// 구버전 처럼 사용할 사용자를 위한 최신 방법
// 배열 → JSX 
const router = createBrowserRouter(
  // 유틸리티 함수
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="event" element={<Event />} />
      <Route path="shop" element={<Shop />} />
      <Route path="login" element={<Login />} />
      <Route path="cart" element={<Cart />} />
      <Route path="community" element={<Community />} />
      <Route path="collaboration" element={<Collaboration />} />
    </Route>
  )
)

export default router;