/* function billingFunction() {
if (document.getElementById('same').checked) {
document.getElementById('billingName').value=document.getElementById('shippingName').value;
document.getElementById('billingZip').value=document.getElementById('shippingZip').value;
}
else {
document.getElementById('billingName').value='';
document.getElementById('billingZip').value='';
}

}*/ 
/* very nice code */
function billingFunction() {

  if (same.checked == true) {

    document.getElementById("billingName").value=
  document.getElementById("shippingName").value; 
    
  document.getElementById("billingZip").value = document.getElementById("shippingZip").value;
  }
 else
   {
     document.getElementById("billingName").value = "";
     document.getElementById("billingZip").value = "";
   }
};