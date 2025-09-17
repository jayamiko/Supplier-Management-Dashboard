import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ items }) => {
  return (
    <Breadcrumb>
      {items.map((item, index) => (
        <Breadcrumb.Item key={index}>
          {item.path ? (
            <Link to={item.path} style={{ color: "#1677ff" }}>
              {item.label}
            </Link>
          ) : (
            item.label
          )}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
