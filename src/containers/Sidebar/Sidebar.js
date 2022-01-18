import React from "react";

import { Link } from "react-router-dom";
import Logo from "../../assets/icons/logo.png";
import Button from "../../components/Button/index";
import {
  OverviewICon,
  TicketsICon,
  AgentsIcon,
  SubsIcon,
  SettingsIcon,
  ArticlesIcon,
  ContactIcon,
  IdeasIcon,
} from "../../assets/icons/icons";

import "./sidebar.scss";

// const [active, setActive] = useState("");

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { setActive: " " };
  }
  render() {
    return (
      <div className="side-bar">
        <div role="button" className="logo">
          <img src={Logo} alt="" />
          <span>Dashboard Kit</span>
        </div>
        <Link
          to="/overview"
          onClick={() =>
            this.setState({
              setActive: "overview",
            })
          }
          className={this.state.setActive === "overview" ? "active" : ""}
        >
          <Button
            title="Overview"
            btnClass={`btn chart-icon ${
              this.state.setActive === "overview" ? "active" : " "
            }`}
            icon={<OverviewICon />}
          />
        </Link>
        <Link
          to="/tickets"
          onClick={() =>
            this.setState({
              setActive: "tickets",
            })
          }
        >
          <Button
            title="Tickets"
            btnClass={`${
              this.state.setActiveactive === "tickets" ? "active" : ""
            } btn ticket-icon`}
            icon={<TicketsICon />}
          />
        </Link>
        <Link
          to="/ideas"
          onClick={() =>
            this.setState({
              setActive: "ideas",
            })
          }
        >
          <Button
            title="Ideas"
            btnClass={`btn ideas-icon ${
              this.state.setActive === "ideas" ? "active" : " "
            }`}
            icon={<IdeasIcon />}
          />
        </Link>
        <Link
          to="/contacts"
          onClick={() =>
            this.setState({
              setActive: "contact",
            })
          }
        >
          <Button
            title="Contacts"
            btnClass={`btn contact-icon ${
              this.state.setActive === "contacts" ? "active" : " "
            }`}
            icon={<ContactIcon />}
          />
        </Link>
        <Link
          to="/agents"
          onClick={() =>
            this.setState({
              setActive: "agents",
            })
          }
        >
          <Button
            title="Agents"
            icon={<AgentsIcon />}
            btnClass={`btn agent-icon ${
              this.state.setActive === "agents" ? "active" : " "
            }`}
          />
        </Link>
        <Link
          to="/articles"
          onClick={() =>
            this.setState({
              setActive: "articles",
            })
          }
        >
          <Button
            btnClass={`btn article-icon ${
              this.state.setActive === "articles" ? "active" : " "
            }`}
            title="Articles"
            icon={<ArticlesIcon />}
          />
        </Link>
        <Link
          to="/settings"
          onClick={() =>
            this.setState({
              setActive: "settings",
            })
          }
        >
          <Button
            title="Settings"
            btnClass={`btn settings-icon ${
              this.state.setActive === "settings" ? "active" : " "
            }`}
            icon={<SettingsIcon />}
          />
        </Link>
        <Link
          to="/subscription"
          onClick={() =>
            this.setState({
              setActive: "subscription",
            })
          }
        >
          <Button
            title="Subscribtion"
            btnClass={`btn subs-icon ${
              this.state.setActive === "subscription" ? "active" : " "
            }`}
            icon={<SubsIcon />}
          />
        </Link>
      </div>
    );
  }
}

export default Sidebar;
