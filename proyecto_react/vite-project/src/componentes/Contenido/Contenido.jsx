import './Contenido.css';

function Contenido() {
    return (
        <section className="contenido">
            <h3>Contactate con nosotros:</h3>
            <div>
                <p>Nos podés encontrar en Pedro Derbes y Av. Guillermo Rawson - Puerto Madryn</p>
                <br />
                <p>Telefono: 115858589977</p>
                <br />
                <p>Correo electrónico: contacto@represa.com</p>
                <form action="" method="post" className="formulario">
                    <fieldset>
                        <legend>Dejanos tus datos y te contactaremos</legend>
                        <br />
                        <div>
                            <label htmlFor="nombre">Nombre</label>
                            <br />
                            <input type="text" name="nombre" id="nombre" />
                        </div>
                        <div>
                            <label htmlFor="apellido">Apellido</label>
                            <br />
                            <input type="text" name="apellido" id="apellido" />
                        </div>
                        <div>
                            <label htmlFor="correo_electronico">Correo electrónico</label>
                            <br />
                            <input type="text" name="correo_electronico" id="correo_electronico" />
                        </div>
                        <div>
                            <label htmlFor="telefono">Teléfono</label>
                            <br />
                            <input type="text" name="telefono" id="telefono" />
                        </div>
                        <br />
                        <div>
                            <select name="pais" id="pais">
                                <option value="" disabled selected>¿Dónde vivís?</option>
                                <option value="A">Argentina</option>
                                <option value="C">Chile</option>
                                <option value="B">Brasil</option>
                            </select>
                        </div>
                        <br />
                    </fieldset>
                    <div>
                        <input type="submit" value="Enviar formulario" />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contenido;