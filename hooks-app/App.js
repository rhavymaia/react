import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function App() {
  const URL_BASE = 'http://localhost:3000';

  let [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    console.log('Ao carregar a página');
    console.log('Funcionou essa cebola!');
    let disciplinasPromisse = fetch(URL_BASE + '/disciplinas')
      .then((response) => {
        console.log('Deu certo!');
        return response.json();
      })
      .catch((error) => {
        //TODO: Ajustar mensagem de erro para o usuário.
        console.log('Deu errado!');
        return Promise.reject();
      });

    console.log(disciplinasPromisse);
    disciplinasPromisse.then((data) => {
      console.log('Manipulando o JSON!');
      setDisciplinas(data);
    });
  }, []);

  function handleClick(event) {}

  return (
    <div>
      <h1>Listagem das disciplinas</h1>
      <Button variant="primary" onClick={handleClick}>
        Listar
      </Button>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Código</th>
            <th>Disciplina</th>
            <th>Professor</th>
            <th>Carga horária</th>
          </tr>
        </thead>
        <tbody>
          {disciplinas.map((disciplina) => {
            return (
              <tr key={disciplina.id}>
                <td>{disciplina.id}</td>
                <td>{disciplina.nome}</td>
                <td>{disciplina.professor}</td>
                <td>{disciplina.ch}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
