import { useEffect, useState } from "react";
import { sortPlacesByDistance } from "../loc.js";
import { putAvailablePlaces } from "../service/http.js";

export function useFetching(fetchFn) {
  const [errorFetch, setErrorFetch] = useState();
  const [fetchData, setFetch] = useState([]);
  useEffect(() => {
    try {
      async function fetchUserPlace() {
        const userPlace = await fetchFn();
        setFetch(userPlace);
        console.log(userPlace);
      }

      fetchUserPlace();
    } catch (error) {
      setErrorFetch({ message: error.message || "Fail Fetch" });
    }
  }, [fetchFn]);

  return {
    fetchData: fetchData,
    errorFetch,
    setFetchData: setFetch,
  };
}

export function useAvailablePlaces(fetchFn) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorFetch, setErrorFetch] = useState();

  useEffect(() => {
    async function fetchSortedPlaces() {
      const availablePlace = await fetchFn();

      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
          const sortPlaces = sortPlacesByDistance(
            availablePlace,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortPlaces);
          setIsLoading(false);
          resolve(sortPlaces);
        });
      }).catch((error) => {
        setErrorFetch({ message: error.message || "Fail Fetch" });
        reject(error);
      });
    }

    fetchSortedPlaces();
  }, [fetchFn]);

  return {
    availablePlaces,
    isLoading,
    errorFetch,
  };
}

export function usePutAvailablePlaces(setFetchData, setErrorUpdating) {
    async function putPlace(items) {
        try {
            await putAvailablePlaces(items);

        } catch(error) {
            setFetchData(items);
            setErrorUpdating({ message: error.message || "Fail Updating" });
        }
    }

    return {
        putPlace
    }
}