export const LastMovieInDb = () => {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Last movie in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
           
              <img
                className="img-fluid px-3 px-sm-4 mt-3 mb-4 logo__peli__container"
                style={{ width: "40rem" }}
                src="/images/mandalorian.webp"
                alt=" Star Wars - Mandalorian "
              />
          </div>
          <p>
          Ambientada tras la caída del Imperio descrita en la trilogía original de historias del universo Star Wars, THE MANDALORIAN presenta a un nuevo héroe. El Mandaloriano (Pedro Pascal) es un lobo solitario que trabaja duro en los confines del universo. Procede de una antigua raza de guerreros y cazarrecompensas, una especie de espejo oscuro de los nobles luchadores Jedi, y hasta ahora, el Mandaloriano se ha contentado con mantener las tradiciones de su pueblo. Pero cuando un misterioso nuevo trabajo le pone en contacto con una forma de vida a la que nunca hubiera imaginado enfrentarse, el Mandaloriano se ve de repente dispuesto a correr riesgos desesperados para proteger lo que más quiere.
          </p>
          <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
            View movie detail
          </a>
        </div>
      </div>
    </div>
  );
};
