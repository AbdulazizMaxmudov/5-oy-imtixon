import { useAuth } from "./hooks/useAuth";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { Private } from "./Private";
import { Public } from "./Public";


function App() {
    const {token} = useAuth()
    if (token) {
      return (
     <Private/>
      );
    }else {
      return <Public/>
    }
    
}

export default App;
