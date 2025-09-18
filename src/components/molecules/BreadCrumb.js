import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ items, children }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <Breadcrumb>
        {items.map((item, index) => (
          <Breadcrumb.Item key={index}>
            {item.path ? (
              <Link to={item.path} className="text-blue-600">
                {item.label}
              </Link>
            ) : (
              item.label
            )}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
      {children}
    </div>
  );
};

export default Breadcrumbs;
