import { useState, useEffect } from "react";

export function useFetch(url, datos, action) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (action === "POST") {
      fetch(url, { method: action, body: JSON.stringify(datos), headers: { 'Content-Type': 'application/json' } })
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("Cancelled request");
          } else {
            setError(error);
          }
        })
        .finally(() => setLoading(false));
    } else if (action === "DELETE") {
      fetch(url + datos, { method: action, headers: { 'Content-Type': 'application/json' } })
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("Cancelled request");
          } else {
            setError(error);
          }
        })
        .finally(() => setLoading(false));
    } else {
      fetch(url)
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => {
          if (error.name === "AbortError") {
            console.log("Cancelled request");
          } else {
            setError(error);
          }
        })
        .finally(() => setLoading(false));
    }
  }, []);

  return { data, loading, error };
}