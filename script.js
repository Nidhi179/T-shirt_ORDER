function warning() {
    alert("Confirm your order")
}
function print_reciept(myOrder) {

    var name = document.getElementById('name').value;
    var add = document.getElementById('Address').value;
    var phn = document.getElementById('phone').value;
    var mylist_B = document.getElementById("Brand");
    var mylist_C = document.getElementById("colour");
    var mylist_S = document.getElementById("Size");

    var B = mylist_B.options[mylist_B.selectedIndex].text;
    var C = mylist_C.options[mylist_C.selectedIndex].text;
    var S = mylist_S.options[mylist_S.selectedIndex].text;
    var p = " ";
    radios = document.getElementsByName('Payment');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            p += radios[i].value;
            break;
        }
    }
    var currentdate = new Date();
    var datetime = currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + " @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":"
        + currentdate.getSeconds();
    document.getElementById('rept').innerHTML = "******Recipt*****" ;
    document.getElementById('nm').innerHTML  = name;
    document.getElementById('ad').innerHTML = add;
    document.getElementById('cn').innerHTML =  phn;
    document.getElementById('bn').innerHTML =B;
    document.getElementById('sz').innerHTML = C ;
    document.getElementById('qn').innerHTML=  S ;
    document.getElementById('pt').innerHTML=   p ;
    document.getElementById('dt').innerHTML= datetime;
}
var at = document.getElementById("email").value.indexOf("@");
var age = document.getElementById("age").value;
var fname = document.getElementById("fname").value;
submitOK = "true";

if (phn.length > 10) {
    alert("Number should have no more than 10 digits");
    submitOK = "false";
}
if (name == null) {
    alert("Please enter your name");
}
if (add == null) {
    alert("Please enter your address");
}

