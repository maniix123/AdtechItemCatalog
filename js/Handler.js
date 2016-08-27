	function Login() 
	{
		switch(checkconnection())
		{
			case 'false': 
					alert('You need to connect to the internet!');
			break;
			
			case 'LoginProcess':
					LoginProcess();
			break;
		default:
		}
	}
	function checkconnection()
	{
		var networkState = navigator.connection.type;
		if(networkState == Connection.WIFI || networkState == Connection.CELL_4G || networkState == Connection.CELL_3G || networkState == Connection.CELL_2G)
		{
			return 'LoginProcess';
		}
		else
		{
			return 'false';
		}
	}
	function alertDismissed(){
		
	}
	function LoginProcess()
	{
		var LoginUsername = document.getElementById('LoginUsername').value;
		var LoginPassword = document.getElementById('LoginPassword').value;
		if(LoginUsername == '' || LoginPassword == '')
		{
			alert('Please do not leave any empty spaces');
		}
		else
		{
			xmlhttp = new XMLHttpRequest();
			xmlhttp.onreadystatechange = function() 
			{
				if (xmlhttp.readyState == 4 && xmlhttp.status == 200) 
				{
					var Response = xmlhttp.responseText +"";
					if(Response == 1)
					{
						var db = window.openDatabase("Database", "1.0", "Cordova Demo", 200000);
						db.transaction(inputusername, errorCB);
						alert( 'Login Sucessful!!');
						window.location.href = 'user/homepage.html';
					}
					else
					{
						alert(Response);
					}
				}
			}
			var params = "Username="+LoginUsername+ "&Password="+ LoginPassword;
			xmlhttp.open("POST","http://www.smceventmonitoring.eu.pn/Sportsbucks/user.php",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.setRequestHeader("Content-length", params.length);
			xmlhttp.send(params);
		}
	}
	function inputusername(fa) {
		var LoginUsername = document.getElementById('LoginUsername').value;
		fa.executeSql('DROP TABLE IF EXISTS User');
        	fa.executeSql('CREATE TABLE IF NOT EXISTS User (name TEXT)');
		fa.executeSql("INSERT INTO User (name) VALUES (?)",[LoginUsername]);
    }
	function Register()
	{
		var RegisterName = document.getElementById('RegisterName').value;
		var RegisterAddress = document.getElementById('RegisterAddress').value;
		var RegisterAge = document.getElementById('RegisterAge').value;
		var RegisterUsername = document.getElementById('RegisterUsername').value;
		var RegisterPassword = document.getElementById('RegisterPassword').value;
		if(RegisterName == '' || RegisterAddress == '' || RegisterAge == '' || RegisterUsername == '' || RegisterPassword == '' )
		{
			alert('Please do not leave any empty spaces');
		}
		else
		{
			reg = new XMLHttpRequest();
			reg.onreadystatechange = function() 
			{
				if (reg.readyState == 4 && reg.status == 200) 
				{
					var Response = reg.responseText +"";
					if(Response == 1)
					{
						alert( 'Register Sucessful!!');
						window.location.href = 'login.html';
					}
					else
					{
						alert(Response);
					}
				}
			}
			var params = "Name="+RegisterName+"&Address="+RegisterAddress+"&Age="+RegisterAge+"&Username="+RegisterUsername+"&Password="+RegisterPassword;
			reg.open("POST","http://www.smceventmonitoring.eu.pn/daison/register.php",true);
			reg.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			reg.setRequestHeader("Content-length", params.length);
			reg.send(params);
		}
	}
$(document).ready(function(){
	var products = document.getElementById('products');
	if(products)
	{
		mouse();
		keyboard();
		headset();
		mousepad();
	}
});
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
							'<hr></div>';
					$('#mousedisplay').append(values).hide().fadeIn('slow');		
				}
            }
        }	
		a.open("GET","http://www.smceventmonitoring.eu.pn/daison/mouse.php",true);
		a.send();
	}
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
							'<hr></div>';
					$('#keydisplay').append(values2).hide().fadeIn('slow');		
				}
            	}
        }	
		ab.open("GET","http://www.smceventmonitoring.eu.pn/daison/keyboard.php",true);
		ab.send();
	}
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
							'<hr></div>';
					$('#headsetdisplay').append(values2).hide().fadeIn('slow');		
				}
            	}
        }	
		xml.open("GET","http://www.smceventmonitoring.eu.pn/daison/headset.php",true);
		xml.send();
	}
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
							'<hr></div>';
					$('#mousepaddisplay').append(values3).hide().fadeIn('slow');		
				}
            	}
        }	
		abcde.open("GET","http://www.smceventmonitoring.eu.pn/daison/mousepad.php",true);
		abcde.send();
	}	
	function errorCB(err) {
		alert('There is an error!: '+err.message+ '\nSecond Message:!' +err);
    }