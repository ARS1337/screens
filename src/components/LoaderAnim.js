import React from 'react'

function LoaderAnim() {

   let doneLoadingLogin= useSelector(state=>state.token.doneLoading);
   let doneLoadingEnquiry= useSelector(state=>state.Enquiries.doneLoading);
   let loginMessage = useSelector(state=>state.token.message);
   let EnquiriesMessage = useSelector(state=>state.Enquiries.message);

   return (
      <div>

      </div>
   )
}

export default LoaderAnim
