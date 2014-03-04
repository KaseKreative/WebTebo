/**
 * Created by KaseTebo on 2/22/14.
 */
(function(){

    function Car(c,d,p){
        this.color = c;
        this.doors = d;
        this.price = p;
    }

    var myCar = new Car("black", 4, 5000);

    var pCar = new Car("Red", 2, 10,000);


    var cars = [myCar, pCar];
    console.log(cars[1].price);

})();