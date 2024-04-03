<template>
<nav>
    
    <a class="logo-container" href="">
    <img class="logo" src="../assets/logo.png">
    </a>

    <div class="navbar">
    <div class="dropdown">
        Fortbildungen
        <div class="dropdown-contents">

        </div>
    </div>
    

    <div class="dropdown">
        Kurse
        <div class="dropdown-contents">

        </div>
    </div>

    <div class="dropdown">
        Weiterbildungen
        <div class="dropdown-contents">

        </div>
    </div>

    <div class="dropdown">
        Weitere Leistungen
        <div class="dropdown-contents">

        </div>
    </div>
    </div>

        <button class="elopage">
            Kurse Auswählen
        </button>

</nav>

</template>


<style>


nav{
    width: 100%;
    font-size: 130%;
    background-color: rgba(0, 0, 0, 0.281);
}

.navbar{
    margin-left: auto;
    margin-right: auto;
}

.fortbildung{
    margin-right: 10%;
    margin-left: 10%;
    width: 80%;
}

.elopage{
    font-size: 95%;
    margin-top: 1%;
    margin-right: 10rem;
    float: right;
    padding: 1%;
    padding-left: 3%;
    padding-right: 3%;
    border: none;
    border-radius: 100px;
    background-color: white;
    color: black;
}

.dropdown{
    font-weight: bold;
    text-align: center;
    float: left;
    font-size: 100%;
    padding-left: 3%;
    padding-right: 3%;
    padding-top: 2%;
    padding-bottom: 2%;
}

.logo{
    padding-right: 6rem;
    margin-top: 1%;
    float: left;
    width: 18%;
    margin-left: 2rem;
}

.background{
    background-image: url(../assets/Hintergrund.png.png);
    background-size: cover;

}

</style>