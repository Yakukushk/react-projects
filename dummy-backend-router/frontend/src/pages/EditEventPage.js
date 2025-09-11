import { useRouteLoaderData } from "react-router";
import EventForm from "../components/EventForm";
export default function EditEventPage() {
  const data = useRouteLoaderData('event-detail');
  const event = data.event;

  return <EventForm event={event} method={'patch'} />;
}
