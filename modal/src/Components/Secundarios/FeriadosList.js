function FeriadosList({ feriados }) {
    return (
        <>
            <h3>Feriados Cadastrados:</h3>
            {feriados.length > 0 ? (
                feriados.map((feriado, index) => (
                    <p key={index}>{feriado}</p>
                ))
            ) : (
                <p>Não há feriados cadastrados</p>
            )}
        </>
    )
}

export default FeriadosList