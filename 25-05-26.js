<html>
    <head>
        <title>Animal Match Game</title>
    </head>
    <style>
       body{
        text-align: center;
        font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        background-color:antiquewhite;
        display: flex;
        justify-content: center;
        align-items: center;
       } 
       #userAnimal{
        padding: 10px 15px;
        font-size: 15px;
        border: 1px solid rgb(233, 233, 122);
        border-radius: 7px;
        cursor:pointer;
        width:250px;
       }
       #randomAnimal{
        font-size:30px;
        font-weight: bold;
        margin:20px;
        border: 1px solid black;
        background-color: rgb(183, 65, 14);
        height:100px;
        width:150px;
        color:white;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        border: 1px solid rgb(233, 179, 155);
       }
       button{
        padding:10px 20px;
        font-size: 15px;
        cursor: pointer;
        background-color: rgba(238, 238, 155, 0.596);
        border-radius: 8px;
        border: 1px solid rgb(233, 233, 122)
       }
       #result{
        margin-top: 15px;
        font-size: 18px;
        font-weight:bold;
       }
       .box{
        width:450px;
        height:450px;
        background-color:beige;
        border-radius: 10px;
        border: 2px solid rgb(209, 164, 105);
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
       }

    </style>
    <body>
    <div class="box">
        <h3>Animal Match Game</h3>
        <select id="userAnimal">
            <option>--Select--</option>
            <option>Elephant🐘</option>
            <option>Giraffe🦒</option>
            <option>Lion🦁</option>
            <option>Tiger🐯</option>
            <option>Rabbit🐰</option>
            <option>Cat🐱</option>
            <option>Dog🐶🐾</option>
            <option>Bear🐻</option>
        </select>

        <br><br>

        <div id="randomAnimal">?</div>
        <button onclick="generateAnimal()">Generate Random Animal</button>
        <h3 id="result"></h3>
    </div>
        <script>
            const animals = ["Elephant🐘","Giraffe🦒","Lion🦁","Tiger🐯","Rabbit🐰","Cat🐱","Dog🐶🐾","Bear🐻"];

            function generateAnimal() {
                let userChoice = document.getElementById("userAnimal").value;

                let counter = 0;

                let intreval = setInterval(() => {
                    let randomIndex = Math.floor(Math.random() * animals.length);
                    document.getElementById("randomAnimal").innerHTML=animals[randomIndex];
                    counter++;

                    if(counter === 20){
                        clearInterval(intreval);

                        let finalIndex = Math.floor(Math.random() *animals.length);
                        let finalAnimal = animals[finalIndex];
                        document.getElementById("randomAnimal").innerHTML = finalAnimal;

                        if(userChoice === finalAnimal){
                            document.getElementById("result").innerHTML = "🎉Hurrayyyyy!!!!";
                            document.getElementById("result").style.color = "green";
                        }
                        else{
                            document.getElementById("result").innerHTML = "❌Not Matched!!!";
                             document.getElementById("result").style.color = "red";
                        }
                    }
                },100)
            }
        </script>
    </body>
</html>
