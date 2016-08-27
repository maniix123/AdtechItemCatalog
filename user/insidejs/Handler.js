//------------------------------------------------------------------------------------------------------------------------------------------------//
$(document).ready(function(){
	var products = document.getElementById('products');
	var carts = document.getElementById('cart');
	if(products)
	{
		mouse();
		keyboard();
		headset();
		mousepad();
		displaycartcontents();
	}
	else if(carts)
	{
		displayitem();
	}
});
//------------------------------------------------------------------------------------------------------------------------------------------------//
	function mouse()
	{
        a = new XMLHttpRequest();
        a.onreadystatechange = function() 
		{
            if (a.readyState == 4 && a.status == 200) 
			{
				document.getElementById('mousedisplay').innerHTML = '';
				var product = JSON.parse(a.responseText);
				// alert(a.responseText);
				for(var i = 0; i< product.length; i++)
				{						
					var values = '<div class = "col-sm-12">'+
							'<p>Name: <b>'+product[i].Product_Name+'</b></p>'+
							'<p>Brand: <b>'+product[i].Product_Brand+'</b></p>'+
							'<p>Price: &#8369;' +product[i].Product_Price +'</p>'+
							'<img src="data:image/png;base64, '+product[i].Image+'" class = "img-responsive img-thumbnail" style = "margin-bottom: 10px;"/>'+
							'<a href = "addtocart.html?id='+product[i].Product_ID+'" class = "btn btn-primary btn-block"> <span class="glyphicon glyphicon-shopping-cart"></span> Add to Cart</a>'+
							'<hr></div>';
					$('#mousedisplay').append(values).hide().fadeIn('slow');		
				}
            }
        }	
		a.open("GET","http://www.smceventmonitoring.eu.pn/daison/mouse.php",true);
		a.send();
	}
//------------------------------------------------------------------------------------------------------------------------------------------------//
	function keyboard()
	{
        ab = new XMLHttpRequest();
        ab.onreadystatechange = function() 
		{
            if (ab.readyState == 4 && ab.status == 200) 
			{
				$('#keydisplay').empty();
				var aynaku = JSON.parse(ab.responseText);
				for(var i = 0; i< aynaku.length; i++)
				{						
					var values2 = '<div class = "col-sm-12">'+
							'<p>Name: <b>'+aynaku[i].Product_Name+'</b></p>'+
							'<p>Brand: <b>'+aynaku[i].Product_Brand+'</b></p>'+
							'<p>Price: &#8369;' +aynaku[i].Product_Price +'</p>'+
							'<img src="data:image/png;base64,'+aynaku[i].Image+'" class = "img-responsive img-thumbnail" style = "margin-bottom: 10px;"/>'+
							'<a href = "addtocart.html?id='+aynaku[i].Product_ID+'" class = "btn btn-primary btn-block"><span class="glyphicon glyphicon-shopping-cart"></span> Add to Cart</a>'+							
							'<hr></div>';
					$('#keydisplay').append(values2).hide().fadeIn('slow');		
				}
            	}
        }	
		ab.open("GET","http://www.smceventmonitoring.eu.pn/daison/keyboard.php",true);
		ab.send();
	}
//------------------------------------------------------------------------------------------------------------------------------------------------//
	function headset()
	{
        xml = new XMLHttpRequest();
        xml.onreadystatechange = function() 
		{
            if (xml.readyState == 4 && xml.status == 200) 
			{
				$('#headsetdisplay').empty();				
				var head = JSON.parse(xml.responseText);
				for(var i = 0; i< head.length; i++)
				{						
					var values2 = '<div class = "col-sm-12">'+
							'<p>Name: <b>'+head[i].Product_Name+'</b></p>'+
							'<p>Brand: <b>'+head[i].Product_Brand+'</b></p>'+
							'<p>Price: &#8369;' +head[i].Product_Price +'</p>'+
							'<img src="data:image/png;base64,'+head[i].Image+'" class = "img-responsive img-thumbnail" style = "margin-bottom: 10px;"/>'+
							'<a href = "addtocart.html?id='+head[i].Product_ID+'" class = "btn btn-primary btn-block"><span class="glyphicon glyphicon-shopping-cart"></span> Add to Cart</a>'+							
							'<hr></div>';
					$('#headsetdisplay').append(values2).hide().fadeIn('slow');		
				}
            	}
        }	
		xml.open("GET","http://www.smceventmonitoring.eu.pn/daison/headset.php",true);
		xml.send();
	}
