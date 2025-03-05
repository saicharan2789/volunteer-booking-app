const VolunteerList = ({ opportunities, onBook }) => {
    return (
      <div className="volunteer-list">
        <h2>Volunteer Opportunities</h2>
        <div className="card-container">
          {opportunities.map((opp) => (
            <div key={opp.id} className="card">
              <h3>{opp.title}</h3>
              <p>{opp.description}</p>
              <button onClick={() => onBook(opp.id)}>Book</button>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default VolunteerList;