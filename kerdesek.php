<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="icon" type="image/x-icon" href="pictures/diabeto.png">
    <link rel="stylesheet" href="lightmode.css">
    <title>Kérdések | Enefté</title>
</head>
<body>
    <div id="menu">
        <table>
            <tr class="spaceUnder">
                <td>
                    <a href="index.html">Főoldal</a>
                </td>
            </tr>
            <tr class="spaceUnder">
                <td>
                    <a href="áruház.html">Áruház</a>
                </td>
            </tr>
            <tr class="spaceUnder">
                <td>
                    <a href="kereskedés.html">Kereskedés</a>
                </td>
            </tr>
            <tr class="spaceUnder">
                <td>
                    <a href="beallitasok.html">Beállítások</a>
                </td>
            </tr>
            <tr class="spaceUnder">
                <td>
                    <a href="gyik.html">GYIK</a>
                </td>
            </tr>
        </table>
    </div>
    <button type="button" id="collapser" onclick="openNav()" >►</button>
    <button type="button" id="collapser2" onclick="closeNav()" ></button>

    <div class="container">
        <div class="row justify-content-md-center">
            <div id="box" class="col-12 col-sd-1 col-md-4 col-xl-3 col-xxl-3">
                <h2>Kérdezz tőlünk</h2>
                <form method="post">
                    <div id="input-box">
                        <input type="text" name="name" autocomplete="off" required>
                        <label for="">Felhasználónév</label>
                    </div>
                    <div id="input-box">
                        <input type="text" name="email" autocomplete="off" required placeholder="&nbsp" pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-zA-Z]{2,4}">
                        <label for="">Email</label>
                    </div>
                    <div id="input-box">
                        <input type="text" name="textdata" autocomplete="off" required>
                        <label for="">Kérdés</label>
                    </div>
                    <input type="submit" name="submit" value="Küldés">
                </form>
            </div>
        </div>
    </div>
    <i id="moon_sun" onclick="iconcsere()" class="fas fa-moon fa-2x"></i>
    <script src="lightmodescript.js"></script>
    <script src="title.js"></script>
</body>
</html>

<?php
    if(isset($_POST['textdata']))
    {
    $name=$_POST['name'];
    $email=$_POST['email'];
    $textdata=$_POST['textdata'];
    $fp = fopen('kerdesek.txt', 'a');
    fwrite($fp, "\n" ."név: ");
    fwrite($fp, $name  ."\n");
    fwrite($fp, "email: ");
    fwrite($fp, $email  ."\n");
    fwrite($fp, "kérdés: ");
    fwrite($fp, $textdata  ."\n");
    fclose($fp);
    echo   '<script type="text/javascript">
    window.location.href = "gyik.html";
    </script>';
    }
?>