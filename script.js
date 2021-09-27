var user_name = document.getElementById('name').value;
var add = document.getElementById('Address').value;
var phn = document.getElementById('phone').value;
var mylist_B = document.getElementById("Brand");
var mylist_C = document.getElementById("colour");
var mylist_S = document.getElementById("Size");

function warning() {
    alert("Confirm your order");
}
function validate() {
    if (user_name == null || user_name == ""|| add == null || add == "" || phn == ""|| phn == null) {
        alert("Please Fill All Required Field");
        return false;
    }
    if (phn.length > 10 || phn.length < 10) {
        alert("Number should have than 10 digits");
        submitOK = "false";
    }
}

function print_reciept(myOrder) {
    
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
    document.getElementById('rept').innerHTML = "******Recipt*****";
    document.getElementById('nm').innerHTML = "Name : " + user_name;
    document.getElementById('ad').innerHTML = "Address : " + add;
    document.getElementById('cn').innerHTML = "Contact : " + phn;
    document.getElementById('bn').innerHTML = "Brand : " + B;
    document.getElementById('sz').innerHTML = "Color : " + C;
    document.getElementById('qn').innerHTML = "Size : " + S;
    document.getElementById('pt').innerHTML = "Payment Type : " + p;
    document.getElementById('dt').innerHTML = "Date : " + datetime;
}

