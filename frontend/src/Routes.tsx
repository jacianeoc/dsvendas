import { Dashboard } from "pages/Dashboard";
import { Home } from "pages/Home";//essa definição pages/home só é possivel porque no tsconfig, o ./scr está definido por padrao
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        //o route define o caminho da rota da aplicação
        <Route path="/" exact>
          <Home></Home>
        </Route>

        <Route path="/dashboard" >
          <Dashboard></Dashboard>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}