import { useCallback, useEffect, useRef, useState } from "react";

import Places from "./components/Places.jsx";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import Error from "./components/Error.jsx";
import { fetchAvailablePlaces, fetchUsersPlaces } from "./service/http.js";
import {
  useAvailablePlaces,
  useFetching,
  usePutAvailablePlaces,
} from "./hooks/useFetch.js";

function App() {
  const modal = useRef();
  const selectedPlace = useRef();
  const [openModal, setOpenModal] = useState(false);
  const [errorUpdating, setErrorUpdating] = useState();

  const { fetchData: pickedPlaces, setFetchData } =
    useFetching(fetchUsersPlaces);
  const { availablePlaces, isLoading, errorFetch } =
    useAvailablePlaces(fetchAvailablePlaces);

  const { 
    putPlace } = usePutAvailablePlaces(setFetchData, setErrorUpdating);

  //#region
  // useEffect(() => {
  // //   //#region
  // //   // async function fetchPlaces() {
  // //   //   await fetch("http://localhost:3000/places")
  // //   //     .then((response) => {
  // //   //       setIsLoading(true);
  // //   //       if (!response.ok) {
  // //   //         throw new Error("Failed fetching data");
  // //   //       }
  // //   //       return response.json();
  // //   //     })
  // //   //     .then((resData) => {
  // //   //       setAvailablePlaces(resData.places);
  // //   //       setIsLoading(false);
  // //   //     })
  // //   //     .catch((error) => setError({message: error.message || 'Fail Fetch'}))
  // //   //     .finally(() => setIsLoading(false));
  // //   // }
  // //   //#endregion
  //   async function fetchPlaces() {
  //       const availablePlace = await fetchAvailablePlaces();

  //       // const {fetchData: availablePlace, setFetchData: setAvailablePlaces} = useFetching(fetchAvailablePlaces);

  //       return new Promise((resolve, reject) => {
  //         navigator.geolocation.getCurrentPosition((position) => {
  //           const sortPlaces = sortPlacesByDistance(
  //             availablePlace,
  //             position.coords.latitude,
  //             position.coords.longitude
  //           );
  //           setAvailablePlaces(sortPlaces);
  //           setIsLoading(false);
  //           resolve(sortPlaces);
  //         });
  //       }).catch((error) => {
  //         setError({ message: error.message || "Fail Fetch" });
  //         reject(error);
  //       });
  //   }
  //   fetchPlaces();
  // }, []);
  //#endregion

  if (errorFetch) {
    return <Error title="Error" message={error.message} />;
  }

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
    setFetchData((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = availablePlaces.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    //#region
    // const storagePlaces =
    //   JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    // if (storagePlaces.indexOf(id === -1)) {
    //   localStorage.setItem(
    //     "selectedPlaces",
    //     JSON.stringify([id, ...storagePlaces])
    //   );
    // }
    //#endregion
    // try {
    //   await putAvailablePlaces([selectedPlace, ...pickedPlaces]);
    // } catch (error) {
    //   setFetchData((prev) => [...prev]);
    //   setErrorUpdating({ message: error.message || "Fail Updating" });
    // }
    await putPlace(
      [selectedPlace, ...pickedPlaces]
    );
  }

  const handleRemovePlace = useCallback(
    async function handleRemovePlace() {
      setFetchData((prevPickedPlaces) =>
        prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
      );

      // modal.current.close();
      setOpenModal(false);


      //#region 
      // const storagePlaces =
      //   JSON.parse(localStorage.getItem("selectedPlaces")) || [];
      // localStorage.setItem(
      //   "selectedPlaces",
      //   JSON.stringify(storagePlaces.filter((id) => id !== selectedPlace.current))
      // );

      // try {
      //   await putAvailablePlaces(
      //     pickedPlaces.filter((place) => place.id !== selectedPlace.current)
      //   );
      // } catch (error) {
      //   setFetchData(pickedPlaces);
      //   setErrorUpdating({ message: error.message || "Fail Updating" });
      // }
      //#endregion

      await putPlace(
        pickedPlaces.filter((place) => place.id !== selectedPlace.current)
      );
    },
    [pickedPlaces, setFetchData]
  );

  return (
    <>
      <Modal open={errorUpdating} onClose={() => setErrorUpdating(null)}>
        {errorUpdating && (
          <Error
            title={"An error occurred!"}
            message={errorUpdating.message}
            onConfirm={() => setErrorUpdating(null)}
          />
        )}
      </Modal>
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
