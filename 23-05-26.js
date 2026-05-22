<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Events Example</title>

    <style>

        body{
            font-family: Arial, sans-serif;
            text-align: center;
            background-color: #f0f0f0;
            margin-top: 50px;
        }

        h3{
            color: darkblue;
        }

        #clock{
            font-size: 40px;
            color: green;
            margin: 20px;
        }
        #timerBox{
            width: 350px;
            margin: 20px auto;
            padding: 20px;
            background-color: white;
            border: 3px solid darkblue;
            border-radius: 15px;
        }

        #box{
            width: 300px;
            height: 180px;
            background-color: rgb(159, 200, 219);
            margin: 30px auto;
            line-height: 180px;
            font-size: 24px;
            border-radius: 10px;
            cursor: pointer;
            transition: 0.4s;
        }

        button{
            padding: 10px 20px;
            font-size: 18px;
            margin: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            background-color: darkblue;
            color: white;
        }

    </style>
</head>

<body>

    <h3>DOM Events + Timer</h3>
    <div id="timerBox">
        <div id="clock">0</div>
    
        <button id="startBtn">Start</button>
        <button id="stopBtn">Pause</button>
        <button id="restartBtn">Restart</button>
    </div>

    <div id="box">
        Click or Hover Me
    </div>

    <script>
        let count = 0;
        let timer = null;

        // Start Button
        document.getElementById("startBtn").addEventListener("click", function(){

            if(timer === null){

                timer = setInterval(function(){

                    count++;
                    document.getElementById("clock").innerText = count;

                }, 1000);

            }

        });

        document.getElementById("stopBtn").addEventListener("click", function(){

            clearInterval(timer);
            timer = null;

        });

        // Restart Button
        document.getElementById("restartBtn").addEventListener("click", function(){

            clearInterval(timer);

            count = 0;
            document.getElementById("clock").innerText = count;

            timer = setInterval(function(){

                count++;
                document.getElementById("clock").innerText = count;

            }, 1000);

        });
        let box = document.getElementById("box");

        // Mouse Over Event
        box.addEventListener("mouseover", function(){

            box.style.backgroundColor = "PowderBlue";
            box.innerText = "Mouse Over Event";

        });

        // Mouse Out Event
        box.addEventListener("mouseout", function(){

            box.style.backgroundColor = "Darkblue";
            box.style.color = "white";
            box.innerText = "Click or Hover Me";

        });

        // Click Event
        box.addEventListener("click", function(){

            box.style.backgroundColor = "LightSeaGreen";
            box.style.color = "white";
            box.innerText = "Box Clicked!";

        });

    </script>

</body>
</html>
