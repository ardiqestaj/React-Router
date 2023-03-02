import { useParams } from "react-router-dom";
import EventItem from "../EventItem";

const EventDetailPage = () => {
  const params = useParams();
  return (
    <EventItem event={} />
  );
};

export default EventDetailPage;

export async function loader({request, params}) {
  const id = params.eventId
  return fetch('http://localhost:8080/events/' + id)
}
