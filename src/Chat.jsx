/* eslint-disable react/prop-types */


import { Avatar, Col, Divider, Input, Row } from "antd";
import { UserOutlined, SendOutlined, AudioOutlined } from "@ant-design/icons";
import { LuFlower } from "react-icons/lu";

const ChatComponent = ({ content, flag, modeFlag }) => {
  return (
    <div
      style={{
        width: "100%",
        padding: "20px",
        backgroundColor: modeFlag ? "#E6E6FA" : "#020228",
        color: modeFlag ? "" : "#ffff",
      }}
    >
      <h3>{modeFlag ? content?.name : content?.reasearhTopic}</h3>
      <div>
        <Divider style={{ borderColor: "grey", color: "grey" }}>Today</Divider>
      </div>
      <div
        className="chatContainer"
        style={{ overflowY: "scroll", height: "75vh" }}
      >
        {(modeFlag ? content?.chat : content?.researchChat)?.map((item) => {
          return item?.mychat ? (
            <Row justify={"end"}>
              <Col style={{ display: "flex" }}>
                <div
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#9184b9",
                    padding: "10px",
                    marginRight: "50px",
                    color: "whitesmoke",
                    marginTop: 20,
                  }}
                >
                  {item?.chatcontent}
                </div>
                <Avatar
                  style={{ position: "absolute", right: 0, bottom: 0 }}
                  size={40}
                  icon={<UserOutlined />}
                />
              </Col>
            </Row>
          ) : (
            <Row>
              <Col span={14} style={{ display: "flex" }}>
                <div
                  style={{
                    borderRadius: "10px",
                    backgroundColor: "#BDB5D5",
                    padding: "10px",
                    marginLeft: "50px",
                    marginTop: "20px",
                  }}
                >
                  {item?.chatcontent}
                </div>

                <div className="chatIconContainer">
                  <LuFlower
                    className={modeFlag ? "chatIcon" : "chatIconRotate"}
                  />
                </div>
              </Col>
            </Row>
          );
        })}

        <Row
          style={{
            position: "absolute",
            bottom: "10px",
            width: !flag ? "93%" : "68%",
            display: "flex",
          }}
        >
          <Input
            placeholder="Type your message here..."
            suffix={<SendOutlined />}
            style={{ width: "95%", height: 40, borderRadius: 15 }}
          />
          <div
            style={{
              backgroundColor: "lightgrey",
              borderRadius: "50px",
              width: "35px",
              height: "35px",
              marginLeft: "10px",
              textAlign: "center",
            }}
          >
            <AudioOutlined style={{ marginTop: 10 }} />
          </div>
        </Row>
      </div>
    </div>
  );
};

export default ChatComponent;
