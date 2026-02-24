import useSWR from "swr";

async function fetchAPI(key) {
  const response = await fetch(key);
  const responseBody = await response.json();
  return responseBody;
}

export default function StatusPage() {
  return (
    <>
      <h1>Status</h1>
      <UpdatedAt />
      <DatabaseStatus />
    </>
  );
}

function UpdatedAt() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let updatedAtText = "Loading...";

  if (!isLoading && data) {
    updatedAtText = new Date(data.updated_at).toLocaleString("pt-BR");
  }

  return <div>Last update: {updatedAtText}</div>;
}

function DatabaseStatus() {
  const { isLoading, data } = useSWR("/api/v1/status", fetchAPI, {
    refreshInterval: 2000,
  });

  let databaseVersionText = "Loading...";
  let maxConnText = "Loading...";
  let openConnText = "Loading...";
  let databaseStatusInfo;

  if (!isLoading && data) {
    databaseVersionText = data.dependencies.database.version;
    maxConnText = data.dependencies.database.max_connections;
    openConnText = data.dependencies.database.opened_connections;

    databaseStatusInfo = (
      <>
        <div>Version: {databaseVersionText}</div>
        <div>Opened Connections: {openConnText}</div>
        <div>Maximum Connections: {maxConnText}</div>
      </>
    );
  }

  return (
    <>
      <h2>Database Info</h2>
      <div>{databaseStatusInfo}</div>
    </>
  );
}
