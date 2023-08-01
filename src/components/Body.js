import { useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { cardLists } from "../utils/mockData";
export const Body = () => {
  //State Variable in React
  const [fakeRestroDataList, setFakeRestroDataList] = useState(cardLists);
  //normal JS

  return (
    <>
      <div className="body">
        <div className="search">
          {/* <input type="text" name="Search" placeholder="Search..." />
          <button>Search</button> */}
          <button
            className="filterBtn"
            onClick={() => {
              //Filter logic here
              const filterLists = fakeRestroDataList.filter(
                (rest) => rest?.data?.avgRating > 4
              );
              setFakeRestroDataList(filterLists);
            }}
          >
            Top Rated Restro
          </button>
        </div>
        <div className="restro-container">
          {fakeRestroDataList?.map((items) => (
            <RestaurantCard restoData={items} key={items.data.id} />
          ))}
        </div>
      </div>
    </>
  );
};
