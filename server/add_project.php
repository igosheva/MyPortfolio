<?php
    /* Здесь проверяется существование переменных */
    if (isset($_POST['textarea'])) {$textarea = $_POST['textarea'];}
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['email'])) {$email = trim($_POST['email']);}

    /* Сюда впишите свою эл. почту */
    $address = "just_anasteziya@mail.ru";

    /* А здесь прописывается текст сообщения, \n - перенос строки */
    $mes = "Тема: Заказ обратного звонка!\nТелефон: $phone\nИмя: $name\nE-mail: $email";

    /* А эта функция как раз занимается отправкой письма на указанный вами email */
    $sub='Заказ'; //сабж
    $email='Заказ'; // от кого
    $send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");
echo  'ytgyftytfy';
    /*ini_set('short_open_tag', 'On');
    header('Refresh: 3; URL=/index.html');*/
?>

<?/*здесь идет вывод сообщения после отправки заявки
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>С вами свяжутся</title>
        <meta name="generator">
        <style type="text/css">
        body
        {
           background: rgba(0, 0, 2, .6) url(assets/images/zakaz.jpg) top -70% center no-repeat;
        }

        <script type="text/javascript">
        setTimeout('location.replace("/../index.html")', 3000);
        *//*Изменить текущий адрес страницы через 3 секунды (3000 миллисекунд)*//*
        </script>
    </head>
    </body>
</html>*/?>
