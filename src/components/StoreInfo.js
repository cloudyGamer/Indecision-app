 /* 
  * To change this license header, choose License Headers in Project Properties.
  * To change this template file, choose Tools | Templates
  * and open the template in the editor.
  */

import React from 'react'; 

export default class StoreInfo extends React.Component {
     componentDidMount() {
     console.log('StoreInfo component did mount');
     }        
  
     render() {
     return(
       <div className="storeInfo" xmlns="http://www.w3.org/1999/xhtml">
       <div className='storeInfo_container'>
            <div className="storeInfo_title">Contact Us</div>
                <div className='storeInfo_body'>
                     <div className='storeInfo_subtitle'>
                         Telephone:
                     </div>
                     <div>+35391565874</div>
                     <div className='storeInfo_subtitle'>
                         Email:
                     </div>
                     <div className='storeInfo_email'>forevermecosmeticsgld@gmail.com</div>
                </div>
        </div>
        <div className='storeInfo_container'>
            <div className="storeInfo_title">Stores</div>
                <div className='storeInfo_body'>
                     <div className='storeInfo_subtitle'>
                         Galway:
                     </div>
                     <div>Unit 35A, Forever Me Cosmetics, Galway Shopping Centre, Headford Rd, Galway</div>
                     <div className='storeInfo_subtitle'>
                         Limerick:
                     </div>
                     <div>First Floor - Unit 26, Arthurs Quay Shopping Centre</div>
                     <div className='storeInfo_subtitle'>
                         Dublin:
                     </div>
                     <div>Second Floor, Stephen's Green Shopping Centre</div>
                </div>
        </div>
        <div className='storeInfo_container'>
          <div className="storeInfo_title">Refund Policy</div>
           <div className='storeInfo_body'>
            <p>At Forever Me Cosmetics, we hope that you will be 100% delighted with your purchase. However, should there be any reason that you are not entirely satisfied, you may return your purchase to us for a full refund provided that:</p>
             
           <p>The goods are unused and in their original packaging and which are returned in a re-saleable condition. </p>

           <p>You tell us that you wish to return your goods within 14 working days from the date you receive your goods </p>

           <p>You return them to us, or provide proof of postage to our address within fourteen working days from the date you receive them. </p>

           <p>When we pack your order prior to despatch, we will include with it, a delivery note giving details of your order, including the description of each item and the quantity delivered. If for any reason the descriptions or quantities you receive are different to the delivery note, please contact us immediately by emailing or alternatively calling our Sales Department during office hours (9.00am to 5.00pm Monday to Friday) on +35391565874Once the item is received, we will refund the value of the goods. The customer covers all P&P costs. A delivery charge of €5 will be incurred if the original order value goes under €50. The exception is, of course, if the item is faulty or incorrect in which case we will be happy to exchange it at our expense.Please check your order fully as soon as it arrives to you as mistakes cannot be rectified after one week of you receiving your order.If any item has been damaged in transit, please send us a photo of the item so we can resolve it as quickly as possible.</p>
           </div>
       </div>
        
        
        <div className='storeInfo_container'>
          <div className="storeInfo_title">Shipping Policy</div>
           <div className='storeInfo_body'>
           <p>We ship in Ireland only. Shipping is calculated automatically during checkout. If you have any queries please contact us on forevermecosmetics@icloud.com </p>
           <p>Ireland shipping is only €5 regardless of the number of items. Free shipping all on orders over €50 in Ireland. </p>
           <p>We aim to ship all orders made by 1pm the same day - Monday to Friday. </p>
           <p>Usual Shipping Times once Dispatched:</p>
           <p>Ireland - 1 Working DayWe aim to ship all orders made by 1pm the same day - Monday to Friday.</p>
           <p>An Post orders are next day delivery but please allow up to 2 days in case of unforeseen circumstances.</p>
           <p>Please Note: Asking for your order to be left at an insecure location is done so at your own risk.</p>
           </div>
        </div>
           
          </div>)
     }  
    
}


