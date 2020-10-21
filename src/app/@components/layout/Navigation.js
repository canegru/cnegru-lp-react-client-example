import React from 'react';
import { get, has } from 'lodash';
import { Link, withRouter } from 'react-router-dom';
import { menuConfig } from '../../@config';

function BlankComponent(props) {
  return (null);
}

function MenuItemList({ nav, item, index }) {
  const { label, icon, pathname } = item;
  let disabled = false;

  const isActive = nav === pathname;
  const IconComponent = icon ? icon : BlankComponent;
  const hasChildren = has(item, 'children');

  if (disabled) return <div></div>;
  if (hasChildren) return (
    <div className="w-full">
      <div className="w-full pt-5 pb-2">
        <span className="text-xs pl-10 mr-5 py-3 font-light text-white">{label}</span>
      </div>
      {item.children.map((itemChild, indexChild) => <MenuItemList key={indexChild} item={itemChild} nav={nav} index={indexChild} />)}
    </div>
  )
  return (
    <div className="w-full">
      <Link
        href={pathname}
        to={{ pathname: item.pathname }}
      >
        <div className={`w-full pl-10 mr-5 py-3 flex items-center text-blue ${isActive ? 'bg-purple-600 item-active text-purple-100' : 'text-purple-400'} menu-item-select`}>
          <IconComponent fontSize="small" className={`mr-3 ${isActive ? 'text-purple-200' : 'text-purple-400'}`} />
          <span className="text-sm">{label}</span>
        </div>
      </Link>
    </div>
  )
}

function Navigation(props) {
  const pathname = get(props, 'location.pathname', '');

  return (
    <div className="min-w-250p flex bg-purple-700 min-h-screen">
      <div className="w-full flex flex-col pt-20">
        {menuConfig.map((item, index) => <MenuItemList key={index} item={item} nav={pathname} index={index} />)}
      </div>
    </div>
  )
}
export default withRouter(Navigation);