import AssignmentIcon from '@mui/icons-material/Assignment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import * as React from 'react';
import { Link, LinkProps } from 'react-router-dom';

interface sidebarItem {
  icon: React.ReactElement;
  primary: string;
  to: string;
}

const sidebarItems: sidebarItem[] = [
  { icon: <AssignmentIcon />, primary: '測試0', to: 'test0' },
  { icon: <AssignmentIcon />, primary: '測試1', to: 'test1' },
];

function ListItemLink(props: sidebarItem) {
  const { icon, primary, to } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<HTMLAnchorElement, Omit<LinkProps, 'to'>>((itemProps, ref) => (
        <Link to={to} ref={ref} role={undefined} className={itemProps.className}>
          {itemProps.children}
        </Link>
      )),
    [to]
  );

  return (
    <ListItemButton component={renderLink}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </ListItemButton>
  );
}

export function SidebarHomepage() {
  const homepage: sidebarItem = { icon: <DashboardIcon />, primary: '首頁', to: '' };
  return React.createElement(ListItemLink, homepage);
}

export default function SidebarItems() {
  return (
    <>
      {sidebarItems.map(({ primary, icon, to }) => (
        <ListItemLink key={primary} icon={icon} to={to} primary={primary} />
      ))}
    </>
  );
}
