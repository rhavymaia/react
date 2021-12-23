import { useState } from 'react';

function App() {
  // const [nome, setNome] = useState('');
  // const [email, setEmail] = useState('');
  const [form, setForm] = useState({
    nome: '',
    email: '',
  });

  const handleChange = ({ target }) => {
    const { id, value } = target;
    console.log(id + ' mudou: ' + value);
    const novoForm = { ...form, [id]: value };
    setForm(novoForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(JSON.stringify(form));
    // Requisição POST enviando o JSON.
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        //setResponse(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome:</label>
      <input
        type="text"
        name="nome"
        id="nome"
        value={form.nome}
        onChange={handleChange}
      />

      <label htmlFor="email">E-mail:</label>
      <input
        type="email"
        name="email"
        id="email"
        value={form.email}
        onChange={handleChange}
      />
      <h1>{form.nome}</h1>
      <h1>{form.email}</h1>

      <button type="submit">Enviar</button>
    </form>
  );
}

export default App;
