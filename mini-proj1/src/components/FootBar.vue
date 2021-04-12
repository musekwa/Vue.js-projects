<template>
  <div class="foot-bar">
        <div class="more">
          <p>A preencher...</p>
        </div>
        <div class="external-links">
          <div class="link-label">
              <p>Mais sobre mim...</p>
          </div>
          <div class="link-icons">
            <a href="https://web.facebook.com/EvaristeMusekwa/" target="_blank"><i class="fab fa-facebook"></i></a>
            <a href="https://twitter.com/MusekwaEvariste" target="_blank"><i class="fab fa-twitter-square"></i></a>
            <a href="https://www.linkedin.com/in/musekwa/" target="_blank"><i class="fab fa-linkedin"></i></a>
            <a href="https://github.com/musekwa" target="_blank"><i class="fab fa-github"></i></a>
          </div>
        </div>
        <div class="author-bar">
          <p>2021&copy;Musekwa</p>
        </div>
  </div>
</template>

<script>
export default {
  name: 'FootBar',
  data () {
    return {
      msg: 'Foot Bar'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Teko:wght@300&display=swap');

.foot-bar{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
   
}
.more {
    grid-column: 2/3;
    grid-row: 1/2;

}
.external-links {
    grid-column: 4/5;
    grid-row: 1/2;

}

.author-bar {
    grid-row: 2/3;
    grid-column: 1/5;
    text-align: center;
    font-size: 18px;
    color: white;
    padding-top: 1px;
    background-image: linear-gradient(200deg, #6e746d, #d1cacb);
}

.external-links {
    display: grid;
    grid-template-rows: 1fr 1fr;
}

.link-label {
    text-align: center;
    padding: 0;
    margin: 0;
    width: 70%;
}

.link-icons {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    justify-items: center;
    width: 70%;
    font-size: 30px !important;
    padding: 0;
    margin: 0;
}

@media screen and (max-width: 800px){
.external-links {
    grid-column: 3/5;
    grid-row: 1/2;

}
    
  }

</style>
