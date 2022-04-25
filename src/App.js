import { useQuery } from "react-query";

function App() {
  const { isLoading, error, data } = useQuery("people", () =>
    fetch("https://swapi.dev/api/people/2/").then((res) => res.json())
  );
  console.log(data);
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  return <>{data.name}</>;
}

export default App;
