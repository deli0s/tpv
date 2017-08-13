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
		<?php
			$conn = new mysqli("mysql.webcindario.com", "test_game", "test_game0");// Create connection
			if ($conn->connect_error){
				die("No pudo conectarse: " . $conn->connect_error);
			}
			if(isset($_POST['ok'])){ //check if form was submitted
				$sql_ok = "TRUNCATE test_game.Pedidos";
				$result_ok = $conn->query($sql_ok);
				if (!$result_ok){
					echo "Error: " . $conn->error;
				}
			}
			$sql = "SELECT * FROM test_game.Pedidos";
			$result = $conn->query($sql);
			if ($result){
				echo '<table id="total" style="margin: auto;"><tbody>
					<tr><td style="width: 10%; text-align: center;"></td><td style="width: 10%; text-align: center;">Und.</td><td style="width: 10%; text-align: center;"></td><td style="padding-left: 10px;">DESCRIPCIÓN</td><td></td></tr>';
				if ($result->num_rows > 0){
					while($row = $result->fetch_assoc()){// output data of each row
						$uds=(string)intval($row["pedido"]);
						if ($uds!="0") echo '<tr><td></td><td style="width: 10%; text-align: center;">'.$uds.'</td><td></td><td style="padding-left: 10px;">'.str_replace($uds,"",$row["pedido"]).'</td><td></td></tr>';
					}
					echo '
						<i id="notification" class="icon material-icons">notifications_active</i>
						<audio id="audio" autoplay>
							<source src="alert.wav" type="audio/wav">
						</audio>';
				}else{
					header("Refresh:3");
				}
				echo '<tr><td></td><td></td><td></td><td>
						<form id="ok_pedido" action="" method="post">
							<input type="submit" class="enviar" name="ok" value="Confirmar"/>
						</form>
					</td><td></td></tr>
				</tbody></table>';
			}else{
				echo "Error: " . $conn->error;
			}
			$result->free();
			$conn->close();
		?>
	</div>
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