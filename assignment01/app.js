// get body element reference
// here we can get element reference  in 5 ways 
// refer http:// www.w3schools.com/js/js_htmldom_elements.asp
const bodyE1 = document.getElementsByTagName('body');

// onchange evenr handler
// it will be triggered when ever  we chnge the  background color 
function changeBackgroundColor (event)   {
    const backgroundColor  = event?.target?.value;
    bodyE1[0].style.backgroundColor = backgroundColor;
}
Footer