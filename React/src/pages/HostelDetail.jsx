import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { hostels } from '../data/hostels';

// Sample amenities until property-specific details are supplied by an API.
const amenities = [
  { icon: '⌁', label: 'Wi-Fi' },
  { icon: '❄', label: 'Air conditioning' },
  { icon: '♨', label: 'Meals' },
  { icon: '♜', label: 'Laundry' },
  { icon: '◇', label: 'Security' },
  { icon: '▱', label: 'Study area' },
];

function HostelDetail() {
  const { id } = useParams();
  const hostel = hostels.find((stay) => String(stay.id) === id);
  const [bookingNotice, setBookingNotice] = useState(false);

  if (!hostel) {
    return (
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <main className="mx-auto max-w-6xl px-6 py-20">
          <h1 className="text-3xl font-bold">Hostel not found</h1>
          <p className="mt-3 text-gray-400">This stay is unavailable or the link is incorrect.</p>
          <Link to="/" className="mt-6 inline-block text-[#f47735]">← Back to home</Link>
        </main>
      </div>
    );
  }

  const seatsAvailable = hostel.availableSeats > 0;

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 pb-12 pt-6 md:px-10">
        <Link to="/" className="inline-flex rounded-lg py-2 text-sm font-semibold text-[#f47735] hover:underline focus-visible:outline-2 focus-visible:outline-[#f47735]">
          ← Back to home
        </Link>

        <img src={hostel.image} alt={`${hostel.name} accommodation`} className="mt-5 h-64 w-full rounded-3xl object-cover sm:h-96 lg:h-[460px]" />

        <div className="mt-8 flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#f47735]">{hostel.category} · {hostel.type}</p>
            <h1 className="mt-3 text-3xl font-bold sm:text-5xl">{hostel.name}</h1>
            <p className="mt-3 text-gray-400">{hostel.location}</p>
          </div>
          <span className="rounded-xl border border-white/10 bg-[#1C1C1C] px-4 py-3">
            <span aria-hidden="true" className="text-yellow-400">★ </span>
            <span aria-label={`Rated ${hostel.rating} out of 5`}>{hostel.rating} / 5</span>
          </span>
        </div>

        <section aria-labelledby="amenities-heading" className="my-8 rounded-3xl border border-white/10 bg-[#191919] p-6 sm:p-8">
          <h2 id="amenities-heading" className="text-2xl font-bold">Feel at home</h2>
          <p className="mt-2 text-gray-400">Sample amenities — confirm availability with the property.</p>
          <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {amenities.map(({ icon, label }) => (
              <li key={label} className="flex items-center gap-3 rounded-xl border border-white/10 p-4">
                <span aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#f47735]/10 text-xl text-[#f47735]">{icon}</span>
                {label}
              </li>
            ))}
          </ul>
        </section>

        <section aria-label="Book this stay" className="sticky bottom-4 z-10 rounded-2xl border border-white/10 bg-[#1C1C1C] p-5 shadow-xl sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-2xl font-bold text-[#f47735]">₹{hostel.rent.toLocaleString('en-IN')} <span className="text-sm font-normal text-gray-400">/ month</span></p>
              <span className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${seatsAvailable ? 'bg-green-500/15 text-green-400' : 'bg-red-500/15 text-red-400'}`}>
                {seatsAvailable ? `${hostel.availableSeats} seats available` : 'Fully booked'}
              </span>
            </div>
            <button type="button" disabled={!seatsAvailable} onClick={() => setBookingNotice(true)} className="w-full cursor-pointer rounded-xl bg-[#f47735] px-8 py-4 font-bold text-black transition hover:bg-orange-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f47735] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto">
              {seatsAvailable ? 'Book Now →' : 'Unavailable'}
            </button>
          </div>
          {bookingNotice && <p role="status" className="mt-4 border-t border-white/10 pt-4 text-sm text-gray-300">Online booking is not connected yet. No booking has been submitted.</p>}
        </section>
      </main>
    </div>
  );
}

export default HostelDetail;
