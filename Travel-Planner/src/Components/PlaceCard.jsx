function PlaceCard({place,onAdd}){
  return (
    <div>
      <p>
        {place?.properties?.name}
      </p>
      <button onClick={() =>onAdd(place.properties.name)}>Add</button>
    </div>
  )
}
export default PlaceCard