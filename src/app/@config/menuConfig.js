import { HomeOutlined, StarOutlined } from '@ant-design/icons';

const Menu = [
  {
    label: "Home",
    pathname: "/",
    icon: HomeOutlined,
  },
  {
    label: "NewPage",
    children: [
      {
        label: "Page 1",
        name: "NewPage Page 1",
        pathname: "/new-page/page-one",
        icon: StarOutlined,
      },
      {
        label: "Page 2",
        name: "NewPage Page 2",
        pathname: "/new-page/page-two",
        icon: StarOutlined,
      },
    ],
  },
];

export default Menu;