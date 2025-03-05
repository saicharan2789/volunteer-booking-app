import { useState } from 'react';
import VolunteerList from '../components/VolunteerList.js';
import BookingForm from '../components/BookingForm.js';
import Confirmation from '../components/Confirmation.js';

const Bookings = () => {
  const [opportunities] = useState([
    { id: 1, title: 'Community Cleanup', description: 'Help clean up local parks.' },
    { id: 2, title: 'Food Bank', description: 'Assist in distributing food to those in need.' },
  ]);
  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [booking, setBooking] = useState(null);

  const handleBook = (id) => {
    setSelectedOpportunity(id);
  };

  const handleSubmit = (formData) => {
    setBooking({ ...formData, opportunity: opportunities.find(opp => opp.id === selectedOpportunity) });
  };

  return (
    <div>
      {!booking ? (
        <>
          {!selectedOpportunity ? (
            <VolunteerList opportunities={opportunities} onBook={handleBook} />
          ) : (
            <BookingForm onSubmit={handleSubmit} />
          )}
        </>
      ) : (
        <Confirmation booking={booking} />
      )}
    </div>
  );
};

export default Bookings;