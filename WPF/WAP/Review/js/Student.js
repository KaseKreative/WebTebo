/**
 * Created by KaseTebo on 2/27/14.
 */

(function(){

    function Student (){
        this.name = "";
        this.degree = "";
        this.id = "";
        this.grades = [];
    }

    Student.prototype.average = function(){
        var addedNumbers = 0;
        this.grades.forEach(function(element){
            addedNumbers += element
        });
        average = addedNumbers/this.grades.length;
        return average;

    };

    window.Student = Student;
})();