function Itinerary({tripList,removePlace}) {
  return (
    <div className="trip-container">
      <h2>My Trip Plan</h2>
      <div className="trip-list">
      {tripList.map(
          (item, index) => (
          <div className="trip-card" key={index}>
            {item}
            <button onClick={() =>removePlace(index)}>Remove</button>
          </div>
        )
      )}
      </div>
    </div>
  )
}
export default Itinerary