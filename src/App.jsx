import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Homepage";
import i18next from "i18next";
import { useEffect, useState } from "react";
import BriefPage from "./BreifPage";
import NavbarUpdate from "./Components/NavbarUpdate";

function App() {
  const [currentLanguage, setCurrentLanguage] = useState(i18next.language);

  useEffect(() => {
    const handleLanguageChange = () => {
      setCurrentLanguage(i18next.language);
    };

    i18next.on("languageChanged", handleLanguageChange);

    return () => {
      i18next.off("languageChanged", handleLanguageChange);
    };
  }, []);
  return (
    <div dir={currentLanguage == "ar" ? "rtl" : "ltr"}>
      <BrowserRouter>
        <NavbarUpdate />

        <Routes>
          <Route path="/" element={<Homepage />}></Route>

          <Route path="/Brief/:trackID" element={<BriefPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
