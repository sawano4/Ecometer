import { BrowserRouter, Routes, Route , Navigate } from "react-router-dom";
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
import "./App.css";



function App() {
  const isConnected = true; // Gérer l'état de connexion ici
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/acceuil"
            element={
              isConnected ? <Acceuil /> : <Navigate to="/login" />
            }
          />
          <Route path="/calculateur" element={<Calculateur />} />
          <Route path="/rapport" element={<Rapport />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
} 

export default App;
