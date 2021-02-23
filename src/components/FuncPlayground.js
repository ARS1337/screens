import React from "react";
import { useDispatch } from "react-redux";
import { fetchMasterData } from "./StoreAndSlices/MasterFetch";
import { useEffect } from "react";
import { fetchPosRelData } from "./StoreAndSlices/PosRelData";
import { VideoFetch } from "./StoreAndSlices/VideoFetch";
import { fetchLocation } from "./StoreAndSlices/Location";

function FuncPlayground(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchLocation()).then((r) => {
      dispatch(fetchMasterData(props.data.MasterDataURL));
      dispatch(VideoFetch(props.data.VideoDataURL));
      dispatch(
        fetchPosRelData([
          props.data.TopPicksURL,
          ,
          {
            latitude: r.payload.coords.latitude,
            longitude: r.payload.coords.longitude,
          },
          "topPicks",
        ])
      );
      dispatch(
        fetchPosRelData([
          props.data.HotelsNearbyURL,
          ,
          {
            latitude: r.payload.coords.latitude,
            longitude: r.payload.coords.longitude,
            page_limit:3,
            limit:0,
          },
          "hotelsNearby",
        ])
      );
    });
  }, []);
  return <></>;
}

export default FuncPlayground;
