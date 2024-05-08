<script setup lang="ts">
</script>

<template>

<img class="fortbildung" src="../assets/Fortbildungen (1).png">

<div class="content">

  <img class="name" src="../assets/images/main.jpg">

<div class="page">

  <img class="foo" src="../assets/images/Weiterbildung_Pflege.jpg">

  <div class="text">
  <h1>
    Weiterbildung Pflege - Persönliche Entwicklung
  </h1>

  <p>
    Fortbildung ist wichtig, um Sicherheit im Handeln als Pflegehelfer, Fachkraft, Praxisanleiter oder vielleicht auch als pflegender Angehöriger zu geben. 
    Dadurch wird sichergestellt, dass der Einzelne bei neuen Behandlungen,Medikamenten und Technologien auf dem neuesten Stand ist. 
    Es kann sehr schwierig sein, zu Beginn des Berufslebens zu wissen, was erforderlich ist, aber es zahlt sich aus, in Weiterbildung zu investieren.
  </p>
  <p>
    Die Weiterbildung in der Pflege ist ein wichtiger Aspekt, um die Qualität der Pflege zu verbessern und den sich ständig ändernden Anforderungen in der Gesundheitsbranche gerecht zu werden.
     Bei Pflegeinstitut-Nonplusultra bieten wir eine Vielzahl von Kursen und Schulungen an, die auf die spezifischen Bedürfnisse von Pflegepersonal zugeschnitten sind.
  </p>
  <p>
    Unsere Weiterbildungsprogramme umfassen Themen wie die Betreuung von Patienten mit speziellen Bedürfnissen, den Umgang mit schwierigen Situationen im Arbeitsalltag und die Verbesserung der Kommunikation mit Patienten und deren Familien. 
    Darüber hinaus bieten wir auch Kurse für Praxisanleiter an, die darauf abzielen, die Fähigkeiten und Kenntnisse von Pflegekräften zu erweitern und zu vertiefen.
  </p>
</div>
</div>

</div>

</template>

<style scoped>

  @media (max-width: 1024) {
    .fortbildung{
      padding-top: 8%;
    }

    .text{
      max-width: 10rem;
    }
    

  }

  @media (min-width: 1025) and  (max-width: 1920) {
    .fortbildung{
      padding-top: 5%;
      padding-bottom: 5%;
    }
  }


  p{
    max-width: 30rem;
  }

  .page{
    margin-top: 2rem;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    column-gap: 0.5rem;
  }

  .text{
    max-width: 35rem;
    margin-left: -15rem;
  }

  .foo{
    width: 30rem;
    border-radius: 40px;
  }

  .name{
    width: 100%;
    margin-top: 0%;
  }

  .fortbildung{
    margin-left: auto;
    margin-right: auto;
    width: 90%;
    padding-top: 11%;
    padding-bottom: 11%;
  }

  .content{
    width: 100%;
    background-color: white;
    color: black;
    padding-bottom: 2rem;
  }
 


</style>
