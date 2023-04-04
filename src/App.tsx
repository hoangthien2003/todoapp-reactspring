import { useEffect } from "react";
import { useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import type { RootState } from "./redux/store";

function App() {
  const isAuth = useSelector((state: RootState) => state.checkAuth.value);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });
  return <div></div>;
}

export default App;
