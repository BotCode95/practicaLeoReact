export const Contacto = () => {
	return (
		<div>
			<h3>Pagina de Contacto</h3>
			<div className="row justify-content-center">
				<div className="col-6">
					<form action="">
						<div className="mb-3">
							<label className="form-label">Email address</label>
							<input
								type="email"
								className="form-control"
								id="exampleFormControlInput1"
								placeholder="name@example.com"
							/>
						</div>
						<div className="mb-3">
							<label className="form-label">Example textarea</label>
							<textarea
								className="form-control"
								id="exampleFormControlTextarea1"
								rows={3}
							></textarea>
						</div>
						<button type="submit" className="btn btn-primary">
							Enviar Datos
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}
