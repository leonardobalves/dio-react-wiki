import gitHubLogo from '../assets/github-white-logo.png';
import { Container } from './styles';
import Input from '../components/Input';
import ItemRepo from '../components/ItemRepo';
import { useState } from 'react';

function App() {
  const [repos, setRepos] = useState([]);
  return (
    <Container>
      <img src={gitHubLogo} alt='GitHub White Logo PNG' width={72} height={72}/>
      <Input />
      <ItemRepo />
    </Container>);
}

export default App;