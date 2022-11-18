import { Avatar, Button, List } from "antd";
import React, { useState } from "react";

type GuestBookItem = {
    key: number;
    title: string;
    content: string;
    username: string;
  }
  
  const sample: GuestBookItem[] = [
    {
      key: 1,
      title: '안녕',
      content: '첫번째',
      username: '은지',
    },
    {
      key: 1,
      title: '반가워용',
      content: '두번째',
      username: '별'
    },
  ];
  
const GuestBook = () => {
const [loading, setLoading ] = useState<boolean>(false);
    return (
    <>
    <List
      loading={loading}
      style={{ background: "#fff "}}
      itemLayout="horizontal"
      dataSource={sample}
      renderItem={(item) => (
        <List.Item >
          <List.Item.Meta
            avatar={
            <div style={{
              display: "flex", 
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "20px"
              }}>
              <Avatar src="https://joeschmoe.io/api/v1/random" />
              <>{item.username}</>
            </div>
          }
            title={item.title}
            description={item.content}
          />
        </List.Item>
      )}
    />
    <Button 
        onClick={() => {
            setLoading(true);
            setTimeout(() => {
            setLoading(false);
         }, 500);
        }} //TODO: 이따할거양

         >수동 새로고침</Button>
    </>
  );
  
  };

  export default GuestBook;