<html>
    <head>
        <title>DOM Example</title>
        <style>
            body{
                background-color: rgba(243, 220, 204, 0.979);
                align-items: center;
                display: flex;
                flex-direction: column;
            }
        button{
            border: none;
            padding: 10px;
            background-color: rgba(231, 103, 18, 0.979);
            color:white;
            border-radius: 10px;
            cursor:pointer;
        }

        input{
            width: 200px;
            padding: 12px;
            border-radius: 10px;
            cursor: text;
        }
    </style>
    </head>
    <body>

        <h1 id="title">Hello World</h1>
        <button onclick="changetext()">Click Me to change the text</button><br><br><br>
    
    <script>
        function changetext() {
            document.getElementById("title").innerHTML = "Welcome to JavaScript";
        }
    </script>

        <button onclick="changecolor()">Click Me to change background color</button><br><br><br>
    
    <script>
        function changecolor() {
            document.body.style.backgroundColor = "lightblue";
        }
    </script>



    <input type="text" id="name" placeholder="Enter Your Name"><br>
    <button onclick="showname()">Submit to show the name</button> 
    <h4 id="result"></h4>
    <script>
        function showname() {
            let username = document.getElementById("name").value;

            document.getElementById("result").innerHTML = "Hello:) " + username;
        }
    </script>
    <br><br>

    <p id="para">This is a paragraph</p>
    <button onclick="hidetext()">Hide</button><br>
    <button onclick="showtext()">Show</button><br>

    <script>
        function hidetext() {
            document.getElementById("para").style.display="none";
        }
        function showtext() {
            document.getElementById("para").style.display="block";
        }
    </script>
    <br><br>
    <img id="img" src="shinchan.jpg" width="200">
    <br><br>

    <button onclick="changeImage()">Change Image</button>

    <script>
        function changeImage() {
            document.getElementById("img").src = "shin.png";
        }
    </script>
    <br><br>

    <input type="text" id="item"><br>

    <button onclick="addItem()">Add</button>

    <ul id="list"></ul>

    <script>
    function addItem()
    {
        let value =
        document.getElementById("item").value;

        let li = document.createElement("li");

        li.innerHTML = value;

        document.getElementById("list").appendChild(li);
    }
    </script>
    <br><br>

    <h4 id="count">0</h4>

    <button onclick="increase()">Increase</button><br>

    <button onclick="decrease()">Decrease</button>

    <script>
    let count = 0;

    function increase()
    {
        count++;

        document.getElementById("count").innerHTML = count;
    }

    function decrease()
    {
        count--;

        document.getElementById("count").innerHTML = count;
    }
    </script>
    <br><br>

    <input type="text" id="username">

    <button onclick="validate()">Submit</button><br>

    <p id="msg"></p>

    <script>
    function validate()
    {
        let user =
        document.getElementById("username").value;

        if(user == "")
        {
            document.getElementById("msg").innerHTML =
            "Username cannot be empty";
        }
        else
        {
            document.getElementById("msg").innerHTML =
            "Form Submitted";
        }
    }
    </script>
    </body>
</html>