//------------------------------------------------------------------------------------------------------------------------------------------------//
	function mousepad()
	{
        abcde = new XMLHttpRequest();
        abcde.onreadystatechange = function() 
		{
            if (abcde.readyState == 4 && abcde.status == 200) 
			{
				$('#mousepaddisplay').empty();				
				var mousepads = JSON.parse(abcde.responseText);
				for(var i = 0; i< mousepads.length; i++)
				{						
					var values3 = '<div class = "col-sm-12">'+
							'<p>Name: <b>'+mousepads[i].Product_Name+'</b></p>'+
							'<p>Brand: <b>'+mousepads[i].Product_Brand+'</b></p>'+
							'<p>Price: &#8369;' +mousepads[i].Product_Price +'</p>'+
							'<img src="data:image/png;base64,'+mousepads[i].Image+'" class = "img-responsive img-thumbnail" style = "margin-bottom: 10px;"/>'+
							'<a href = "addtocart.html?id='+mousepads[i].Product_ID+'" class = "btn btn-primary btn-block"><span class="glyphicon glyphicon-shopping-cart"></span> Add to Cart</a>'+							
							'<hr></div>';
					$('#mousepaddisplay').append(values3).hide().fadeIn('slow');		
				}
            	}
        }	
		abcde.open("GET","http://www.smceventmonitoring.eu.pn/daison/mousepad.php",true);
		abcde.send();
	}
//------------------------------------------------------------------------------------------------------------------------------------------------//
	function displayitem()
	{
		var Product_ID = location.search.split('id=')[1];
		ht = new XMLHttpRequest();
		ht.onreadystatechange = function() 
		{
			if (ht.readyState == 4 && ht.status == 200) 
			{
				$('#display_item').empty();
				var cart = JSON.parse(ht.responseText);
				for(var i = 0; i< cart.length; i++)
				{						
					var values = '<div class = "col-sm-12">'+
							'<h4 class = "text-center">Add to cart</h4><hr/>'+
							'<p>Name: <b>'+cart[i].Product_Name+'</b></p>'+
							'<p>Brand: <b>'+cart[i].Product_Brand+'</b></p>'+
							'<p>Type: <b>'+cart[i].Product_Type+'</b></p>'+
							'<p>Price: &#8369;' +cart[i].Product_Price +'</p>'+
							'<img src="data:image/png;base64,'+cart[i].Image+'" class = "img-responsive img-thumbnail" style = "margin-bottom: 10px;"/>'+
							'<input type="number" id = "quantity" min = "1" class = "form-control" placeholder = "Enter quantity here"/><br>'+
							'<a href = "#" onclick="insertintocart()" class = "btn btn-success btn-block"> <span class="glyphicon glyphicon-plus"></span> Confirm</a>'+							
							'<hr></div>';
					$('#display_item').append(values).hide().fadeIn('slow');		
				}
			}
		}
		var params = "Product_ID="+Product_ID;
		ht.open("POST","http://www.smceventmonitoring.eu.pn/daison/displayitem.php",true);
		ht.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		ht.setRequestHeader("Content-length", params.length);
		ht.send(params);
	}
