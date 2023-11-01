import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Layout from "./layout/layout";
import Gallery from "./components/Gallery";
import ImageUpload from "./components/ImageUpload";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Gallery />} />
          <Route path="/upload" element={<ImageUpload />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
