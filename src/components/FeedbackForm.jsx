import { useState } from "react";


function FeedbackForm() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [comentario, setComentario] = useState("");

    
    function enviarFeedback(event) {
        event.preventDefault();

        alert (`
            Nome: ${nome}
            Email: ${email}
            Comentário: ${comentario}    
        `);

        setNome("");
        setEmail("");
        setComentario("");
    }

    return(
        <>
            <div className="pagina-feedback">
                <form className="feedback-form" onSubmit={enviarFeedback}>
                    <h2>Deixe seu feedback</h2>
                    <p>Sua opinião é muito importante pra nós!</p>

                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text" 
                        placeholder="Nome" 
                        value={nome}
                        onChange={(event) => setNome(event.target.value)}
                        required
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email" 
                        placeholder="email@email.com" 
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                    />

                    <label htmlFor="comentario">Comentário</label>
                    <textarea
                        placeholder="Deixe seu comentário..."
                        value={comentario}
                        onChange={(event) => setComentario(event.target.value)}
                        required
                    />

                    <button type="submit">Enviar</button>
                </form>

            </div>
        </>
    );
}

export default FeedbackForm;