import { noticias } from "../noticias"

export default function handler(req, res) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    const encontrado = noticias.filter((noticia) =>
        noticia.tiponoticia.toString() === req.query.tiponoticia);
    if (!encontrado) {
      return res.status(404).json({ error: "Notícia não encontrada" });
    }
    res.status(200).json(encontrado)
}