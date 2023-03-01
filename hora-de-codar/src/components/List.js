import Item from "./secundarios/Item"

function List() {
    return (
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Ferrari" lancamento={1985} />
                <Item marca="Fiat" lancamento={1964} />
                <Item marca="Renault" lancamento={1999} />
                <Item />
            </ul>
        </>
    )
}

export default List