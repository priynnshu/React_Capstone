function Itinerary({
  tripList,
  removePlace
}) {
  return (
    <div>
      <h2>My Trip Plan</h2>
      {
        tripList.map(
          (item, index) => (
          <div key={index}>
            {item}
            <button onClick={() =>removePlace(index)}>Remove</button>
        </div>
))}
    </div>
  )
}
export default Itinerary