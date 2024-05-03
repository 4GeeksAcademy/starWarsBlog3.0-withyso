import React from "react";
import "../../styles/home.css";
import { useContext } from "react";
import { Context } from "../store/appContext";
import HomeCards from "../component/HomeCards";
import { Link, NavLink } from "react-router-dom";

//visualizar la info a traves de un get
//organizar la estructura de la pagina 
//Comenzara crear la interfarz

export const Home = () => {

	const { store, actions } = useContext(Context)

	return (
		<div className="container mt-5">
			{/* Background image */}
			<div className="stars"></div>
			<div className="twinkling"></div>
			{/* -------- */}
			{/* Displayed home Cards */}
			<div className="row gap-5 justify-content-center p-0 m-0">
				<div className="col-md-4 d-flex justify-content-center col-sm-12 p-0 m-0" >
					<HomeCards imageURL={store.characters_URL} title="Characters" type="people" />
				</div>
				<div className="col-md-4 d-flex justify-content-center col-sm-12 p-0 m-0" >
					<HomeCards imageURL={store.species_URL} title="Species" type="species" />
				</div>
				<div className="col-md-4 d-flex justify-content-center col-sm-12 p-0 m-0">
					<HomeCards imageURL={store.starships_URL} title="Starships" type="starships" />
				</div>
				<div className="col-md-4 d-flex justify-content-center col-sm-12 p-0 m-0">
					<HomeCards imageURL={store.vehicles_URL} title="Vehicles" type="vehicles" />
				</div>

			</div>
		</div >
	)
}





