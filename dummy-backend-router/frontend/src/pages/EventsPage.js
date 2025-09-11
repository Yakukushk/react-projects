import { Suspense } from "react";
import EventsList from "../components/EventsList";
import { Await, useLoaderData } from "react-router";

export default function EventsPage() {
  const { events } = useLoaderData();
  return (
    <>
      {/* <EventsList events={events} /> */}
      <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
        <Await resolve={events}>
          {(loaderEvents) => <EventsList events={loaderEvents} />}
        </Await>
      </Suspense>
    </>
  );
}

export const loaderEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return {isError: true, message: 'Could not fetch events'}
    throw new Response(
      JSON.stringify({
        message: "Could not fetch events",
      }),
      { status: 500 }
    );
  }
  const resData = await response.json();
  return resData.events;
};

export async function loader() {
  return {
    events: loaderEvents(),
  };
}
