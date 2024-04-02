<script setup lang="ts">

</script>

<template>

<div class="navbar">
  <a class="home" href="home">
    <img class="logo" src="../assets/logo.png">
  </a>

  <div class="selection">

  <div class="dropdown" href="Fortbildungen">
    Fortbildungen
    <div class="dropdown-content">
      <a href="">Betreung</a>
      <a href="">Pflege</a>
      <a href="">Praxisanleitung</a>
    </div>
  </div>

  <div class="dropdown">
    Kurse
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
      <a href="">Pflegehelfer</a>
      <a href="">Ersthelfer</a>
    </div>
  </div>

  <div class="dropdown">
    Weitere Leistungen
    <div class="dropdown-content">
      <a href="">Arbeitsorganisation</a>
      <a href="">Betriebliches Gesundheitsmanagement</a>
    </div>
  </div>

</div>

<img class="fortbildungen" src="../assets/Fortbildungen (1).png" alt=""/>

  <button class="elopage">
    <a href="elopage" style=" color: black; text-decoration: none;">
      Kurse Auswählen
    </a>
  </button>


</div>

<div class="content">
  <img src="../assets/image.webp" style="padding-top: 10vh; margin-left: auto; margin-right: auto; width: 100%;">

  <div class="floating-text">
    <h2 class="background-text">
      Für Praxisanleiter, Pflegepersonal, Betreuungkräfte und mehr
    </h2>
    <h1>
      Mehr als nur Fortbildungen
    </h1>
    <p>
      Wir, das Pflegeinstitut NONPLUSULTRA, bieten nicht nur Fortbildungen an, sondern auch ganzheitliche Lösungen für die Personalentwicklung und Teamperformance in der Pflegebranche. 
      Unsere maßgeschneiderten Angebote unterstützen nicht nur Plfegeeinrichtungen dabei ihre Mitarbeiter zu stärken und ihr Team zu optimieren, sondern jede einzelne Person, die mit dem Thema Pflege in Berührung kommt.
    </p>
    <button class="buchungskalender">
      Unser Buchungskalender
    </button>
  </div>

</div>

<div class="content2">

    <img class="pflege" src="../assets/Kurs-Pflege.webp" alt="">

    <div class="text">

      <h1 style="font-size: xxx-large;">
        Weiterbildung Pflege - Persönliche Entwicklung
      </h1>

      <p style="font-size: large;">
      Fortbildung ist wichtig, um Sicherheit im Handeln als Pflegehelfer, Fachkraft, Praxisanleiter oder vielleicht auch als pflegender Angehöriger zu geben. Dadurch wird sichergestellt, dass der Einzelne bei neuen Behandlungen,
       Medikamenten und Technologien auf dem neuesten Stand ist.
       Es kann sehr schwierig sein, zu Beginn des Berufslebens zu wissen, was erforderlich ist, aber es zahlt sich aus, in Weiterbildung zu investieren.
      </p>

      <p style="font-size: large;">
        Die Weiterbildung in der Pflege ist ein wichtiger Aspekt, um die Qualität der Pflege zu verbessern und den sich ständig ändernden Anforderungen in der Gesundheitsbranche gerecht zu werden.
         Bei Pflegeinstitut-Nonplusultra bieten wir eine Vielzahl von Kursen und Schulungen an, die auf die spezifischen Bedürfnisse von Pflegepersonal zugeschnitten sind.
      </p>

      <p style="font-size: large;">
        Unsere Weiterbildungsprogramme umfassen Themen wie die Betreuung von Patienten mit speziellen Bedürfnissen, den Umgang mit schwierigen Situationen im Arbeitsalltag und die Verbesserung der Kommunikation mit Patienten und deren Familien. 
        Darüber hinaus bieten wir auch Kurse für Praxisanleiter an, die darauf abzielen, die Fähigkeiten und Kenntnisse von Pflegekräften zu erweitern und zu vertiefen.
      </p>

      <button class="kursauswahl">
        Übersicht Kursauswahl
      </button>
      
    </div>

</div>




</template>

<style scoped>

  .kursauswahl{
    font-size: x-large;
    color: white;
    background-color: #14313e;
    padding: 2%;
    padding-left: 8%;
    padding-right: 8%;
    border: none;
    border-radius: 200px;
    margin-left: 20%;
    margin-top: 5%;
  }

  .text{
    float: left;
    max-width: 30%;
    padding-left: 5%;
  }

  .pflege{
    float: left;
    border-radius: 20px;
  }

  .content2{
    color: black;
    background-color: white;
    height: 50vh;
    padding: 2%;
    padding-left: 15%;
  }

  .background-text{
    font-size: large;
    color: rgba(0, 0, 0, 0.507);
  }

  .buchungskalender{
    color: black;
    background-color: aliceblue;
    border: none;
    padding-top: 2%;
    padding-bottom: 2%;
    padding-left: 5%;
    padding-right: 5%;
    font-size: larger;
    border-radius: 200px;
    margin: 1%;
  }

  .floating-text{
    background-color: #13b1d07e;
    position: relative;
    top: -95%;
    max-width: 25%;
    margin-left: 10%;
    padding: 1vh;
  }

  .content{
    width: 100%;
    height: 40%;
    overflow: hidden
  }

  .navbar{
    position: absolute;
    background-image: url(../assets/Hintergrund.png.png);
    background-size: cover;
    width: 100%;
    top: 0;
    text-align: center;
  }
  
  .selection{
    margin-left: 25%;
  }

  .home{
    float: left
  }

  .elopage{
    float: right;
    color: black;
    background-color: aliceblue;
    border: none;
    padding-top: 0.5%;
    padding-bottom: 0.5%;
    padding-left: 2%;
    padding-right: 2%;
    font-size: large;
    border-radius: 200px;
    margin-top: 1%;
  }

  .dropdown{
    text-align: center;
    float: left;
    color: white;
    padding-top: 2%;
    padding-left: 4%;
    padding-right: 4%;
    padding-bottom: 1%;
    font-size: large;
  }

  .dropdown-content{
    display: none;
    position: absolute;
    background-color: rgb(218, 218, 218);
    min-width: 5%;
    z-index: 1;
  }

  .dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover{
  background-color: rgb(190, 190, 190);
}

  .dropdown:hover .dropdown-content{
    display: block;
  }

  .logo{
    margin-left: 15%;
    height: 100px;
  }

  .fortbildungen{
    float: right;
    height: 100px;
    margin-right: 2%;
  }

</style>
