<?php


$name = $_POST['name'];
$phone = $_POST['phone'];
$area = $_POST['area'];
$typeofarea = $_POST['typeofarea'];
$typeofwork = $_POST['typeofwork'];
$question = $_POST['question'];

$message;
$subject;

if (isset($question) && !empty($question)) {
  $message = 'Телефон: ' . $phone . ', Вопрос: ' . $question;
  $subject = 'Вопрос специалисту';
} else if (isset($area) && !empty($area)) {
  $message = 'Площать помещения: ' . $area . ', Тип помещения: ' . $typeofarea . ', Тип работы: ' . $typeofwork . ', Телефон: ' . $phone;
  $subject = 'Расчитать стоимость';
} else {
  $message = 'Имя: ' . $name . ', Телефон: ' . $phone;
  $subject = 'Получить консультацию специалиста';
}



echo $subject;
echo $message;

$to      = 'mishka-starkov1983@mail.ru';
$headers = 'From: admin@beget.tech' . "\r\n" .
    'Content-Type: text/plain; charset=utf8;' . "\r\n" .
    'Reply-To: admin@beget.tech' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();
mail($to, $subject, $message, $headers);
?>
