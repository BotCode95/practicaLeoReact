import { Link } from 'react-router-dom'
import { FaCoffee } from 'react-icons/fa' //FontAwesome

export const Inicio = () => {
	return (
		<div
			className="card"
			style={{ width: '18rem', margin: 'auto', marginTop: '20px' }}
		>
			<FaCoffee fontSize={50} style={{ margin: 'auto' }} color={'#720101'} />
			<div className="card-body">
				<h5 className="card-title">Cafecito</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the
					bulk of the card's content.
				</p>
				<Link to="listado-personajes" className="btn btn-primary">
					Ir al listado de personajes
				</Link>
			</div>
		</div>
	)
}
