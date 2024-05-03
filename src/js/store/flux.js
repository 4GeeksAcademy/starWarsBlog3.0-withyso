const getState = ({ getStore, getActions, setStore }) => {
	const swapiURL = "https://www.swapi.tech/api";
	return {
		store: {
			characters_URL: "https://starwars-visualguide.com/assets/img/categories/character.jpg",
			species_URL: "https://starwars-visualguide.com/assets/img/categories/species.jpg",
			starships_URL: "https://starwars-visualguide.com/assets/img/categories/starships.jpg",
			vehicles_URL: "https://starwars-visualguide.com/assets/img/categories/vehicles.jpg",
			data: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			loadType: (type, page) => {
				fetch(`${swapiURL}/${type}?page=${page}&limit=10`)
					.then(response => response.json())
					.then(data => setStore({ data: data }))
					.catch(error => console.error(error))
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
			}
		}
	};
};

export default getState;
