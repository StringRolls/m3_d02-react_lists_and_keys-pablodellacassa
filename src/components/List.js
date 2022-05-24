// An array containing HTML elements
const numbersList = ["Luisa", "Adrian", "Samy", "Aleix"];

function List() {
  return (
    <div className="list">
      <h2>List</h2>
      {numbersList.map((name, idx)=>(
      <li key={idx}>{name}</li>
      ))}
    </div>
  );
}

export default List;


