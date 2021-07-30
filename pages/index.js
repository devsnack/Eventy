import { getAllEvents } from "../utils/utils";
import EventList from "../components/events/event-list";

function HomePage({ data: featuredEvents }) {
  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export async function getStaticProps() {
  const data = await getAllEvents();
  return {
    props: { data },
  };
}

export default HomePage;
