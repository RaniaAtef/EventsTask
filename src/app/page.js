import EventCard from "../components/Card";

export default async function Home() {
  const res = await fetch("http://localhost:3000/api/events");
  const events = await res.json();

  return (
    <div>
      <div className="bg-white  sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Upcoming Events
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Check out our upcoming events.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.eventId} event={event} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
