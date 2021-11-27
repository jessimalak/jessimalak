import { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";
import { motion } from 'framer-motion'

interface CardProps {
  name: string;
  logo: string;
  platforms: string[];
  id: string;
  index: number;
}
export default function Card({ name, logo, platforms, id, index }: CardProps) {
  const [image, setImage] = useState("");
  useLayoutEffect(() => {
    import("../assets/" + logo).then((img) => setImage(img.default));
  });
  return (
      <Link to={id}>
          <motion.div initial={{ translateX: '-100%', opacity: 0, scale: 0.5 }} animate={{ translateX: 0, opacity: 1, scale: 1 }}
              transition={{ delay: index / 4 }} className="card">
        <img src={image} alt="logo" />
        <div className="horizontal-container icon-container">
          {platforms.map((p) => (
            <Icon name={"logo-" + p} />
          ))}
        </div>
      </motion.div>
    </Link>
  );
}
