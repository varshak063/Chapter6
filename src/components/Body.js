import { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
export const Body = () => {
  //State Variable in React
  const [fakeRestroDataList, setFakeRestroDataList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  // console.log("before return");
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5203896&lng=73.8567005&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setFakeRestroDataList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  console.log(fakeRestroDataList);

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
                (rest) => rest?.info?.avgRating > 4
              );
              setFakeRestroDataList(filterLists);
            }}
          >
            Top Rated Restro
          </button>
        </div>
        <div className="restro-container">
          {fakeRestroDataList?.map((items) => (
            <RestaurantCard restoData={items?.info} key={items?.info?.id} />
          ))}
        </div>
      </div>
    </>
  );
};
