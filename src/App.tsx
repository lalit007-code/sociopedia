import { Route, Routes } from "react-router-dom";
import "./globals.css";
import SignInForm from "./_auth/forms/SignInForm";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route path="/sign-in" element={<SignInForm />} />

        {/* private Routes */}
        <Route index element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
