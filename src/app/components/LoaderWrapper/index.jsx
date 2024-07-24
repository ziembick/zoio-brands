// components/LoaderWrapper.jsx
import { useState, useEffect } from "react";
import Loader from "../loader"; // Certifique-se de que o Loader está no mesmo diretório

const LoaderWrapper = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 3000); // Ajuste o tempo conforme necessário

    return () => clearTimeout(timer);
  }, []);

  return showLoader ? <Loader /> : null;
};

export default LoaderWrapper;
