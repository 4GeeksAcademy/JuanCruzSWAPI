const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: [],

      planets: [],

      person: null,

      

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
          .then((resp) => {
            return resp.json();
          })
          .then((data) => {
            setStore({ people: data.results });
          })
          .catch((error) => {
            console.log(error);
          });
      },

      getPlanet: () => {
        fetch("https://www.swapi.tech/api/planets/", {
          method: "GET",

          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => {
            return resp.json();
          })
          .then((data) => {
            setStore({ planets: data.results });
            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getPerson: (id) => {
        fetch(`https://www.swapi.tech/api/people/${id}`, {
          method: "GET",

          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => {
            return resp.json();
          })
          .then((data) => {
            setStore({ person: data.result });
          })
          .catch((error) => {
            console.log(error);
          });
      },

      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },
      loadSomeData: () => {
        /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
