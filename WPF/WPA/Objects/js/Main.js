/**
 * Created by KaseTebo on 2/25/14.
 */

(function () {
    var interval = setInterval(update, 3000);
    var people = [];

    // Person 1
    var name1 = document.querySelector("#r1c1");
    var job1 = document.querySelector("#r1c2");
    var action1 = document.querySelector("#r1c3");

    // Person 2
    var name2 = document.querySelector("#r2c1");
    var job2 = document.querySelector("#r2c2");
    var action2 = document.querySelector("#r2c3");

    //Person 3
    var name3 = document.querySelector("#r3c1");
    var job3 = document.querySelector("#r3c2");
    var action3 = document.querySelector("#r3c3");


    function populateHTML() {

        for (var i = 0; i < 3; i++) {
            var nPerson = new Person();
            people.push(nPerson);
            switch (i) {
                case 0:
                    name1.innerHTML = people[i].name;
                    job1.innerHTML = people[i].job;

                    break;
                case 1:
                    name2.innerHTML = people[i].name;
                    job2.innerHTML = people[i].job;

                    break;
                case 2:
                    name3.innerHTML = people[i].name;
                    job3.innerHTML = people[i].job;

                    break;
            }
        }

    }


    function update() {

                    action1.innerHTML = people[0].whatDoing();

                    action2.innerHTML = people[1].whatDoing();

                    action3.innerHTML = people[2].whatDoing();


        }







populateHTML();
    update();
})();