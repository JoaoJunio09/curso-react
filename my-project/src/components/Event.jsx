function Event() {

	function meuEvent() {
		console.log('executou o evento');
	}

	return (
		<div>
			<p>Clique para disparar um evento:</p>
			<button onClick={meuEvent}></button>
		</div>
	)
}

export default Event;