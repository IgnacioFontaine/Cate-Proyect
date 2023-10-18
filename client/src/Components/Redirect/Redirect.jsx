/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const Redirect = () => {
  const { user } = useAuth0();

  const loginData = user?.loginData;

  useEffect(() => {
    if (loginData) {
      localStorage.setItem("loginData", JSON.stringify(loginData));
      
    }
  }, [loginData]);

  return (
    <>
      <div></div>
    </>
  );
};

export default Redirect;
