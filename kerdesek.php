<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="lightmode.css">
    <link rel="icon" type="image/x-icon" href="pictures/diabeto.png">
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
            <div id="" class="col-12 col-sd-1 col-md-3 col-xl-3 col-xxl-3">
                <img src="pictures/kérdőjel.png" id="profilpicure" class="card-img-top mx-auto" alt="Podlipnik Ádám">
                <form method="post">
                    Kérdését ide írja:<br>
                    <input type="text" name="textdata"><br>
                    <input type="submit" name="submit" value="asd">
                </form>
            </div>
        
            
        
        </div>
    </div>


    <i id="moon_sun" onclick="iconcsere()" class="fas fa-moon fa-2x"></i>
    <script src="lightmodescript.js"></script>
    <script src="title.js"></script>

    <?php
              
    if(isset($_POST['textdata']))
    {
    $data=$_POST['textdata'];
    $fp = fopen('data.txt', 'a');
    fwrite($fp, $data);
    fclose($fp);
    }
    ?>

</body>
</html>