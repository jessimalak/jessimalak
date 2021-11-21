import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";

interface CardProps {
  name: string;
  logo: string;
  platforms: string[];
  id: string;
}
export default function Card({ name, logo, platforms, id }: CardProps) {
  const [image, setImage] = useState("");
  useLayoutEffect(() => {
    import("../assets/" + logo).then((img) => setImage(img.default));
  });
  return (
    <Link to={id}>
      <div className="card">
        <img src={image} alt="logo" />
        <div className="horizontal-container icon-container">
          {platforms.map((p) => (
            <Icon name={"logo-" + p} />
          ))}
        </div>
      </div>
    </Link>
  );
}
