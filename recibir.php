<!DOCTYPE html>
<html lang="ES">

<head>
	<title>Recibir pedido</title>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<link rel="stylesheet" href="./styles.css">
</head>

<body>
	<div id="main">
		<i style="display: none;" id="notification" class="icon material-icons">notifications_active</i>
		<audio id="audio" >
			<source src="alert.wav" type="audio/wav">
		</audio>
		<table id="total">
			<tr><td style="width: 10%; text-align: center;"></td><td style="width: 10%; text-align: center;">Und.</td><td style="width: 10%; text-align: center;"></td><td style="padding-left: 10px;">DESCRIPCIÓN</td><td></td></tr>
		</table>
	</div>
	<?php
		$conn = new mysqli("mysql.webcindario.com", "test_game", "test_game0");// Create connection
		if ($conn->connect_error){
			die("No pudo conectarse: " . $conn->connect_error);
		}
		$sql = "SELECT * FROM test_game.Pedidos";
		$result = $conn->query($sql);
		if ($result !== TRUE){
			echo "Error: " . $sql . "<br>" . $conn->error;
		}if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "desc: " . $row["pedido"] "<br>";
    }
} else {
    echo "0 results";
}
		$conn->close();
	?>
	<script>
		/*var audio=document.getElementById("audio");
		var notification=document.getElementById("notification");
		var checkCookie = function() {
			var pedido=getCookie("pedido");
			if (pedido!==""){
				audio.autoplay=true;
				notification.style.display="block";
			}
		}();
		if (!audio.autoplay) window.setInterval(checkCookie, 100); // run every 100 ms
		else{
			setCookie("pedido","",-1);
			audio.load();
			audio.autoplay=false;
			notification.style.display="none";
		}*/
	</script>
</body>

</html>