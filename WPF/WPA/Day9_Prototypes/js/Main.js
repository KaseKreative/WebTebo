/**
 * Created by KaseTebo on 2/25/14.
 */

(function (){

    var interval = setInterval(update, 1000);
    var seconds = 0;
    document.querySelector("#button").addEventListener("click", onClick);
    document.querySelector("#displayAvg").addEventListener("click", display);




    var kase = new Student("Kase", 3604959, "Web Development", 3.50);
    console.log(kase);

    function onClick (){
        var student = new Student();
        student.name = document.querySelector("#inputName").value;
        student.grades.push(parseInt(document.querySelector("#inputGrades1").value));
        student.grades.push(parseInt(document.querySelector("#inputGrades2").value));
        students.push(student);
        console.log(student.average())
    }

    function display (e){
        students.forEach(function(element){


        })

    }


    function update (){
        seconds++
    }



})();