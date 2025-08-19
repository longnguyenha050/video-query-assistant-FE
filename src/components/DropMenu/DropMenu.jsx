import React, { useState } from "react";
import { TreeSelect } from "antd";
import SingleTextSearch from "../SearchContent/SingleTextSearch";
import GroupTextSearch from "../SearchContent/GroupTextSearch";
import styles from "./DropMenu.module.css";

const treeData = [
  {
    title: "Text Search",
    children: [
      {
        title: "Single Text Search",
        value: "0-0-1",
      },
      {
        title: "Group Text Search",
        value: "0-0-2",
      },
      {
        title: "ABC Text Search",
        value: "0-0-3",
      },
    ],
  },
  {
    title: "ABC Search",
    value: "0-1",
  },
];

const DropMenu = () => {
  const [value, setValue] = useState("0-0-1");
  const onChange = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  const renderSearchComponents = () => {
    switch (value) {
      case "0-0-1":
        return <SingleTextSearch />;
      case "0-0-2":
        return <GroupTextSearch />;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.dropMenu}>
        <TreeSelect
          style={{ width: "100%" }}
          size="large"
          value={value}
          styles={{
            popup: { root: { maxHeight: 500, overflow: "auto" } },
          }}
          treeData={treeData}
          placeholder="Please select"
          treeDefaultExpandAll
          onChange={onChange}
        />
      </div>
      <div className={styles.searchBox}>{renderSearchComponents()}</div>
    </div>
  );
};

export default DropMenu;
