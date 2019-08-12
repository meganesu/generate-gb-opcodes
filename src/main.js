import ReactDOM from 'react-dom';
import OpCodeTable from './components/op-code-table';

const App = ({text}) => (
  <OpCodeTable />
);

// use opCodesGrid to generate an HTML table
ReactDOM.render(<App />, document.getElementById('container'));
