import travis from "../assets/travis.jpg"

export default function Travis() {
  return (
    <div>
      <h2 className="text-4xl font-medium">Travis Scott</h2>
      <img src={travis} alt="Imagem do cantor Travis Scott"/>
      <p className="text-3xl">Jacques Berman Webster II, mais conhecido por seu nome artístico Travis Scott, é um rapper, cantor, compositor e produtor musical norte-americano. Em 2012, Scott assinou seu primeiro grande contrato com a gravadora Epic Records.</p>
      <a href="https://open.spotify.com/intl-pt/artist/0Y5tJX1MQlPlqiwlOH1tJY?autoplay=true" className="text-2xl font-medium">Suas Músicas</a>
    </div>
  )
}
