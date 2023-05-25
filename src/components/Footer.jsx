import "./Footer.css"

export function Footer( {filters} ){
    return(
        <footer className="footer">
            <h4>Filtros activos
            <span>@E-commerce</span></h4>
            <h5>Shopping Cart con UseContext & UseReducer</h5>
            {
                JSON.stringify(filters,null,2)
            }
        </footer>
    )

}