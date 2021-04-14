import styled from "styled-components";
import { makeStyles, Avatar as AvatarBase } from "@material-ui/core";
import { Drawer, ListItem as ListItemBase } from "@material-ui/core";

export const DrawerDesktop = styled(Drawer)`
  .MuiDrawer-paper {
    width: 256px;
    top: 64px;
    height: calc(100% - 64px);
  }
`;

export const useStylesMobile = makeStyles(() => ({
  mobileDrawer: {
    width: 256,
  },
}));

export const Avatar = styled(AvatarBase)`
  cursor: pointer;
  width: 64px;
  height: 64px;
`;

export const BoxAvatar = styled.div`
  display: grid;
  row-gap: 8px;
  justify-items: center;
  padding: 16px;
`;

export const ListItem = styled(ListItemBase)`
  padding-top: 0;
  padding-bottom: 0;
  .title {
    margin-right: auto;
  }
`;
