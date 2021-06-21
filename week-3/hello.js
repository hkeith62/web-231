
 <!DOCTYPE html>
<html lang="en"> 
<head>
    <meta charset="UTF-8" /> 
    <title>WEB 231 – Enterprise JavaScript I</title>
    <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
    <meta name="keywords" content="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
    <meta name="robots" content="nofollow" />
    <meta name="author" content="Keith Hall" />
	<link rel="stylesheet" href="../global.css" />
	<link rel="stylesheet" href="hall-temp-conversion.css" />
    <!-- Google fonts for Oswald -->
    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500;700&display=swap" rel="stylesheet" />
</head>
<body>
    
    <div id="container">
	
	<!-- Card content starts here. -->
	    <div class= "card">
		    <h1 class= "app-header">Welcome to the Temperature Conversion App!</h1>
		    <div class= "card-title">Fahrenheit to Celsius Converter</div>
			<div class= "card-content">
			    <div class= "form">
				    <div class= "form-feild">
					    <label for="txtFahrenheit">Fahrenheit value:</label>
					    <input type="text" id="txtFahrenheit" name="txtFahrenheit" value= "80" />
					</div>
				    <div class="form-field">
					<!-- HTML for styling the conversion button and onclick event. -->
                        <button type="submit" class="btn btn-primary full-width" onclick="myFunction()">Convert Temperature</button>
                    </div>
				</div>
			</div>
		</div>
	    <div class= "card">
		    <div class= "card-title">Conversion Results</div> 
		    <p id= "demo"></p>
	    </div>
	</div>
	<a href= "../index.html" class="return-home">Return</a>
<script>
function myFunction() {
  var farenheit = document.getElementById("txtFahrenheit").value; // Captures the inputted value of the textfeild with id= txtFahrenheit and assigns it to the variable fahrenheit. 
  document.getElementById("demo").innerHTML = ((parseFloat(farenheit) - 32) / 1.8).toFixed(2); // The inputted value is converted to celcius and fixed to 2 decimal places.
src="hello.js"
}
</script>
</body>
</html>
console.log("hello world");
 
 