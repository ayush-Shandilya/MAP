import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import 'dotenv/config';
import axios from "axios";
const Empty = () => {
  const dispatch = useDispatch();

  // console.log("URL=>",import.meta.env.VITE_DATA_URL)
  useEffect(() => {
    axios.get(import.meta.env.VITE_DATA_URL).then((response) => {
      // console.log("dtaa",response.data)
      dispatch({
        type: "dataReducer",
        payload: response.data.data,
      });
      dispatch({
        type: "isLoadingReducer",
        payload: false,
      });
    });
  }, []);

  return <></>;
};
export default Empty;
