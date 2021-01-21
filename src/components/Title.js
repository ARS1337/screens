import React from 'react'
// import styles from '../screen4.css';
import '../App.css';


function Title() {
   return (
      <>
        <div class="title row col-12">
            <div class="logo col-1">
                <img src="images jpg/title/pukkao_final-2.png" alt="" />
            </div>
            <div class="company-name col-2">
                <img src="images jpg/title/logo white.png" alt="" />
            </div>
            <div class="search-box col-4">
            {/* <input type="text"/> */}
            </div>
            <div class="help col-2">
                <img src="images jpg/title/Warning.png" alt="" class="col-2" />
                <h2 class="col-3">Help</h2>
            </div>

            <div class="user-login col-2">
                <img src="images jpg/title/Profile.png" alt="" class="col-5" />
                <h4 class="col-1">Siddhu</h4>
            </div>

        </div>
      </>
   )
}

export default Title
