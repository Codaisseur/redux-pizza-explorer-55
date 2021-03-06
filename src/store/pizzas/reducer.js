// src/store/pizzas/reducer.js
const initialState = {
  list: [
    {
      id: 161235,
      name: "Pizza Margherita",
      description:
        "The typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt and extra-virgin olive oil.",
      bought: 5,
      image:
        "https://www.dolcevia.com/nl/images/2019/Culinair/Recepten/Pizza_Margherita_uit_Napels.jpg",
    },
    {
      id: 67283,
      name: "Pizza Napoletana",
      description:
        "Neapolitan pizza also known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese.",
      bought: 2,
      image:
        "https://uncutrecipes.com/Images-Recipes-Italian/Pizza-alla-Napoletana-with-Mozzarella-Cheese.jpg",
    },
    {
      id: 357311,
      name: "Pizza Bianca",
      description:
        "White pizza, which omits tomato sauce from the equation, often substituting it with pesto or sour cream.",
      bought: 10,
      image:
        "https://img.static-rmg.be/a/food/image/q100/w480/h360/1087722/pizza-bianca-met-artisjok-en-mortadella.jpg",
    },
  ],
  selected: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "pizzas/ADD": {
      // name, description => payload
      const { name, description } = action.payload;

      const newPizza = {
        name,
        description,
        image: "...",
        id: state.list.length,
        bought: 0,
      };

      return {
        ...state, // list: [{}, {}], selected: null
        list: [newPizza, ...state.list], // redefine list
      };
    }
    default: {
      return state;
    }
  }
}
