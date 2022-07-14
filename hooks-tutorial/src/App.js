import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function App() {
  const URL_BASE = 'http://localhost:3000';

  function handleClick(event) {
    console.log('Funcionou essa cebola!');
    let jsonDisciplinas = fetch(URL_BASE + '/disciplinas')
      .then((response) => {
        console.log('Deu certo!');
        return response.json();
      })
      .catch((error) => {
        //TODO: Ajustar mensagem de erro para o usuário.
        console.log('Deu errado!');
        return Promise.reject();
      });

    console.log(jsonDisciplinas);
    jsonDisciplinas.then((data) => {
      console.log('Manipulando o JSON!');
      console.log(data);
    });
  }

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
          <tr>
            <td>1</td>
            <td>Linguagem de Script</td>
            <td>Rhavy Maia Guedes</td>
            <td>67h</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
