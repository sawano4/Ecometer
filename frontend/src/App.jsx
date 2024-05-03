import { Routes, Route, Navigate } from "react-router-dom";
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
  const  user = localStorage.getItem("token"); // Gérer l'état de connexion ici
  return (
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {user && <Route path="/acceuil" exact element={<Acceuil />} />}
          {user && <Route path="/calculateur" element={<Calculateur />} />}
          {user && <Route path="/rapport" element={<Rapport />} />}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </QueryClientProvider>
  );
}

export default App;
