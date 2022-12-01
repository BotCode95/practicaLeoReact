import { Result } from '../../interfaces/personajesInterface'
import { FaMale, FaFemale, FaCircle } from 'react-icons/fa'
interface Props {
	personaje: Result
}
export const Personaje = ({ personaje }: Props) => {
	return (
		<div>
			<h1>{personaje.name}</h1>
			{personaje.gender === 'Male' ? (
				<FaMale fontSize={50} color={'blue'} />
			) : (
				<FaFemale fontSize={50} color={'pink'} />
			)}

			<div className="mt-3 mb-3">
				{personaje.status === 'Alive' ? ( // ? if // : else
					<p>
						Status: <FaCircle fontSize={20} color={'green'} />
					</p>
				) : personaje.status === 'Dead' ? (
					<p>
						Status: <FaCircle fontSize={20} color={'red'} />
					</p>
				) : (
					<p>
						Status Desconocido: <FaCircle fontSize={20} color={'orange'} />
					</p>
				)}
			</div>
			<img
				src={personaje.image}
				alt=""
				style={{ borderRadius: '50%', paddingBottom: 20 }}
			/>
			<p>Donde Vive: {personaje.location.name}</p>
		</div>
	)
}

//	STATUS => vivo - verde , muerto - rojo, desconocido - naranja
