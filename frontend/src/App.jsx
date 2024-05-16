import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
import Home from "./landingPage/Home";
import Login from "./logIn/Login";
import Signup from "./signUp/Signup";
import Calculateur from "./Auth/Pages/Calculateur.jsx";
import Acceuil from "./Auth/Pages/Accueil.jsx";
import Rapport from "./Auth/Pages/Rapport.jsx";
import Forgetpassword from "./logIn/Forgetpassword.jsx";
import Verf from "./logIn/Verf.jsx";



import "./App.css";
import Utilisateurs from "./admin/pages/Utilisateurs.jsx";

function App() {
  const isConnected = localStorage.getItem('isConnected'); // Gérer l'état de connexion ici
  const verifiedEmail = localStorage.getItem('verifiedEmail'); // Gérer l'état de vérification de l'email ici
  return (
    <>
      <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/acceuil"
            element={isConnected ? <Acceuil /> : <Navigate to="/login" />}
          />
          <Route path="/calculateur" element={<Calculateur />} />
          <Route path="/rapport" element={<Rapport />} />
          <Route path="/admin" element={<Utilisateurs/>}/>
          <Route path="/forgetpassword" element={<Forgetpassword />} />
          <Route path="/verf" element={ <Verf />}/>
        </Routes>
      </QueryClientProvider>
      </BrowserRouter>
    </>
  );
}

export default App;