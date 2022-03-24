<template>
  <div>
    <ul>
      <li class="article" v-if="articles == null">
        Nu exista articole pentru afisat.
      </li>
      <li class="article" v-for="article in articles" :key="article.link">
        <a :href="article.link">{{ article.title }} {{ article.date }}</a>
      </li>
      <!-- verificam daca avem articole de afisat, daca nu aratam un mesaj pentru utilizatori -->
    </ul>
  </div>
</template>

<script>
// pentru a functiona importul bibliotecii axios, acesta trebuie instalat cu comanda npm install axios
import axios from "axios";
export default {
  data() {
    // initializam segmentul de date pentru componenta de news
    return {
      articles: null, // initializam variabila articles cu valoarea null pana cand le preluam de pe internet
    };
  },
  mounted() {
    // codul scris in functia mounted a unei componente se executa atunci cand aceasta a fost afisata in aplicatie
    const RSS_URL = `https://news.un.org/feed/subscribe/en/news/all/rss.xml`; // gasim un feed RSS de noutati, de ex un site de stiri
    axios.get(RSS_URL).then((response) => {
      // in response.data ar trebui sa avem continutul feed-ului RSS (xml)
      let articles_parsed = []; // initializam o variabila unde o sa stocam temporar articolele
      let parsed_xml = new DOMParser().parseFromString(
        response.data,
        "text/xml"
      );
      parsed_xml = parsed_xml.querySelectorAll("item"); // selectam doar articolele din feed-ul RSS_URL
      parsed_xml.forEach((item) => {
        console.log(item); // a se vedea cum arata un item in consola
        articles_parsed.push({
          title: item.querySelector("title").innerHTML,
          link: item.querySelector("link").innerHTML,
          date: item.querySelector("pubDate").innerHTML,
        });
      });
      console.log(articles_parsed); // a se vedea cum arata articolele inainte de a le salva in variabila articles din state-ul aplicatiei
      this.articles = articles_parsed; // atribuim variabilei din state-ul aplicatiei "articles" valoarea articolelor la care am facut parse inainte
    });
  },
};
</script>

<style scoped>
.article {
  color: #2b2b2b;
  margin: 10px 0 10px 0;
  text-decoration: none;
  font-size: 16px;
}
</style>