//------------------------------------------------------------------------------------------------------------------------------------------------//
	function insertintocart() 
	{
        var yt = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
        yt.transaction(insertintocart2, errorCB);
    }
	function insertintocart2(tx) {
        tx.executeSql('SELECT * FROM User', [], insertintocart3, errorCB);
    }
	function insertintocart3(tx, results) 
	{
		var User = results.rows.item(0).name;
		var Product_ID = location.search.split('id=')[1];
		var quantity = document.getElementById('quantity').value;
		
		if(quantity == '')
		{
			alert('Please provide a quantity.');
		}
		else
		{
			lmx = new XMLHttpRequest();
			lmx.onreadystatechange = function() 
			{
				if (lmx.readyState == 4 && lmx.status == 200) 
				{
					if(lmx.responseText == 1)
					{
						alert('Inserted to cart!');
						// window.location.href = "myreservations.html";
						window.location.href = "insideproducts.html";
					}
				}
			}
			var params = "username="+User+"&Product_ID="+Product_ID+"&quantity="+quantity;
			lmx.open("POST","http://www.smceventmonitoring.eu.pn/daison/inserttocart.php",true);
			lmx.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			lmx.setRequestHeader("Content-length", params.length);
			lmx.send(params);				
		}	
	}
//------------------------------------------------------------------------------------------------------------------------------------------------//
	function displaycartcontents()
	{
        var da = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
        da.transaction(displaycartcontents2, errorCB);
	}
	function displaycartcontents2(tx) {
        tx.executeSql('SELECT * FROM User', [], displaycartcontents3, errorCB);
    }
 	function displaycartcontents3(tx, results) 
	{
		var User = results.rows.item(0).name;
		// $('#cart_contents').append('<tr><td>Hello</td><td>Hi</td></tr>');
		xll = new XMLHttpRequest();
		xll.onreadystatechange = function() 
		{
			if (xll.readyState == 4 && xll.status == 200) 
			{
				if(xll.responseText == 1)
				{
					$('#cart_contents').append('<tr colspan = "3"><td><center>You have no orders yet</center></tr>').hide().fadeIn();
				}
				else
				{
					var headingrows = '<tr id = "cutomer_orders">'+
									 '<th>Product Name</th>'+
									 '<th>#</th>'+
									 '<th>Payment</th>'+
								    '</tr>';
					$('#cart_contents').append(headingrows);

					var contents = JSON.parse(xll.responseText);
					for(var i = 0; i < contents.length; i ++)
					{
						var values = '<tr id = "last_row">'+
									'<td>'+contents[i].Product_Name+'</td>'+
									'<td>'+contents[i].NoOfOrders+'</td>'+
									'<td>&#8369; '+contents[i].Price+'</td>'+
								   '</tr>';
						$('#cutomer_orders').after(values).hide().fadeIn('slow');
					}
					$('#cart_contents tr:last').after('<tr><td>Total</td><td></td><td>&#8369; '+contents[0].Total+'</td></tr>');
				}
			}
		}
		var params = "Username="+User;
		xll.open("POST","http://www.smceventmonitoring.eu.pn/daison/displaycartcontents.php",true);
		xll.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xll.setRequestHeader("Content-length", params.length);
		xll.send(params);				
	}
