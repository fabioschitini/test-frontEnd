import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Pedido from './sub-components/Pedidos'

function PedidoTab() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Em Processo">
        <Pedido />
      </Tab>
      <Tab eventKey="profile" title="Aprovado">
        <Pedido />
      </Tab>
    </Tabs>
  );
}

export default PedidoTab;