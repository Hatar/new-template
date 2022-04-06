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
          image: "https://picsum.photos/600/300/?random",
        },
        {
          id: 2,
          title: "quand un imprimeur anonyme assembla",
          decription:
            "Le lorem ipsum est, en imprimerie, une suite de mots sans ise en page,",
          image: "https://picsum.photos/600/300/?random",
        },
        {
          id: 3,
          title: "bureautique informatique, sans que son contenu",
          decription:
            "Le lorem ipsum est, en imprimerie, une suite de mots sans ise en page,",
          image: "https://picsum.photos/600/200/?random",
        },
      ],
      cardItems: [
        {
          id: 1,
          image: "https://picsum.photos/600/400/?random",
        },
        {
          id: 2,
          image: "https://picsum.photos/600/400/?random",
        },
        {
          id: 3,
          image: "https://picsum.photos/600/400/?random",
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
