import React, { use, useCallback, useMemo, useState } from "react";

const MemoCallback = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(["item1", "item2", "item3", "item4"]);
  const [search, setSearch] = useState("");


  const filterItems = useMemo(() => {
    console.log("Filtering Items...");
    return item.filter((ele) => ele.toLowerCase().includes(search.toLowerCase())
    );
  }, [item, search]);

  const handleChange = useCallback((e)=>{
    setSearch(e.target.value);  
    console.log("Handle Change Called");
  },[])

  console.log(count);

  return (
    <div>
      <h1>Memoization</h1>

      <input
        type="text"
        placeholder="Search Item"
        onChange={handleChange}
        name="search"
        value={search}
      />
      <button onClick={() => setCount(val => val + 1)}>Count {count}</button>

      {filterItems.map((ele, index) => (
        <h3 key={index}>{ele}</h3>
      ))}

    </div>
  );
};

export default MemoCallback;
