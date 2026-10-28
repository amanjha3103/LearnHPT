import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import RoomCard from '../components/RoomCard';
import { hostels } from '../data/hostels';

// Shared demo details from the reference design. Replace with real property data later.
const details = {
    distance: '1.2 km from PDEU',
    description: 'A bright, secure student residence with generous common areas, daily housekeeping, and easy access to university transport.',
    manager: 'Neha Patel',
    phone: '+91 98765 43210',
    amenities: ['High-speed Wi-Fi', 'Daily meals', 'Air conditioning', 'Housekeeping', 'Laundry', 'CCTV'],
    rules: ['Entry before 11:00 PM', 'Government ID required', 'One-month refundable deposit'],
    rooms: [
        {
            id: 'twin',
            name: 'Deluxe twin sharing',
            students: 2,
            totalSeats: 8,
            availableSeats: 3,
            rent: 9200
        },
        {
            id: 'triple',
            name: 'Comfort triple sharing',
            students: 3,
            totalSeats: 12,
            availableSeats: 2,
            rent: 7800
        },
    ],
};



function HostelDetail() {
    // 1. Read the URL, then find the matching hostel.
    const { id } = useParams();
    const hostel = hostels.find((stay) => String(stay.id) === id);
    // Remember which hostel's request button was clicked.
    const [requestHostelId, setRequestHostelId] = useState('');

    function requestSeat() {
        setRequestHostelId(id);
    }

    if (!hostel) {
        return (
            <div className="min-h-screen bg-[#191919] text-white">
                <Navbar />
                <main className="mx-auto max-w-7xl px-6 py-20">
                    <h1 className="text-3xl font-bold">
                            Hostel not found
                    </h1>
                    <Link to="/listings" className="mt-6 inline-block text-[#f47735]">
                            ← Back to listings
                    </Link>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#191919] text-white">
            <div className="bg-[#111111]">
                <Navbar />
                <header className="mx-auto max-w-7xl px-6 py-10 md:pb-14">
                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            {hostel.name}
                    </h1>
                    <p className="mt-3 text-lg text-neutral-400">
                            {hostel.location}
                    </p>
                    <p className="mt-3 text-xs text-neutral-500">
                            Demo listing: room options, amenities, rules, and manager details are sample data.
                    </p>
                </header>
            </div>

            <main className="border-t border-white/5">
                <div className="mx-auto max-w-7xl px-6 py-8 md:py-10">
                    <Link to="/listings" className="inline-flex items-center gap-3 font-semibold text-neutral-400 transition hover:text-[#f47735]">
                        <span aria-hidden="true">←</span> Back to listings
                    </Link>

                    <div className="mt-6 grid items-start gap-7 lg:grid-cols-3">
                        {/* Left: image, information, and rooms. */}
                        <div className="min-w-0 space-y-7 lg:col-span-2">
                            <img src={hostel.image} alt={`${hostel.name} accommodation`} className="aspect-video w-full rounded-2xl object-cover" />

                            <section aria-labelledby="about-heading" className="rounded-2xl border border-white/10 bg-[#181818] p-6 sm:p-8">
                                <div className="flex flex-wrap items-center justify-between gap-3">
                                    <p className="text-neutral-400"><span aria-hidden="true">⌖ </span>{details.distance}</p>
                                    <p aria-label={`Rated ${hostel.rating} out of 5`} className="font-semibold"><span aria-hidden="true" className="text-xl text-[#f47735]">★ </span>{hostel.rating}</p>
                                </div>
                                <h2 id="about-heading" className="mt-4 text-2xl font-semibold">
                                        Comfortable student living
                                </h2>
                                <p className="mt-5 leading-8 text-neutral-400">
                                        {details.description}
                                </p>

                                <h3 className="mt-9 text-lg font-semibold">
                                        Amenities
                                </h3>
                                    <ul className="mt-4 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                                        {details.amenities.map((amenity) => (
                                            <li key={amenity} className="flex gap-3">
                                                <span aria-hidden="true" className="text-[#f47735]">
                                                        ✓
                                                </span>
                                                {amenity}
                                            </li>
                                        ))}
                                    </ul>


                                <h3 className="mt-9 text-lg font-semibold">
                                        House rules
                                </h3>
                                    <ul className="mt-4 list-inside list-disc space-y-3 text-neutral-400">
                                        {details.rules.map((rule) => (
                                            <li key={rule}>
                                                {rule}
                                            </li>
                                        ))}
                                    </ul>

                            </section>

                            <section aria-labelledby="rooms-heading">
                                <h2 id="rooms-heading" className="mb-5 text-2xl font-semibold">
                                        Available rooms
                                </h2>
                                <div className="space-y-4">
                                    {details.rooms.map((room) => (
                                        <RoomCard
                                            key={room.id}
                                            room={room}
                                            onRequest={requestSeat}
                                        />
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* Right: pricing card stays visible on desktop. */}
                        <aside aria-label="Request a seat" className="rounded-2xl border border-white/10 bg-[#181818] p-6 lg:sticky lg:top-6">
                            <p className="text-neutral-400">
                                    Starting from
                            </p>
                            <p className="mt-2 text-3xl font-bold tracking-tight">₹{hostel.rent.toLocaleString('en-IN')}<span className="text-sm font-normal tracking-normal text-neutral-400"> / month</span></p>
                            <div className="my-6 border-t border-white/10" />
                            <h2 className="font-semibold">
                                    Property manager
                            </h2>
                            <p className="mt-2 text-lg">
                                    {details.manager}
                            </p>
                            <p className="mt-3 flex items-center gap-3 text-neutral-400"><span aria-hidden="true">☎</span>{details.phone}</p>
                            <button type="button" onClick={requestSeat} disabled={hostel.availableSeats === 0} className="mt-6 w-full rounded-2xl bg-[#f47735] px-6 py-3.5 font-semibold text-white hover:bg-orange-400 disabled:cursor-not-allowed disabled:opacity-50">
                                {hostel.availableSeats > 0 ? 'Request a seat' : 'Fully booked'}
                            </button>
                            <p className="mt-4 text-center text-sm text-neutral-400">
                                    No payment required for a request
                            </p>
                            {requestHostelId === id && (
                                <p role="status" className="mt-4 border-t border-white/10 pt-4 text-sm text-orange-200">
                                    Online booking is not connected yet. No request has been submitted.
                                </p>
                            )}
                        </aside>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default HostelDetail;
