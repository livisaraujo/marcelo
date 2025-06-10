import { noticias } from "../../src/pages/api/noticias/noticias"; // Importa o array completo

export default function Page(req, res) {
    const { tipo } = req.query;
    

    const filtradas = noticias.filter((n) => {
        
        
        const tipo = String(n.tiponoticia || "").toLowerCase();
        return tipo === String(tipo).toLowerCase();
    });

    res.status(200).json(filtradas);
}
