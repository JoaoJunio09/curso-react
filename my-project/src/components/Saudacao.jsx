function Saudacao({ nome }) {

	function gerarSaudacao(algumNome) {
		return `Olá, ${algumNome}, tudo bem?`;
	}

	return (
		<>
			<p>{nome && gerarSaudacao(nome)}</p>
		</>
	)
}

export default Saudacao;