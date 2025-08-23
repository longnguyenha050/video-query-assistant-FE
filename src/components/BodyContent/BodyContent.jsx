import React, { useState, useRef, useEffect } from "react";
import SearchHeader from "../SearchHeader/SearchHeader";
import SearchResults from "../SearchResults/SearchResults";
import { Tabs, ConfigProvider } from "antd";
import HistoryButton from "../HistoryButton/HistoryButton";

import { Layout } from "antd";
const { Header, Sider, Content } = Layout;

const BodyContent = () => {
  const [activeKey, setActiveKey] = useState(0);
  const [items, setItems] = useState([]);
  const newTabIndex = useRef(0);

  useEffect(() => {
    add();
  }, []);

  const onChange = (newActiveKey) => {
    setActiveKey(newActiveKey);
  };

  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current}`;
    const label = `New Tab ${newTabIndex.current + 1}`;
    const newPanes = [...items];
    newPanes.push({
      label,
      children: (
        <Layout>
          <ConfigProvider
            theme={{
              components: {
                Layout: {
                  siderBg: "#607B8B",
                },
              },
            }}
          >
            <Sider width={250}>
              <div style={{
                padding: "20px"
              }}>
                <HistoryButton />
              </div>
              {/* <div className="demo-logo-vertical" />
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["1"]}
                items={[
                  {
                    key: "1",
                    icon: <UserOutlined />,
                    label: "nav 1",
                  },
                ]}
              /> */}
            </Sider>
          </ConfigProvider>
          <Layout
            style={{
              background: "#cbd7e2",
            }}
          >
            <Header
              style={{
                padding: "0 16px",
                background: "#cbd7e2",
                height: "auto",
              }}
            >
              <div>
                <SearchHeader />
              </div>
            </Header>
            <Content
              style={{
                margin: "10px 16px",
                background:"#cbd7e2"
              }}
            >
              <SearchResults />
            </Content>
          </Layout>
        </Layout>
      ),
      key: newActiveKey,
    });
    newTabIndex.current += 1;
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;

    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });

    const newPanes = items.filter((item) => item.key !== targetKey);

    if (newPanes.length === 0) {
      setItems([]);
      setActiveKey(null);
      return;
    }

    if (newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }

    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const onEdit = (targetKey, action) => {
    if (action === "add") {
      add();
    } else {
      remove(targetKey);
    }
  };

  return (
    <div>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              horizontalMargin: 0,
            },
          },
        }}
      >
        <Tabs
          type="editable-card"
          onChange={onChange}
          activeKey={activeKey}
          onEdit={onEdit}
          items={items}
          hideAdd={false}
        />
      </ConfigProvider>
    </div>
  );
};

export default BodyContent;
