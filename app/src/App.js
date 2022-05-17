import { IoIosAddCircleOutline } from "react-icons/io";
import { Table } from "./components/table";
import { Navbar } from "./components/Navbar";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ClientNew } from "./pages/clients/ClientNew";
import { ClientDetails } from "./pages/clients/ClientDetails";
import { ClientList } from "./pages/clients/ClientList";
import { Login } from "./pages/auth/Login";
import { useEffect } from "react";
import { TasksNew } from "./pages/tasks/TaskNew";

function App() {
  useEffect(()=>{
    if(window.location.pathname !== '/login'){
      if(localStorage.getItem('expires_in') < new Date().getTime() || JSON.parse(localStorage.getItem('token')) === ''){
        window.location = '/login';
      }
    }else{
      if(localStorage.getItem('expires_in') > new Date().getTime() && JSON.parse(localStorage.getItem('token')) !== ''){
        window.location = '/clients';
      }
    }
    console.log(localStorage.getItem('expires_in') < new Date().getTime());
  }, []);
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/" element={[<Navbar/>, <Table />]}>
            </Route>
            <Route path="clients">
              <Route path=":clientId" element={[<Navbar/>, <ClientDetails />]} />
              <Route path="new" element={[<Navbar/>, <ClientNew />]} />
              <Route path="edit" element={[<Navbar/>, <ClientNew />]} /> 
              <Route path=":clientId/task" element={[<Navbar/>, <TasksNew />]} /> 
              <Route index element={[<Navbar/>, <ClientList />]} />
            </Route>
          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
