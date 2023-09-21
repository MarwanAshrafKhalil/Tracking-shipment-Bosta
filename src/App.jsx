import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Homepage";
import BriefUpdate from "./BriefUpdate";
import i18next from "i18next";
import { useEffect, useState } from "react";

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
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />}></Route>

          <Route path="/Brief/:trackID" element={<BriefUpdate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
