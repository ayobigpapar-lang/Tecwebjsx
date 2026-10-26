function PeliculaCard({ titulo, año, director, calificacion, imagen }) {
  return (
    <article className="pelicula-card">
      <img className="pelcicula-card_image" src={imagen} alt={titulo} />
      <div className="pelicula-card_content">
        <h3 className="pelicula-card_title">{titulo}</h3>
        <p className="pelicula-card_info">{año}-{director}</p>
        <p className="pelicula-card_rating" >{calificacion}</p>
      </div>
    </article>
  );
}
export default PeliculaCard;
/* crear un componente llaamo pelicula card que reciba parametros titulo año director calificaion e imagen 
y que devuelva dentro de uan etiqueta article una etiqeuta img con imagen y titulo
dentro de un h3 que muestre el tuitulo un parrafo que muestre año y director y otro parrafo que muestre la calificacion*/

