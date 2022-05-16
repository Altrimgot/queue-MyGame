<?php
    //Зв'язок з базою 
    $connection = new mysqli("ieugene.mysql.tools", "ieugene_admin", "23042000Eugennyy_Admin", "ieugene_mygame");

    mysqli_set_charset($connection, "UTF8");
 
    if (!$connection) {
        echo "Виникла помилка під час встановлення з'єднання з базою даних. Будь-ласка, перезавантажте сторінку.";
        exit;
    };
    
    if (isset($_POST['name']) && isset($_POST['phone']) && isset($_POST['select'])) {
        $name = trim($_POST['name']);
        $phone = trim($_POST['phone']);
        $gameName = trim($_POST['select']);

        //Занесення даних користувача до БД та створення заявки
        $query = "INSERT INTO `Clients` SET `id` = not null, `name` = '$name', `phone_number` = '$phone'; ";
        $query .= "INSERT INTO `Tickets` SET `id` = not null, `name` = '$gameName', `client_phone_number` = '$phone', `status` = 'Очікування'; ";

        $connection->multi_query($query);
    };

    mysqli_close($connection);
?>