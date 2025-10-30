import React, { useState } from 'react';
import {
  DashboardFilled
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { Coffee, CupSoda, Flame, PieChart, Users } from 'lucide-react';
import Dashboard from '../pages/Dashboard';
import Coffe from '../pages/Coffe';
import Tea from '../pages/Tea';
import Dessert from '../pages/Dessert';
import Team from '../pages/Team';
import Reports from '../pages/Reports';

const { Header, Content, Sider } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};

const items: MenuProps['items'] = [
  {
    key: '1',
    icon: <DashboardFilled />,
    label: 'Dashboard',
  },
  {
    key: '2',
    icon: <Coffee />,
    label: 'Cofe',
  },
  {
    key: '3',
    icon: <Flame />,
    label: 'Choy',
  },
  {
    key: '4',
    icon: <CupSoda />,
    label: 'Dessert',
  },
  {
    key: '5',
    icon: <Users />,
    label: 'Jamoa',
  },
  {
    key: '6',
    icon: <PieChart />,
    label: 'Hisobotlar',
  }
];

const HomePage: React.FC = () => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  const [selectedKey, setSelectedKey] = useState('1');
  const renderContent = () => {
    switch (selectedKey) {
      case '1':
        return <Dashboard />;
      case '2':
        return <Coffe />;
      case '3':
        return <Tea />;
      case '4':
        return <Dessert />;
      case '5':
        return <Team />;
      case '6':
        return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout hasSider>
      <Sider style={siderStyle}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          items={items}
          onClick={(e) => setSelectedKey(e.key)}
        />
      </Sider>
      <Layout style={{background: "#111621"}}>
        <Header style={{ paddingLeft: 24, background: "#1c2541", color: "white" }} >
          <h1>Admin</h1>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial', }}>
          <div
            style={{
              padding: 24,
              background: "#111621",
              color: 'white',
              borderRadius: borderRadiusLG,
            }}
          >
            {renderContent()}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default HomePage;