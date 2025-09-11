import { redirect, useRouteLoaderData } from "react-router";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
  const data = useRouteLoaderData("event-detail");
  console.log(data);
  return (
    <>
      <EventItem event={data.event} />
    </>
  );
}

export async function loader({ request, params }) {
  const id = params.id;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw new Response(JSON.stringify({ message: "Could not fetch detail" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } else {
    return response;
  }
}

export async function action({request, params}) {
   const eventId = params.id;
   const response = await fetch('http://localhost:8080/events/' + eventId, {
    method: request.method
   });
   if(!response.ok) {
      throw new Response({message : 'Could not delete event'}, {status : 500});
   }

   return redirect('/events');
}