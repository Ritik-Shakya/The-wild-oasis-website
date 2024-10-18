import UpdateReservationForm from "@/app/_components/UpdateReservationForm";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  // CHANGE
  //   const reservationId = 23;
  //   const maxCapacity = 23;

  const booking = await getBooking(params.bookingId);
  const { cabinId } = booking;

  const cabin = await getCabin(cabinId);

  const { maxCapacity } = cabin;

  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Edit Reservation #{params.bookingId}
      </h2>
      <UpdateReservationForm
        booking={booking}
        bookingId={params.bookingId}
        maxCapacity={maxCapacity}
      />
    </div>
  );
}
