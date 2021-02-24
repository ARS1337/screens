import React,{useSelector} from "react";

export function LoaderAnim() {
  let doneLoadingLogin = useSelector((state) => state.token.doneLoading);
  let doneLoadingEnquiry = useSelector((state) => state.Enquiries.doneLoading);
  let loginMessage = useSelector((state) => state.token.message);
  let EnquiriesMessage = useSelector((state) => state.Enquiries.message);

  return (
    <div>
      {(() => {
        if (doneLoadingEnquiry == "pending") {
          return (
            <div class="message message-gray">
              <label>sending data...</label>{" "}
            </div>
          );
        } else if (doneLoadingEnquiry == "rejected") {
          return (
            <div class="message message-red">
              <label>{EnquiriesMessage}</label>{" "}
            </div>
          );
        } else {
          return (
            <div class="message message-green">
              <label>{EnquiriesMessage}</label>{" "}
            </div>
          );
        }
      })()}
      {(() => {
        if (doneLoadingLogin == "pending") {
          return (
            <div class="message message-gray">
              <label>Logging in...</label>{" "}
            </div>
          );
        } else if (doneLoadingLogin == "rejected") {
          return (
            <div class="message message-red">
              <label>{loginMessage}</label>{" "}
            </div>
          );
        } else {
          return (
            <div class="message message-green">
              <label>{loginMessage}</label>{" "}
            </div>
          );
        }
      })()}
    </div>
  );
}

export default LoaderAnim;
