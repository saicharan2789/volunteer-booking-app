const Confirmation = ({ booking }) => {
    return (
      <div>
        <h2>Booking Confirmed!</h2>
        <p>Thank you, {booking.name}, for volunteering!</p>
      </div>
    );
  };
  
  export default Confirmation;