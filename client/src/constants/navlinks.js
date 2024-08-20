import {
  Dashboard,
  Campaign,
  Money,
  Card,
  Profile,
  Logout,
} from "../assets/icons";

export const navlinks = [
  {
    name: "dashboard",
    Icon: Dashboard,
    link: "/",
  },
  {
    name: "campaign",
    Icon: Campaign,
    link: "/create-campaign",
  },
  {
    name: "payment",
    Icon: Money,
    link: "/payment",
    disabled: true,
  },
  {
    name: "withdraw",
    Icon: Card,
    link: "/withdraw",
    disabled: true,
  },
  {
    name: "profile",
    Icon: Profile,
    link: "/profile",
  },
  {
    name: "logout",
    Icon: Logout,
    link: "/logout",
    disabled: true,
  },
];
