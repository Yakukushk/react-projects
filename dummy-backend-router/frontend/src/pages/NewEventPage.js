import { redirect } from "react-router";
import EventForm from "../components/EventForm";

export default function NewEventPage() {
  return <EventForm method={'post'} />;
}

export const action = async function ({ request, params }) {
  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  let url = "http://localhost:8080/events";
  if(request.method === 'PATCH') {
    const eventId = params.id;
    url = "http://localhost:8080/events/" + eventId;
  }

  const response = await fetch(url, {
    method: request.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    // return {isError: true, message: 'Could not fetch events'}
    throw new Response(
      JSON.stringify({
        message: "Could not fetch events",
      }),
      { status: 500 }
    );
  }
  return redirect("/events");
};
