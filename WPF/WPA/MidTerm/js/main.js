/*
 * Mid Terms for PWA-1 1304
 */
// Kase Tebo
// Date: Feb 15 2014

(function () {

    var button = document.querySelector(".buttonred");
    button.addEventListener("click", onClick);
    var people = [];


        var name = document.querySelector("#name");
        var address = document.querySelector("#address");
        var GPA = document.querySelector("#gpa");
        var date = document.querySelector("#date");
        var average = document.querySelector("#gpaavg");





    function Students(n, gpa, st, ci, sta ){
        this.name = n;
        this.address = {street: st, city: ci , state: sta};
        this.GPA = gpa;
        this.Date = theDate();
        this.average = 0;

    }

    Students.prototype.getAverage = function () {
        var addedNumbers = 0;

        for (i = 0; i < this.GPA.length; i++) {
            addedNumbers += this.GPA[i];
        }
        var average = addedNumbers / this.GPA.length;
        return average.toFixed(2);
    };





    function createPeople() {
        for (var i = 0; i < 3; i++){
            switch (i){
                case 0:
                    var nPerson = new Students("Kase Tebo",[3.25, 4.0, 3.75], "3819 sutton place blvd", "Winter Park", "Florida");
                    nPerson.average = nPerson.getAverage();
                    people.push(nPerson);
                    break;
                case 1:
                    nPerson = new Students("Santa Claus", [4.0, 4.0, 2], "265 Christmas Ave", "Christmas Town", "Alaska");
                    nPerson.average = nPerson.getAverage();
                   people.push(nPerson);
                    break;
                case 2:
                    nPerson = new Students("Peter Pippin", [3.5, 2.75, 3.25], "225 Peters Dr", "Petersburg", "New York");
                    nPerson.average = nPerson.getAverage();
                    people.push(nPerson);
                    break;
            }
        }

    }


    createPeople();
    logStuff(people);



        var i = 0;
        function onClick(e) {


            name.innerHTML = "Name: " + people[i].name;
            address.innerHTML = "Address: " + people[i].address.street + " " + people[i].address.city + " " + people[i].address.state;
            GPA.innerHTML = "GPA: " + people[i].GPA;
            date.innerHTML = "Date: " + people[i].Date;
            average.innerHTML = "Average: " + people[i].average;
            if (i == 2){
            button.innerHTML = "Done!";

            button.removeEventListener("click", onClick);
                }



           i++
    }
    function logStuff(arr) {
        for (i = 0; i < arr.length; i++) {
            console.log(
                "Name: " + arr[i].name + "\n" +
                    "Address: " + arr[i].address.street + " " + arr[i].address.city + " " + arr[i].address.state + "\n" +
                    "GPA: " + arr[i].GPA + "\n" +
                    "Date: " + arr[i].Date + "\n" +
                    "Average: " + arr[i].average + "\n" +
                    "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
            );
        }
    }

    function theDate() {
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        myDate = new Date();
        var day = myDate.getDate();
        var month = myDate.getMonth() + 1;
        var year = myDate.getFullYear();
        return month + "/" + day + "/" + year;
    }


})();