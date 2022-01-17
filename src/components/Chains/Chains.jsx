import { useEffect, useState } from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useChain } from "react-moralis";

const styles = {
  item: {
    display: "flex",
    alignItems: "center",
    height: "42px",
    fontWeight: "400",
    fontFamily: "Roboto, sans-serif",
    fontSize: "14px",
    padding: "10px",
    a: {
    color: "#FFF",}
  },
  button: {
    border: "#222",
    borderRadius: "30px",
  },
};

const menuItems = [
  {
    key: "0xfa",
    value: "Fantom Opera",
  },
  {
    key: "0x1",
    value: "Ethereum",
  },
  {
    key: "0x38",
    value: "Binance",
  },
  {
    key: "0x89",
    value: "Polygon",
  },
  {
    key: "0xa86a",
    value: "Avalanche",
  },
];

function Chains() {
  const { switchNetwork, chainId, chain } = useChain();
  const [selected, setSelected] = useState({});

  console.log("chain", chain)

  useEffect(() => {
    if (!chainId) return null;
    const newSelected = menuItems.find((item) => item.key === chainId);
    setSelected(newSelected);
    console.log("current chainId: ", chainId);
  }, [chainId]);

  const handleMenuClick = (e) => {
    console.log("switch to: ", e.key);
    switchNetwork(e.key);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      {menuItems.map((item) => (
        <Menu.Item key={item.key} icon={item.icon} style={styles.item}>
          <span style={{ marginLeft: "5px" }}>{item.value}</span>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={menu} trigger={["click"]}>
        <Button key={selected?.key} icon={selected?.icon} style={{ ...styles.button, ...styles.item }}>
          <span style={{ marginLeft: "5px" }}>{selected?.value}</span>
          <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
}

export default Chains;
