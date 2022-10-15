import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Contacto } from '../Contacto'
import { Inicio } from '../Inicio'
import { ListadoPersonajes } from '../Personajes/ListadoPersonajes'

export const Navbar = () => {
	return (
		<BrowserRouter>
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container-fluid">
					<Link className="navbar-brand" to="">
						Rick <strong>&</strong> Morty
					</Link>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<Link className="nav-link active" aria-current="page" to="">
									Inicio
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={'listado-personajes'}>
									Personajes
								</Link>
							</li>
							<li className="nav-item">
								<Link className="nav-link" to={'contacto'}>
									Contacto
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			<Routes>
				<Route path="/" element={<Inicio />} />
				<Route path="/listado-personajes" element={<ListadoPersonajes />} />
				<Route path="/contacto" element={<Contacto />} />
			</Routes>
		</BrowserRouter>
	)
}
