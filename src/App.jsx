/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Layout, Menu, Divider, Row, Avatar, AutoComplete, Switch } from "antd";
import {
  MessageOutlined,
  SettingOutlined,
  UserOutlined,
  PlusOutlined,
  RightCircleOutlined,
  LeftCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import Data from "./data";
import Styles from "./App.module.scss";
import ChatComponent from "./Chat";

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}

const App = () => {
  const { Sider } = Layout;
  const [collapsed, setCollapsed] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [mode, setMode] = useState(true);
  const [data, setData] = useState([]);

  const adminItems = [
    getItem("", "1", <MessageOutlined style={{ fontSize: 20 }} />),
    getItem("", "2", <UserOutlined style={{ fontSize: 20 }} />),
    getItem("", "3", <SettingOutlined style={{ fontSize: 20 }} />),
  ];

  const filterList = (data, searchString) => {
    return data?.filter((item) => {
      const isSearchStringMatch =
        searchString.length === 0 ||
        (mode
          ? item?.name?.toUpperCase()?.includes(searchString?.toUpperCase()) ||
            String(item?.id)?.includes(searchString?.toUpperCase())
          : item?.reasearhTopic
              ?.toUpperCase()
              ?.includes(searchString?.toUpperCase()));
      return isSearchStringMatch;
    });
  };

  const handleSearch = (value) => {
    console.log(value);
    setFilteredData(filterList(Data, value));
  };

  const handleSelection = (data) => {
    setData(data);
  };

  useEffect(() => {
    setFilteredData(Data);
  }, [Data, mode]);

  useEffect(() => {
    setData(Data?.[0]);
  }, [Data]);

  return (
    <Layout
      style={{
        minHeight: "100vh",
        backgroundColor: "white",
        overflow: "hidden",
        minWidth: "100vw",
      }}
    >
      <Sider
        trigger={null}
        style={{ borderRight: "1px solid #CFCFCF" }}
        collapsible
        onCollapse={(value) => setCollapsed(value)}
        width={collapsed ? "25%" : "5%"}
      >
        <div style={{ width: collapsed ? "25%" : "100%" }}>
          <Row style={{ padding: "5% 5% 0" }} justify={"center"}>
            <Avatar size="large" icon={<UserOutlined />} />
          </Row>
          <div style={{ margin: "-10px 15px 0" }}>
            <Divider className={Styles.divider} />
          </div>
          <Menu
            selectedKeys={["1"]}
            mode="inline"
            items={adminItems}
            onChange={(e) => {
              console.log(e);
            }}
          />

          <Row
            className={Styles.profileContanier}
            style={{
              width: collapsed ? "20%" : "80%",
              padding: collapsed ? "0 5px 2% 4%" : "0 5px 2% 10%",
            }}
          >
            <div style={{ marginBottom: 20 }}>Mode 2</div>
            <div
              style={{
                transform: "rotate(90deg)",
                display: "inline-block",
                justifyContent: "center",
              }}
            >
              <Switch defaultChecked onChange={setMode} />
            </div>
            <div style={{ marginTop: 20 }}>Mode 1</div>
          </Row>
        </div>

        <div style={{ background: collapsed ? "#020228" : "", width: "80%" }}>
          {collapsed && (
            <div>
              <div style={{ padding: 10, display: "flex" }}>
                <AutoComplete
                  style={{ width: "85%" }}
                  placeholder={!mode ? "search Name" : "Search Topic"}
                  suffixIcon={<SearchOutlined />}
                  onChange={handleSearch}
                />
                <div
                  style={{
                    background: "white",
                    height: 20,
                    width: 20,
                    textAlign: "center",
                    marginLeft: 10,
                    marginTop: 6,
                  }}
                >
                  <PlusOutlined />
                </div>
              </div>
              <div style={{ maxHeight: "92vh" }}>
                {filteredData.map((i) => {
                  if (!mode) {
                    return (
                      <div
                        key={i.id}
                        style={{
                          margin: "10px 0px",
                          cursor: "pointer",
                          backgroundColor: data?.id === i.id ? "#343547" : "",
                        }}
                        onClick={() => handleSelection(i)}
                      >
                        <div
                          style={{
                            fontSize: 18,
                            color: "#cfcfcf",
                            margin: "15px 25px 0",
                          }}
                        >
                          {i.reasearhTopic}
                        </div>
                        <div
                          style={{
                            fontSize: 10,
                            color: "#cfcfcf",
                            margin: "0 25px 20px",
                          }}
                        >
                          {i.dateOfSearch}
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div
                      key={i.id}
                      style={{
                        margin: "10px 0px",
                        cursor: "pointer",
                        height: 50,
                        backgroundColor: data?.id === i.id ? "#343547" : "",
                      }}
                      onClick={() => handleSelection(i)}
                    >
                      <div
                        style={{
                          fontSize: 18,
                          color: "#cfcfcf",
                          margin: "15px 25px 0",
                        }}
                      >
                        {i.name}
                      </div>
                      <div
                        style={{
                          fontSize: 10,
                          color: "#cfcfcf",
                          margin: "0 25px 20px",
                        }}
                      >
                        {i.dateOfSearch}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <Row
          justify={"end"}
          style={{
            position: "relative",
            background: "#020228",
          }}
        >
          {!collapsed ? (
            <RightCircleOutlined
              className={Styles.sideMenuIconClose}
              onClick={() => setCollapsed(!collapsed)}
            />
          ) : (
            <LeftCircleOutlined
              className={Styles.sideMenuIconOpen}
              onClick={() => setCollapsed(!collapsed)}
            />
          )}
        </Row>
      </Sider>

      <ChatComponent content={data} flag={collapsed} modeFlag={mode} />
    </Layout>
  );
};

export default App;
