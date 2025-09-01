import { useCallback, useEffect, useRef, useState } from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import { sortPlacesByDistance } from "./loc.js";
import Error from "./components/Error.jsx";
import {
  fetchAvailablePlaces,
  putAvailablePlaces,
} from "./service/http.js";

function App() {
  const modal = useRef();
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState([]);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    // async function fetchPlaces() {
    //   await fetch("http://localhost:3000/places")
    //     .then((response) => {
    //       setIsLoading(true);
    //       if (!response.ok) {
    //         throw new Error("Failed fetching data");
    //       }
    //       return response.json();
    //     })
    //     .then((resData) => {
    //       setAvailablePlaces(resData.places);
    //       setIsLoading(false);
    //     })
    //     .catch((error) => setError({message: error.message || 'Fail Fetch'}))
    //     .finally(() => setIsLoading(false));
    // }
    async function fetchPlaces() {
      try {
        const availablePlace = await fetchAvailablePlaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const sortPlaces = sortPlacesByDistance(
            availablePlace,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailablePlaces(sortPlaces);
          setIsLoading(false);
        });
      } catch (error) {
        setError({ message: error.message || "Fail Fetch" });
      }
    }
    fetchPlaces();
  }, []);

  if (error) {
    return <Error title="Error" message={error.message} />;
  }

  useEffect(() => {
    const storagePlaces =
      JSON.parse(localStorage.getItem("selectedPlace")) || [];
    const sortedPlaces = storagePlaces.map((placeId) => {
      return availablePlaces.find(
        (availablePlace) => availablePlace.id === placeId
      );
    });

    setPickedPlaces(sortedPlaces);
  }, []);

  function handleStartRemovePlace(id) {
    // modal.current.open();
    setOpenModal(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    // modal.current.close();
    setOpenModal(false);
  }

  async function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = availablePlaces.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    // const storagePlaces =
    //   JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    // if (storagePlaces.indexOf(id === -1)) {
    //   localStorage.setItem(
    //     "selectedPlaces",
    //     JSON.stringify([id, ...storagePlaces])
    //   );
    // }
    try {
      await putAvailablePlaces([selectedPlace, ...pickedPlaces]);
    } catch (error) {
      setError({ message: error.message || "Fail Fetch" });
    }
  }

  const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    // modal.current.close();
    setOpenModal(false);

    const storagePlaces =
      JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    localStorage.setItem(
      "selectedPlaces",
      JSON.stringify(storagePlaces.filter((id) => id !== selectedPlace.current))
    );
  }, []);

  return (
    <>
      <Modal ref={modal} open={openModal} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
          isLoading={isLoading}
          loadingText="Fetching place data..."
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          isLoading={isLoading}
          loadingText="Fetching place data..."
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
