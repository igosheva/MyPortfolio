<?php
$name = $_POST('projectName')
$data = array();

if ($name === ''){
	$data['status'] = 'error';
	$data['text'] = 'Заполните имя!'
}else{
	$data['status'] = 'ок';
	$data['text'] = 'Вы молодец!'
}

header('Content-Type: application/json');
echo json_encode($data);
exit;

?>
