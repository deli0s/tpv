<!DOCTYPE html>
<html lang="ES">

<head>
	<title>Enviar pedido</title>
	<meta http-equiv="content-type" content="text/html; charset=UTF-8" />
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<link rel="stylesheet" href="./styles.css">
	<script type="text/javascript" src="./script.js"></script>
</head>

<body>
	<div id="main">
		<?php
			$conn = new mysqli("mysql.webcindario.com", "test_game", "test_game0");// Create connection
			if ($conn->connect_error){
				die("No pudo conectarse: " . $conn->connect_error);
			}
			$sql = "SELECT * FROM test_game.Pedidos";
			$result = $conn->query($sql);
			if ($result){
				$wait=TRUE;
				if ($result->num_rows == 0){
					if(isset($_POST['Enviar'])){ //check if form was submitted
						if(count($_POST)>1){
							foreach ($_POST as $key => $value){
								if ($value!="Enviar"){
									$sql = "INSERT INTO test_game.Pedidos (`pedido`) VALUES ('$value')";
									if ($conn->query($sql) !== TRUE){
										echo "Error: " . $sql . "<br>" . $conn->error;
									}
								}
							}
						}else $wait=FALSE;
					}else $wait=FALSE;
				}
				if ($wait){
					echo "Esperando confirmación...";
					header("Refresh:3");
				}else{
					echo '
					<div id="buttons">
					</div>
					<table id="total">
						<tr><td style="width: 10%; text-align: center;"></td><td style="width: 10%; text-align: center;">Und.</td><td style="width: 10%; text-align: center;"></td><td style="padding-left: 10px;">DESCRIPCIÓN</td><td></td></tr>
						<tr><td style="border-width: 0px;"></td><td style="border-width: 0px;"></td><td style="border-width: 0px;"></td>
						<td style="border-width: 0px;">
						<form id="form_pedido" action="" method="post">
							<input type="submit" class="enviar" name="Enviar" value="Enviar"/>
						</form></td></tr>
					</table>';
				}
			}else{
				echo "Error: " . $conn->error;
			}
			$conn->close();
		?>
	</div>
	<script>
		var list="AGUA;CAÑA;PANACHÉ;COCA-COLA;COLA ZERO;FANTA;F. LIMÓN;NESTEA;SPRITE;TONICA;SCH. LIMÓN;SCH. NARANJA;GINGER;REDBULL;MOJITO;ESTRELLA";
		var items_list=list.split(';');
		var n_items=items_list.length;
		var i_items=0;
		while (document.getElementsByClassName("item").length<n_items && i_items<n_items){
			addItem(items_list[i_items]);
			i_items++;
		}
		function addItem(nom){
			var place=document.getElementById("buttons");
			if (existeix(place)){
				var a_Item=document.createElement("button");
				a_Item.setAttribute('class','button item');
				a_Item.innerHTML=nom;
				a_Item.setAttribute('id',nom);
				a_Item.onclick=function(){
					var _item=document.getElementById("tr_"+nom);
					if (!existeix(_item)){
						addTr(nom);
						addInput(nom);
					}
				};
				place.insertBefore(a_Item,place.lastChild);
			}
		}
		function addInput(nom){
			var form_pedido=document.getElementById("form_pedido");
			if (existeix(form_pedido)){
				var a_Input=document.createElement("input");
				a_Input.setAttribute('type','text');
				a_Input.setAttribute('name',nom);
				a_Input.setAttribute('value',"1 "+nom);
				a_Input.style.display="none";
				a_Input.setAttribute('id',"in_"+nom);
				form_pedido.insertBefore(a_Input,form_pedido.lastChild);
			}
		}
		function addTr(nom){
			var list=document.getElementById("total");
			if (existeix(list)){
				var a_Tr=document.createElement("tr");
				a_Tr.setAttribute('id',"tr_"+nom);
				var a_Td0_0=document.createElement("td");
				a_Td0_0.style.textAlign="center";
				a_Td0_0.innerHTML='<i class="icon material-icons">remove_circle_outline</i>';
				a_Td0_0.onclick=function(){
					var _num=document.getElementById("num_"+nom);
					var _in=document.getElementById("in_"+nom);
					if (existeix(_num) && existeix(_in)){
						var old_v=Number(_num.innerHTML);
						if (old_v>1){
							_num.innerHTML=old_v-1;
							_in.value=old_v-1+" "+nom;
						}
					}
				};
				a_Tr.appendChild(a_Td0_0);
				var a_Td0_1=document.createElement("td");
				a_Td0_1.style.textAlign="center";
				a_Td0_1.setAttribute('id',"num_"+nom);
				a_Td0_1.innerHTML=1;
				a_Tr.appendChild(a_Td0_1);
				var a_Td0_2=document.createElement("td");
				a_Td0_2.style.textAlign="center";
				a_Td0_2.innerHTML='<i class="icon material-icons">add_circle_outline</i>';
				a_Td0_2.onclick=function(){
					var _num=document.getElementById("num_"+nom);
					var _in=document.getElementById("in_"+nom);
					if (existeix(_num) && existeix(_in)){
						var old_v=Number(_num.innerHTML);
						_num.innerHTML=old_v+1;
						_in.value=old_v+1+" "+nom;
					}
				};
				a_Tr.appendChild(a_Td0_2);
				var a_Td1=document.createElement("td");
				a_Td1.innerHTML=nom;
				a_Td1.style.paddingLeft="10px";
				a_Tr.appendChild(a_Td1);
				var a_Td2=document.createElement("td");
				a_Td2.style.textAlign="center";
				a_Td2.innerHTML='<i class="icon material-icons">delete</i>';
				a_Td2.onclick=function(){ deleteById("tr_"+nom);deleteById("in_"+nom);};
				a_Tr.appendChild(a_Td2);
				var _tbody=document.getElementsByTagName("tbody")[0];
				var _tr=_tbody.getElementsByTagName("tr");
				var _tr_size=_tr.length;
				_tbody.insertBefore(a_Tr,_tr[_tr_size-1]);
			}
		}
	</script>
</body>

</html>