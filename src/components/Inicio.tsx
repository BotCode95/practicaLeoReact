import { Link } from 'react-router-dom'
export const Inicio = () => {
	return (
		<div className="card" style={{ width: '18rem' }}>
			<img src="..." className="card-img-top" alt="Hola Mundo" />
			<div className="card-body">
				<h5 className="card-title">Card title</h5>
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
