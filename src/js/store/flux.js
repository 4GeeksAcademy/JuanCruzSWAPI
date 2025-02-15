const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],
      planets: [],
      person: null,
      planet: null,
      favorites: [], 
    },
    actions: {
      getPeople: () => {
        fetch("https://www.swapi.tech/api/people/")
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ people: data.results });
          })
          .catch((error) => console.log(error));
      },

      getPlanet: () => {
        fetch("https://www.swapi.tech/api/planets/")
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ planets: data.results });
          })
          .catch((error) => console.log(error));
      },

      getPlanetInd: (id) => {
        fetch(`https://www.swapi.tech/api/planets/${id}`)
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ planet: data.result });
          })
          .catch((error) => console.log(error));
      },

      getPerson: (id) => {
        fetch(`https://www.swapi.tech/api/people/${id}`)
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ person: data.result });
          })
          .catch((error) => console.log(error));
      },

      // agrega a favoritos segun sea planeta o personaje
      toggleFavorite: (type, item) => {
        const store = getStore();
        const favoriteKey = { type, uid: item.uid };
        const isFavorite = store.favorites.some(
          (fav) => fav.type === type && fav.uid === item.uid
        );

        if (isFavorite) {
          // Si ya es favorito, se elimina
          setStore({
            favorites: store.favorites.filter(
              (fav) => !(fav.type === type && fav.uid === item.uid)
            ),
          });
        } else {
          // Si no es favorito, se agrega
          setStore({ favorites: [...store.favorites, favoriteKey] });
        }
      },

      // Verifica si un elemento es favorito
      isFavorite: (type, uid) => {
        const store = getStore();
        return store.favorites.some((fav) => fav.type === type && fav.uid === uid);
      },
    },
  };
};

export default getState;