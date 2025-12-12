import { createBrowserRouter } from 'react-router-dom';

import { LoginPage } from '@/pages/LoginPage';
import { SignUpPage } from '@/pages/SignUpPage';
// import { MyPage } from '@/pages/MyPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },

  // {
  //   path: '/mypage',
  //   element: <MyPage />,
  // },
]);

export { router };
