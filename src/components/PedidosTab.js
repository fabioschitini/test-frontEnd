import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Pedido from './sub-components/Pedidos'

function PedidoTab(props) {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Em Processo">
        <Pedido user={props.user} aprovado={false} status={"PROCESSO"} />
      </Tab>
      <Tab eventKey="profile" title="Aprovado">
        <Pedido user={props.user} aprovado={false}  status={"APROVADO"} />
      </Tab>
    </Tabs>
  );
}

export default PedidoTab;