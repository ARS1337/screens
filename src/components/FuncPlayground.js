import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMasterData } from "./StoreAndSlices/MasterFetch";
import { useEffect } from "react";
import { fetchPosRelData } from "./StoreAndSlices/PosRelData";
import { VideoFetch } from "./StoreAndSlices/VideoFetch";
import { fetchLocation } from "./StoreAndSlices/Location";

function FuncPlayground(props) {
  let latitude = useSelector(state => state.Location.latitude);
  let longitude = useSelector(state => state.Location.longitude);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLocation());
    dispatch(fetchMasterData(props.data.MasterDataURL));
    dispatch(VideoFetch(props.data.VideoDataURL));
    dispatch(
      fetchPosRelData([
        props.data.TopPicksURL,
        ,
        // {
        //   latitude: latitude,
        //   longitude: longitude,
        // }
        ,
        "topPicks",
      ])
    );
    dispatch(
      fetchPosRelData([
        props.data.HotelsNearbyURL,
        ,
        {
          latitude: latitude,
          longitude: longitude,
          page_limit: 3,
          limit: 0,
        }
        ,
        "hotelsNearby",
      ])
    );

  }, []);
  return <></>;
}

export default FuncPlayground;
