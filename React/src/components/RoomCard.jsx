function RoomCard({ room, onRequest }) {
    return (
        <article className="flex flex-wrap items-center justify-between gap-5 rounded-2xl border border-white/10 bg-[#181818] p-6">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-lg font-semibold">
                  {room.name}
              </h3>
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-800">
                  {room.availableSeats} seats open
              </span>
            </div>
            <p className="mt-2 text-neutral-400">
                {room.students} students · {room.totalSeats} total seats
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <p className="text-xl font-bold">₹{room.rent.toLocaleString('en-IN')}<span className="text-sm font-normal text-neutral-400"> / month</span></p>
            <button type="button" className="rounded-2xl bg-[#f47735] px-6 py-3.5 font-semibold text-white hover:bg-orange-400" onClick={onRequest} aria-label={`Request seat in ${room.name}`}>
                Request seat
            </button>
          </div>
        </article>
    );
}

export default RoomCard;
