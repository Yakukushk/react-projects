import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

import Header from "../Header.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteEvent, fetchEvent, queryClient } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import { useState } from "react";
import Modal from "../UI/Modal.jsx";

export default function EventDetails() {
  const params = useParams();
  const navigate = useNavigate();
  const [deletionEvent, setDeletionEvent] = useState(false);

  const { data, isPending, isError, error } = useQuery({
    queryFn: ({ signal }) => fetchEvent({ id: params.id, signal }),
    queryKey: ["events", params.id],
  });
  console.log(data);
  const { mutate } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      navigate("/events");
    },
  });

  const handleDeleteEvent = () => {
    mutate({ id: params.id });
  };
  return (
    <>
      <Outlet />
      {deletionEvent && (
        <Modal onClose={() => setDeletionEvent(false)}>
          <h1>Do you want delete that event?</h1>
          <div className="form-actions">
            <button className="button-text" onClick={() => setDeletionEvent(false)}>Cancel</button>
            <button className="button" onClick={handleDeleteEvent}>Delete</button>
          </div>
        </Modal>
      )}
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {isPending && <LoadingIndicator />}
      {isError && <ErrorBlock title={error?.name} message={error?.message} />}
      {!isPending && !isError && (
        <article id="event-details">
          <header>
            <h1>{data.title}</h1>
            <nav>
              <button onClick={() => setDeletionEvent(true)}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img src={`http://localhost:3000/${data.image}`} alt={data.title} />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location}</p>
                <time dateTime={`Todo-DateT$Todo-Time`}>
                  {data.date}@{data.time}
                </time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
        </article>
      )}
    </>
  );
}
