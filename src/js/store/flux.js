const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      planets: [],
      person: null,
      planet: null,
      favorites: [], // Nuevo estado para favoritos
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      getPeople: () => {
        fetch("https://www.swapi.tech/api/people/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ people: data.results });
          })
          .catch((error) => console.log(error));
      },

      getPlanet: () => {
        fetch("https://www.swapi.tech/api/planets/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ planets: data.results });
          })
          .catch((error) => console.log(error));
      },

      getPlanetInd: (id) => {
        fetch(`https://www.swapi.tech/api/planets/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ planet: data.result });
          })
          .catch((error) => console.log(error));
      },

      getPerson: (id) => {
        fetch(`https://www.swapi.tech/api/people/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ person: data.result });
          })
          .catch((error) => console.log(error));
      },

      // Agregar o quitar un favorito
      toggleFavorite: (item) => {
        const store = getStore();
        const isFavorite = store.favorites.some((fav) => fav.uid === item.uid);

        if (isFavorite) {
          // Si ya es favorito, lo eliminamos
          setStore({ favorites: store.favorites.filter((fav) => fav.uid !== item.uid) });
        } else {
          // Si no es favorito, lo agregamos
          setStore({ favorites: [...store.favorites, item] });
        }
      },

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      loadSomeData: () => {
        // fetch().then().then(data => setStore({ "foo": data.bar }))
      },

      changeColor: (index, color) => {
        const store = getStore();

        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        setStore({ demo: demo });
      },
    },
  };
};

export default getState;