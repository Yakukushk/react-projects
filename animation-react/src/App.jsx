import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import WelcomePage from './pages/Welcome.jsx';
import ChallengesPage from './pages/Challenges.jsx';
import MotionBasics from './components/MotionBasics.jsx';

const router = createBrowserRouter([
  { path: '/', element: <WelcomePage /> },
  { path: '/challenges', element: <ChallengesPage /> },
  { path: '/motion', element: <MotionBasics/>}
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
