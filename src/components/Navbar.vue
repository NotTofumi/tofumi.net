<script>

export default {
    setup() {

        function openNav(){
            document.getElementById("sidenav").style.width = "250px"
        }

        return{
            openNav
        }
    }
}

</script>

<template>

<nav class="mobile">

    <div class="mobile-navbar">
        

        <img class="logo-mobile" src="/src/assets/logo-inverted.png" alt="">

        <div @click="openNav">
        <fa class="mobile-menu"icon="bars" size="lg"/>
        </div>
    </div>


    <div id="sidenav" class="sidenav">
        <button>
        Fortbildungen
        </button>
        <button>
            Kurse
        </button>
        <button>
            Weiterbildungen
        </button>
        <button>
            Weitere Leistungen
        </button>

    </div>


</nav>

<nav class="desktop">
    
    <a class="logo-container" href="">
    <img class="logo" src="../assets/logo.png">
    </a>

    <div class="navbar">
    <div class="dropdown">
        Fortbildungen
        <div class="dropdown-content">
            <a href="">Betreuung</a>
            <a href="">Pflege</a>
            <a href="">PraxisAnleitung</a>
        </div>
    </div>
    

    <div class="dropdown">
       Unsere Kurse
        <div class="dropdown-content">
            <a href="">Führung</a>
            <a href="">Studierende</a>
            <a href="">Pflegende</a>
        </div>
    </div>

    <div class="dropdown">
        Weiterbildungen
        <div class="dropdown-content">
            <a href="">Betreungskraft</a>
            <a href="">Pflegehelfter</a>
        </div>
    </div>

    <div class="dropdown">
        Weitere Leistungen
        <div class="dropdown-content">
            <a href="">Arbeitsorganisation</a>
            <a href="">Betreibliches Gesundheitsmanagement</a>
        </div>
    </div>

    <button class="elopage">
            Kurse Auswählen
    </button>

    </div>



</nav>

</template>


<style>

@media (max-width: 480px){
    .desktop  {
        display: none;
    }
    .mobile{
        height: 3%;
        justify-content: center;
        justify-items: center
    }
}

@media (min-width: 481px) and (max-width: 767px){
    .desktop  {
        display: none;
    }
}

@media (min-width: 768px) and (max-width: 1024px){
    .desktop  {
        display: none;
    }

}

@media (min-width: 1025px) {
    .mobile{
        display: none;
    }
}

:root{
    --background-color: white;
    --primary-color: ;
    --secondary-color: ;
    --highilit-color: ;
}


.mobile{
    background-color: white;
    color: black;
    width: 100%;
    position: fixed;
    padding-top: 1%;
    padding-bottom: 1%;
    
}

.sidenav{
    background-color: white;
    height: 100%;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.5s;
    width: 0px;
}

.sidenav a{
    color: black;
}

.sidenav button{
    width: 100%;
    border: none;
    background-color: transparent;
    color: black;
    font-size: large;
}

.mobile-navbar{
    display: grid;
    grid-template-columns: 2fr 1fr;
}

.mobile-menu{
    color: black;
    float: right;
    margin-top: 1.25%;
    margin-left: auto;
    margin-right: 10%;
    margin-top: auto;
    margin-bottom: auto;
}

.logo-mobile{
    width: 150px;
    float: left;
    margin-left: 10%;
    margin-right: auto;
}

.desktop{
    width: 100%;
    font-size: 130%;
    background-color: rgba(0, 0, 0, 0.281);
}

.navbar{
    margin-left: auto;
}

.fortbildung{
    margin-right: 10%;
    margin-left: 10%;
    width: 80%;
}

.elopage{
    font-size: 95%;
    margin-top: 1%;
    margin-right: 5%;
    float: right;
    padding: 1%;
    padding-left: 3%;
    padding-right: 3%;
    border: none;
    border-radius: 100px;
    background-color: white;
    color: black;
}

.elopage:hover{
    background-color: rgb(235, 235, 235);
}

.dropdown{
    position: relative;
    font-weight: bold;
    text-align: center;
    float: left;
    font-size: 100%;
    padding-left: 3%;
    padding-right: 3%;
    padding-top: 2%;
    padding-bottom: 2%;
}

.dropdown-content{
    display: none;
    position: absolute;
    background-color: white;
    position: absolute;
    min-width: 5%;
    padding: 1%;
    z-index: 1;
    border-radius: 0px 16px 16px 16px;
} 

.dropdown-content a{
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    border-radius: 16px;
    text-align: left;
}

.dropdown:hover .dropdown-content{
    display: block;
}

.dropdown-content a:hover{
    background-color: rgba(128, 128, 128, 0.219);
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