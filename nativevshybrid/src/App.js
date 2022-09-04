import "./App.scss";
import { Inicio } from "./components/inicio/inicio";
import { insertNewTop, getUser } from "./services/firebaseDB";

// const newTop={
//   nombre:'Pedro',
//   top:'1',
//   points:10,
//   pointsRef:120,
// };
// insertNewTop(newTop);
//getUser();
function App() {
  return <Inicio></Inicio>;
}

export default App;
