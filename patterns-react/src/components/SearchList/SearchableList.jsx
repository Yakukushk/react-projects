import { useState } from "react";

export default function SearchableList({ items, itemKeyFn, children }) {
  const [searchTerm, setSearchTerm] = useState("");
  // const searchItem = items.includes(searchTerm);
  const searchItems = items.filter((item) =>
    JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="searchable-list">
      <input onChange={handleChange} type="search" placeholder="Search" />
      <ul>
        {searchItems.map((item) => (
          <li key={itemKeyFn(item)}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}
