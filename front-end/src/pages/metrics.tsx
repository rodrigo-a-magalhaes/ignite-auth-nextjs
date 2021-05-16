import jwtDecode from "jwt-decode";
import { useContext, useEffect } from "react";
import { Can } from "../components/Can";
import { AuthContext } from "../contexts/AuthContext";
import { useCan } from "../hooks/useCan";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Metrics() {

  return (
    <>
      <p>Metrics</p>
    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {

  const apiClient = setupAPIClient(ctx);
  const response = await apiClient.get('/me');



  return {
    props: {}
  }
});