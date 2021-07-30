import { Fragment } from "react";
// import { useRouter } from "next/router";

import { getEventById, getAllEvents } from "../../utils/utils";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";

function EventDetailPage({ event }) {
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export async function getStaticProps({ params }) {
  const eventId = params.eventId;

  const event = await getEventById(eventId);
  return {
    props: { event },
    revalidate: 40,
  };
}

export async function getStaticPaths() {
  const data = await getAllEvents();
  const paths = data.map((d) => ({ params: { eventId: d.id } }));
  return {
    paths,
    fallback: true,
  };
}

export default EventDetailPage;
