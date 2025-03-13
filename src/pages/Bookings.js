import { useState } from 'react';
import VolunteerList from '../components/VolunteerList.js';
import BookingForm from '../components/BookingForm.js';
import Confirmation from '../components/Confirmation.js';

const Bookings = () => {
  const [opportunities] = useState([
    {
      id: 1,
      title: "Community Cleanup",
      description: "Help clean up local parks.",
    },
    {
      id: 2,
      title: "Food Bank",
      description: "Assist in distributing food to those in need.",
    },
    {
      id: 3,
      title: "Funeral Services",
      description: "Assist individuals in funeral activities.",
    },
    {
      id: 4,
      title: "Elderly Care",
      description: "Spend time with elderly residents at a nursing home.",
    },
    {
      id: 5,
      title: "Animal Shelter",
      description: "Help care for animals at a local shelter.",
    },
    {
      id: 6,
      title: "Blood Donation Drive",
      description: "Volunteer at a blood donation camp.",
    },
    {
      id: 7,
      title: "Teaching Kids",
      description: "Teach underprivileged children at a community center.",
    },
    {
      id: 8,
      title: "Disaster Relief",
      description: "Assist in disaster relief efforts.",
    },
    {
      id: 9,
      title: "Environmental Awareness",
      description: "Spread awareness about environmental conservation.",
    },
    {
      id: 10,
      title: "Hospital Volunteering",
      description: "Assist patients and staff at a local hospital.",
    },
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
    <div style={{ backgroundColor: "#f0f8ff", height: "100vh", padding: "20px" }}>
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