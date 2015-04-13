
<?php
if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['msg'])) {

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['msg'];

$name = htmlspecialchars(trim($name));
$email = htmlspecialchars(trim($email));
$message = htmlspecialchars(trim($message));


$yourmail = "pavel.kriakvin@gmail.com"; 
$sub = "Сообщение с сайта pav-code.pusku.com";
$messsage = "Пользователь: $name \nс email адресом E-mail: $email \nОтправил сообщение: \n$message";


$sendmail = mail ($yourmail,$sub,$messsage,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");
if ($sendmail == 'true'){
    echo '<script type="text/javascript">alert(\'Сообщение отправлено!\');</script>';
}
else {
    echo '<script type="text/javascript">alert(\'Ошибка! Сообщение не отправлено.\');d</script>';
}
}
echo '<script type="text/javascript">
document.location.href="http://pav-code.pusku.com";
</script>';
?>