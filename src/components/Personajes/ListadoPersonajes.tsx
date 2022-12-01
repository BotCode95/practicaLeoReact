import axios from 'axios'
import { useEffect, useState } from 'react'
import { Result } from '../../interfaces/personajesInterface'
import { Personaje } from './Personaje'
export const ListadoPersonajes = () => {
	const [personajes, setPersonajes] = useState<Result[]>([])

	useEffect(() => {
		//Se ejecuta cuando se renderiza ( se carga ) la pagina
		consultarPersonajes()
	}, [])

	const consultarPersonajes = async () => {
		const respuesta = await axios.get(
			'https://rickandmortyapi.com/api/character'
		)
		console.log(respuesta.data.results) //array
		setPersonajes(respuesta.data.results)
	}

	return (
		<div className="row justify-content-center">
			{personajes.map((personaje) => (
				<div
					className="col-5 mt-2 mb-4 "
					key={personaje.id} //identifica cada uno de los items de un array, tiene que ser un numero y que no se repita
					style={{
						backgroundColor: '#b0efef',
						padding: 2,
						marginRight: 20,
						borderRadius: 50,
					}}
				>
					<Personaje personaje={personaje} />
				</div>
			))}
		</div>
	)
}
