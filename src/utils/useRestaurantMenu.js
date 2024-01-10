import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const useRestaurantMenu = (resId) => {
  //const { resId } = useParams();
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.838923519443707&lng=77.64801945537329&restaurantId=" +
        resId +
        "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  return resInfo;
};
export default useRestaurantMenu;
