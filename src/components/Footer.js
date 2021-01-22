import React from 'react'
// import styles from '../screen4.css';
import '../App.css';


function Footer() {
   return (
      <>
                 <footer class=" row footer col-12">
            <div class="order-details">
                <div class="orders col-7">
                    <h1>Your orders(2)</h1>
                </div>
                <div class="total col-3">
                    <h1>Total: Rs. 240</h1>
                </div>
                <div class="col-2"><button class="proceed">Proceed</button></div>
                </div>
        </footer>
      </>
   )
}

export default Footer
