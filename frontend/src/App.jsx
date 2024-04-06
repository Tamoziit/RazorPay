import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PaymentSuccess from "./pages/PaymentSuccess";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
      </Routes>
    </Router>
  )
}

export default App