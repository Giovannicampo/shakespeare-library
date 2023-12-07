import { IconButton } from "@mui/material";
import { styled } from "styled-components";
import PersonIcon from "@mui/icons-material/Person";
import { ReactElement } from "react";

const Header = styled.div`
  display: flex;
  padding: 10px;
`;

const Logo = styled.div`
  flex: 1;
  will-change: filter;
  transition: filter 300ms;
  text-align: center;
  padding-bottom: 1.5em;
`;

const ToolBar = styled.div`
  flex: 3;
  display: flex;
`;

const Context = styled.div`
  flex: 2;
  font-size: 2rem;
  text-align: left;
  align-self: center;
  z-index: 1;
`;

const Icon = styled.div`
  flex: 1;
  text-align: center;
  align-self: center;
`;

export default function HeaderBar(props: any): ReactElement {
  return (
    <>
      <Header>
        <Logo className="logo">
          <img src={props.logo} style={{ height: `8em` }}></img>
        </Logo>
        <ToolBar>
          <Context>{props.context}</Context>
          <Icon>
            <IconButton>
              <PersonIcon
                style={{ height: "1em", color: "white" }}
              ></PersonIcon>
            </IconButton>
          </Icon>
        </ToolBar>
      </Header>
    </>
  );
}
