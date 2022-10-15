function Arrayfunc() {
    var movies = ["Inception","Shutter Island","Shawshank Redemption","The Dark Knight","Infinity War"];
    var fourthMovieVal = movies[3];
    if (fourthMovieVal.charAt(0)==="I"){
        console.log("Yay");
    }
    else {
        console.log("Nay");
    }

    movies = [];
    movies.push("Inception");
    movies.push("Shutter Island");
    movies.push("Shawshank Redemption");
    movies.push("Iron Man");
    movies.push("Infinity War");

    var fourthMovieVal = movies[3];
    if (fourthMovieVal.charAt(0)==="I"){
        console.log("Yay");
    }
    else {
        console.log("Nay");
    }
}

function Objectfunc() {
    var car = {
        model: "Nissan March",
        color: "Green",
        price: 35
    }
    
    var priceCheck = car.price;
    
    if(priceCheck>50){
        console.log("Expensive");
    }
    else {
    console.log("Affordable");
    }
    
    console.log(car.color);
    
}

Arrayfunc();
Objectfunc();