//------------------------------------------------------------------------------------------------------------------------------------------------//
		// $('#room').append('<div class="input-group"><span class="input-group-addon">'+
  //               '<i class="fa fa-bed"></i></span>'+
  //               '<input type="text" class="form-control" id="roomnumber" readonly value = "'+id+'">'+
  //       		 '</div>');
		// $('#price').append('<div class = "input-group"><span class = "input-group-addon">'+
		// 	'<i class = "fa">&#8369;</i></span>'+
		// 	'<input type="text" class="form-control" id="roomprice" readonly value = "'+price+'">'+
		// 	'</div>');
	// }
	// function outsidereserve()
	// {
	// 	var name = document.getElementById('name').value;
	// 	var room = document.getElementById('roomnumber').value;
	// 	var price = document.getElementById('roomprice').value;
	// 	var username = document.getElementById('username').value;
	// 	var password = document.getElementById('password').value;
	// 	var age = document.getElementById('age').value;
	// 	var address = document.getElementById('address').value;
	// 	if(name == '' || username == '' || password == '' || age == '' || address == '')
	// 	{
	// 		alert('Please fill out all of the forms');
	// 	}
	// 	else
	// 	{
			// ht = new XMLHttpRequest();
			// ht.onreadystatechange = function() 
			// {
			// 	if (ht.readyState == 4 && ht.status == 200) 
			// 	{
			// 		if(ht.responseText == 1)
			// 		{
			// 			var jj = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
			// 			jj.transaction(panction, errorCB);							
			// 			alert('Reservation success!');
			// 			window.location.href = 'user/homepage.html';
			// 		}
			// 		else
			// 		{
			// 			alert(th.responseText);
			// 		}
			// 	}
			// }
			// var params = "customername="+name+"&room="+room+"&price="+price+"&username="+username+"&password="+password+"&age="+age+"&address="+address;
			// ht.open("POST","http://www.smceventmonitoring.eu.pn/Sportsbucks/reserve.php",true);
			// ht.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			// ht.setRequestHeader("Content-length", params.length);
			// ht.send(params);
	// 	}
	// }
	// function panction(tx) {
	// 	var username = document.getElementById('username').value;
	// 	tx.executeSql('DROP TABLE IF EXISTS User');
 //        	tx.executeSql('CREATE TABLE IF NOT EXISTS User (name TEXT)');
	// 	tx.executeSql("INSERT INTO User (name) VALUES (?)",[username]);
 //    }
	function errorCB(err) {
		alert('There is an error!: '+err.message+ '\nSecond Message:!' +err);
    }
	// function insidereservation() {
 //        var yt = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
 //        yt.transaction(inside2, errorCB);
 //    }
	// function inside2(tx) {
 //        tx.executeSql('SELECT * FROM User', [], inside3, errorCB);
 //    }
	// function inside3(tx, results) 
	// {
	// 	var User = results.rows.item(0).name;
	// 	var room = document.getElementById('roomnumber').value;
	// 	var price = document.getElementById('roomprice').value;
	// 	// alert(User);	
	// 	xml = new XMLHttpRequest();
	// 	xml.onreadystatechange = function() 
	// 	{
	// 		if (xml.readyState == 4 && xml.status == 200) 
	// 		{
	// 			if(xml.responseText == 1)
	// 			{
	// 				alert('Room reserved!');
	// 				window.location.href = "myreservations.html";
	// 			}
	// 		}
	// 	}
	// 	var params = "username="+User+"&room="+room+"&price="+price;
	// 	xml.open("POST","http://www.smceventmonitoring.eu.pn/Sportsbucks/insidereserve.php",true);
	// 	xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	// 	xml.setRequestHeader("Content-length", params.length);
	// 	xml.send(params);	
	// }
	// function reservations() {
 //        var yt = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
 //        yt.transaction(reservations2, errorCB);
 //    }
	// function reservations2(tx) {
 //        tx.executeSql('SELECT * FROM User', [], reservations3, errorCB);
 //    }
	// function reservations3(tx, results) 
	// {
	// 	var User = results.rows.item(0).name;
	// 	xml = new XMLHttpRequest();
	// 	xml.onreadystatechange = function() 
	// 	{
	// 		if (xml.readyState == 4 && xml.status == 200) 
	// 		{
				// var arrayss = JSON.parse(xml.responseText);
				// for(var i = 0; i< arrayss.length; i++)
				// {						
				// 	var values = '<tr><td>'+arrayss[i].Room_Number+'</td>'+
				// 			   '<td>'+arrayss[i].Time_Reserved+'</td>'+
				// 			   '<td>'+arrayss[i].Date_Reserved+'</td>'+
				// 			   '<td>'+arrayss[i].Payment+'</td></tr>';
				// 	$('#data').append(values).hide().fadeIn('slow');		
				// }
	// 		}
	// 	}
	// 	var params = "customername="+User;
	// 	xml.open("POST","http://www.smceventmonitoring.eu.pn/Sportsbucks/reservations.php",true);
	// 	xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	// 	xml.setRequestHeader("Content-length", params.length);
	// 	xml.send(params);	
	// }
