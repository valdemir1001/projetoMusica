function myFunction() {
    var hour = new Date().getHours();
    var greeting;
    if (hour < 18) {
        greeting = "Bom Dia! Galera do ROCK";
    } else {
        greeting = "Boa Noite! Galera do ROCK";
    }
    document.getElementById("demo").innerHTML = greeting;
}