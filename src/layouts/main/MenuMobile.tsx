import { useState, useEffect, ReactNode } from 'react';
// next
import NextLink from 'next/link';
import { useRouter } from 'next/router';
// @mui
import { alpha, styled } from '@mui/material/styles';
import {
  Box,
  List,
  Link,
  Drawer,
  Collapse,
  LinkProps,
  ListItemText,
  ListItemIcon,
  ListItemButton,
  ListItemButtonProps,
  Stack
} from '@mui/material';
// config
import { NAVBAR } from '../../config';
// components
import Logo from '../../components/Logo';
import Iconify from '../../components/Iconify';
import Scrollbar from '../../components/Scrollbar';
import { IconButtonAnimate } from '../../components/animate';
import { NavSectionVertical } from '../../components/nav-section';
//
import { MenuProps, MenuItemProps } from './type';

// ----------------------------------------------------------------------

type StyleProps = LinkProps & ListItemButtonProps;

interface ListItemStyleProps extends StyleProps {
  component?: ReactNode;
}

const ListItemStyle = styled(ListItemButton)<ListItemStyleProps>(({ theme }) => ({
  ...theme.typography.body2,

  marginTop: 0,
  height: NAVBAR.DASHBOARD_ITEM_ROOT_HEIGHT,
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
}));

// ----------------------------------------------------------------------

export default function MenuMobile({ isOffset, isHome, navConfig }: MenuProps) {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (drawerOpen) {
      handleDrawerClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <IconButtonAnimate
        onClick={handleDrawerOpen}
        sx={{
          ml: 1,
          pr: 0,
          ...(isHome && { color: 'common.white' }),
          ...(isOffset && { color: 'text.primary' }),
        }}
      >
        <Iconify icon={'eva:menu-2-fill'} />
      </IconButtonAnimate>

      <Drawer
        open={drawerOpen}
        anchor='right'
        onClose={handleDrawerClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{ sx: { pb: 5, width: 260 } }}
      >
        <Scrollbar>
          <Stack height="100px" direction="row" alignItems="center" justifyContent="flex-end">
            <p>close icon</p>
          </Stack>

          <List disablePadding>
            {navConfig.map((link) => (
              <MenuMobileItem key={link.title} item={link} isOpen={open} onOpen={handleOpen} />
            ))}
          </List>
        </Scrollbar>
      </Drawer>
    </>
  );
}

// ----------------------------------------------------------------------

type MenuMobileItemProps = {
  item: MenuItemProps;
  isOpen: boolean;
  onOpen: VoidFunction;
};

function MenuMobileItem({ item, isOpen, onOpen }: MenuMobileItemProps) {
  const { pathname } = useRouter();
  const { title, path, icon, children } = item;
  const isActive = pathname === path;
  if (children) {
    return (
      <>
        <ListItemStyle onClick={onOpen} dense>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText disableTypography primary={title} />
          <Iconify
            icon={isOpen ? 'eva:arrow-ios-downward-fill' : 'eva:arrow-ios-forward-fill'}
            sx={{ width: 16, height: 16, ml: 1 }}
          />
        </ListItemStyle>

        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <Box sx={{ display: 'flex', flexDirection: 'column-reverse', mt: '0' }}>
            <NavSectionVertical
              navConfig={children}
              sx={{
                '& .MuiList-root:last-of-type .MuiListItemButton-root': {
                  height: 40,
                  paddingLeft: 5,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  //bgcolor: 'background.default',
                  backgroundRepeat: 'no-repeat',

                },
              }}
            />
          </Box>
        </Collapse>
      </>
    );
  }


  return (
    <NextLink href={path} passHref>
      <ListItemStyle
        sx={{
          ...(isActive && {
            color: 'primary.main',
            fontWeight: 'fontWeightMedium',
            bgcolor: (theme) =>
              alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
          }),
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText disableTypography primary={title} />
      </ListItemStyle>
    </NextLink>
  );
}
