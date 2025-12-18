import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes';

import '@/globals.css';

function App() {
  return <RouterProvider router={router} />;
}

export default App;
