/**
 * Created by KaseTebo on 2/25/14.
 */

(function(){

    var students = [];
    function Student (n, id, d, g){
        this.name = n;
        this.studentID = id;
        this.degree = d;
        this.grades = [];
    }
    Student.prototype.average = function (){
        var total = 0;
        for (var i=0; i <this.grades.length; i++){
            total+= this.grades[i];
        }
        return total/this.grades.length;
    }
    window.Student = Student;
})(