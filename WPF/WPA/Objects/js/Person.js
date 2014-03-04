/**
 * Created by KaseTebo on 2/25/14.
 */

(function (){



    Person.jobs = ["Medic", "Teacher", "Crocodile Hunter", "Shark Wrangler", "Pokemon Master"];
    //Person.action = ["Studying", "Playing Video Games", "Poaching Kangaroos", "Intercourse"];
    Person.names = ["Kase", "Petey", "Saint Nick", "Jesus", "Joseph Stalin"];






    function Person (){
        this.name = Person.names[~~(Math.random()*Person.names.length)];

        this.action = ["Studying", "Playing Video Games", "Poaching Kangaroos", "Intercourse"];

        this.job = Person.jobs[~~(Math.random()*Person.jobs.length)];
        //this.row = "";
    }

    Person.prototype.whatDoing = function(){
         return this.action[~~(Math.random()*this.action.length)];
    };



       window.Person = Person;
})();