import { useContext, useEffect } from "react";
import { Can } from "../components/Can";
import { AuthContext } from "../contexts/AuthContext";
import { useCan } from "../hooks/useCan";
import { setupAPIClient } from "../services/api";
import { api } from "../services/apiClient";
import { withSSRAuth } from "../utils/withSSRAuth";

export default function Dashboard() {
  const { user, signOut } = useContext(AuthContext);

  const userCanSeeMetrics = useCan({
    permissions: ['metrics.list']
  })

  useEffect(() => {
    api.get('/me')
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <p>Dashboard: {user?.email}</p>

      {/* Primeira forma  */}
      {userCanSeeMetrics && (
        <div> Metricas  hook </div>
      )}

      {/* Primeira forma  */}
      <Can permissions={['metrics.list']}>
        <div> Metricas Component </div>
      </Can>

      <button onClick={signOut}>Sair</button>

    </>
  )
}

export const getServerSideProps = withSSRAuth(async (ctx) => {
  const apiClient = setupAPIClient(ctx);

  const response = await apiClient.get('/me');
  console.log(response);

  return {
    props: {

    }
  }
});