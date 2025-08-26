import {useState} from "react";

const Filter = () => {
    const data =["Apple", "Banana", "Orange", "Mango", "Pineapple"];
    const [search,setSearch] = useState();

    const filteredData = data.filter((item) => 
        item.toLowerCase().includes(search.toLowerCase())
    );
  return (
    <div>
        <h2>Filter Example</h2>
        <input
        type="text"
        placeholder="Search fruits..."
        onChange={(e) => setSearch(e.target.value)}
        />

        <ul>
            {filteredData.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
      
    </div>
  )
}

export default Filter
