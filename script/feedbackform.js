function sendEMail(){
	var res=true; 
	var re = new RegExp("^[-a-z\.0-9/]+@[-a-z\.0-9/]+\.[a-z]{2,6}$","i"); 
	res = res && (document.getElementById("name").value != "") && 
	(document.getElementById("msg").value != "") && 
	(re.exec(document.getElementById("email").value) != null);
	if(res){document.getElementById("callbackForm").submit()}else{alert("Заполните все поля правильно!");
}}
function show_ipwhois(){
	var obj = document.getElementById("show_ipwhois");
	if (obj.style.display == "none") obj.style.display = "";
	else obj.style.display = "none";
	return false;}