export const state = () => ({
  products: [
    {
      id: 1,
      image: "https://picsum.photos/600/400/?random",
      infoProduct: {
        title: "Sub-Ex",
        description:
          "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
        price: 100,
        titleButton: "Add to Cart",
      },
    },
    {
      id: 2,
      image: "https://picsum.photos/600/400/?random",
      infoProduct: {
        title: "Tresom",
        description:
          "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
        price: 24,
        titleButton: "Add to Cart",
      },
    },
    {
      id: 3,
      image: "https://picsum.photos/600/400/?random",
      infoProduct: {
        title: "Treeflex",
        description:
          "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
        price: 51,
        titleButton: "Add to Cart",
      },
    },
    {
      id: 4,
      image: "https://picsum.photos/600/400/?random",
      infoProduct: {
        title: "Subin",
        description:
          "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
        price: 82,
        titleButton: "Add to Cart",
      },
    },
    {
      id: 5,
      image: "https://picsum.photos/600/400/?random",
      infoProduct: {
        title: "Tempsoft",
        description:
          "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
        price: 51,
        titleButton: "Add to Cart",
      },
    },
    {
      id: 6,
      image: "https://picsum.photos/600/400/?random",
      infoProduct: {
        title: "Job",
        description:
          "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
        price: 15,
        titleButton: "Add to Cart",
      },
    },
    {
      id: 7,
      image: "https://picsum.photos/600/400/?random",
      infoProduct: {
        title: "Solarbreeze",
        description:
          "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
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
      id: 9,
      image: "https://picsum.photos/600/400/?random",
      infoProduct: {
        title: "Tempsoft",
        description:
          "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
        price: 31,
        titleButton: "Add to Cart",
      },
    },
    {
      id: 10,
      image: "https://picsum.photos/600/400/?random",
      infoProduct: {
        title: "Tempsoftze",
        description:
          "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page",
        price: 56,
        titleButton: "Add to Cart",
      },
    },
    {
      id: 11,
      image: "https://picsum.photos/600/400/?random",
      infoProduct: {
        title: "zertbfft",
        price: 200,
        titleButton: "Add to Cart",
      },
    },
  ],
});
export const mutations = {};
export const getters = {
  getProducts(state) {
    return state.products;
  },
};
