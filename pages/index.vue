<template>
  <div class="container mx-auto">
    <Navbar />
    <Carousel :sliders="sliders" />
    <Card :cardItems="cardItems" />
    <Product :title="'Feature Products'" :products="products" />
  </div>
</template>

<script>
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
          image: "https://picsum.photos/600/100/?random",
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
      products: [
        {
          id: 1,
          image: "https://picsum.photos/600/400/?random",
          infoProduct: {
            title: "Sub-Ex",
            price: 100,
            titleButton: "Add to Cart",
          },
        },
        {
          id: 2,
          image: "https://picsum.photos/600/400/?random",
          infoProduct: {
            title: "Tresom",
            price: 24,
            titleButton: "Add to Cart",
          },
        },
        {
          id: 1,
          image: "https://picsum.photos/600/400/?random",
          infoProduct: {
            title: "Treeflex",
            price: 51,
            titleButton: "Add to Cart",
          },
        },
        {
          id: 3,
          image: "https://picsum.photos/600/400/?random",
          infoProduct: {
            title: "Sub-Ex",
            price: 100,
            titleButton: "Add to Cart",
          },
        },
        {
          id: 4,
          image: "https://picsum.photos/600/400/?random",
          infoProduct: {
            title: "Subin",
            price: 82,
            titleButton: "Add to Cart",
          },
        },
        {
          id: 5,
          image: "https://picsum.photos/600/400/?random",
          infoProduct: {
            title: "Tempsoft",
            price: 51,
            titleButton: "Add to Cart",
          },
        },
        {
          id: 6,
          image: "https://picsum.photos/600/400/?random",
          infoProduct: {
            title: "Job",
            price: 15,
            titleButton: "Add to Cart",
          },
        },
        {
          id: 7,
          image: "https://picsum.photos/600/400/?random",
          infoProduct: {
            title: "Solarbreeze",
            price: 88,
            titleButton: "Add to Cart",
          },
        },
        {
          id: 8,
          image: "https://picsum.photos/600/400/?random",
          infoProduct: {
            title: "Tempsoft",
            price: 24,
            titleButton: "Add to Cart",
          },
        },
        {
          id: 8,
          image: "https://picsum.photos/600/400/?random",
          infoProduct: {
            title: "Tempsoft",
            price: 31,
            titleButton: "Add to Cart",
          },
        },
        {
          id: 9,
          image: "https://picsum.photos/600/400/?random",
          infoProduct: {
            title: "Tempsoftze",
            price: 56,
            titleButton: "Add to Cart",
          },
        },
        {
          id: 10,
          image: "https://picsum.photos/600/400/?random",
          infoProduct: {
            title: "zertbfft",
            price: 200,
            titleButton: "Add to Cart",
          },
        },
      ],
    };
  },
};
</script>
