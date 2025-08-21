import React, { useState, useRef, useEffect } from "react";
import Header from "../Header/Header";
import SearchResults from "../SearchResults/SearchResults";
import { Tabs, ConfigProvider } from "antd";

const Content = () => {
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
        <>
          <Header />
          <SearchResults />
        </>
      ),
      key: newActiveKey,
    });
    newTabIndex.current += 1;
    setItems(newPanes);
    setActiveKey(newActiveKey);
    console.log("newactive key: ", newPanes);
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
    <div
    >
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
          inkBar:true
        />
      </ConfigProvider>
    </div>
  );
};

export default Content;
