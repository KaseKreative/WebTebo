/**
 * Created by KaseTebo on 2/11/14.
 */
//(function(){
//console.log("Objects");
//// [ ] =  Array
//// {  } = Object Literal
//// Data Structure
//
//var car = ["Lexus", "Toyota", "RX-330"];
//
//var carAgain = {name:"Lexus",make:"Toyota",model:"rx-330"};
//
//var students = [student1,student2];
//
//
//var student1 = {name:"Kase",Grades:[80,90,100], Address:{Street:"3819 Sutton Place Blvd Apt 1612", Zipcode:"32792", City:"Winter Park"} };
//var student2 = {name:"Justin",Grades:[82,93,98], Address:{Street:"Destiny USA Dr.", Zipcode:"13681", City:"Syracuse"} };
//

//
//    var avg1 = getAverage(students[0].Grades);
//
//    var avgArray = averageArray(students) ;
//
//
//
//
//
//
//function getAverage(arr){
//    addedNumbers = 0;
//    for (var i = 0; i<arr.length;i++){
//        addedNumbers += arr[i];
//    }
//    return addedNumbers/arr.length;
//
//
//}
//
//    function averageArray(arr){
//        avgArray = [];
//        number = 0;
//        for (var i = 0; i < arr.length; i++){
//            number = getAverage(arr[i].Grades);
//            avgArray.push(number);
//
//        }
//        return avgArray;
//    }
//
//    function logData(arr){
//        for (var i = 0; i < arr.length; i++){
//           studentsInfo = arr[i];
//
//
//
//        }
//    }
//
//})();


//    var couch = {color:"", type:"", price:0, recline: function(){console.log("I am reclining")}};
//    couch.color = "Black";
//    couch.type = "Three Seater";
//    couch.price = 100;
//
//    for  (var p in couch){
//        console.log(p+":"+couch[p]);
//    }


(function(){


var button = document.querySelector("#btn");
var foodMessage = document.querySelector("#pizza");

                                //  V name of the function
    button.addEventListener("click",onClick);

    function onClick(e){
        foodMessage.innerHTML = "BREAK TIME";

    }



























})();