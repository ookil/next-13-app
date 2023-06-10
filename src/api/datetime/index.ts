export const getCurrentDateTime = async (): Promise<string> => {
  const res = await fetch(
    "http://worldtimeapi.org/api/timezone/Europe/Warsaw",
    { next: { tags: ["datetime"] } }
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  return data.datetime;
};
