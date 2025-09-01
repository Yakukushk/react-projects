import UsersContext from './components/user.context';
import UserFinder from './components/UserFinder';
import Users from './components/Users';
const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];
function App() {
const contextValue = {
  users: DUMMY_USERS
}
  return (
    <UsersContext.Provider value={contextValue}>
      <UserFinder />
    </UsersContext.Provider>
  );
}

export default App;
