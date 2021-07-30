export const getAllEvents = async () => {
  const data = await fetch(
    "https://nextjs-3f875-default-rtdb.firebaseio.com/events.json"
  );
  return data.json();
};

export const getEventById = async (id) => {
  const events = await getAllEvents();
  const data = events.filter((e) => e.id === id);
  console.log(data[0]);
  return data[0];
};
