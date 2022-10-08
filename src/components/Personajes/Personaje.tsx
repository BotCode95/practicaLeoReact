import { Result } from '../../interfaces/personajesInterface'

interface Props {
	personaje: Result
}
export const Personaje = ({ personaje }: Props) => {
	return (
		<div>
			<h1>{personaje.name}</h1>
			<p>{personaje.gender}</p>
			<p>{personaje.status}</p>
			<img src={personaje.image} alt="" />
		</div>
	)
}
