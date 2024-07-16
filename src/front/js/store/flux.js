const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			user: null,
			movies: [],
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
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
			login: async (emailOrUsername, password) => {
				try {
					const response = await fetch (process.env.BACKEND_URL + "/api/login/", 
						{
							method: "POST",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify({ email_or_username: emailOrUsername, password })
					});

					if (response.status !== 201) {
						console.log("There has been some error"); 
                        return false;
					}

					const data = await response.json()
					sessionStorage.setItem("token", data.token)
					setStore({ token: data.token })
					return true
						
				} catch(error) {
					console.log("error catch:", error)
				}
			},

			signin: async (username, email, password) => {
				try {
					const response = await fetch (process.env.BACKEND_URL + "/api/signin/", 
						{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							username: username,
							email: email,
							password: password
							})
					})
					if(!response.status) {
						console.log("Error creating user", response.status)
						return false
					}

					const data = await response.json()
					setStore({user: data.user})
					return true

				}catch(error) {
					console.log("Error!", error)
				}
			},

			getMovies: async () => {
				try {
					const response = await fetch (process.env.BACKEND_URL + "/api/movies/")
					
					if(!response.status) {
						console.log("Error! No movies", response.status)
					}

					const data = await response.json()
					console.log("Estas son las peliculas", data)
					setStore({movies: data.movies})

				}catch(error) {
					console.log("Error!", error)
				}
			},
			logout: async() => {
				sessionStorage.removeItem("token")
				setStore({ token: null })
			}
		}
	};
};

export default getState;
