<template>
  <div class="container mx-auto">
    <Navbar />
    <Carousel :sliders="sliders" />
    <Card :cardItems="cardItems" />
    <Product :title="'Feature Products'" :products="products" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  layout: "default",
  name: "IndexPage",
  data() {
    return {
      sliders: [
        {
          id: 1,
          title: "Le Lorem Ipsum est simplement du faux",
          decription:
            "Le lorem ipsum est, en imprimerie, une suite de mots sans ise en page,",
          image: require("../static/image/slider1.jpg"),
        },
        {
          id: 2,
          title: "quand un imprimeur anonyme assembla",
          decription:
            "Le lorem ipsum est, en imprimerie, une suite de mots sans ise en page,",
          image: require("../static/image/slider2.jpg"),
        },
        {
          id: 3,
          title: "bureautique informatique, sans que son contenu",
          decription:
            "Le lorem ipsum est, en imprimerie, une suite de mots sans ise en page,",
          image: require("../static/image/slider4.jpeg"),
        },
      ],
      cardItems: [
        {
          id: 1,
          image: "https://random.imagecdn.app/500/150",
        },
        {
          id: 2,
          image: "https://random.imagecdn.app/500/150",
        },
        {
          id: 3,
          image: "https://random.imagecdn.app/500/150",
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      products: "getProducts",
    }),
  },
};
</script>
