import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import projects from "../projects";
import { project } from "../types";
import Icon from "../components/Icon";

export default function ProjectScreen() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<project>();
  useEffect(() => {
    const info = projects[name || ""];
    console.log(info);
    if (info) {
      import("../assets/" + info.icon).then((img) =>
        setData({ ...info, logo: img.default })
      );
    } else navigate("/");
  }, []);
  return (
    <section className="screen">
      <div className="horizontal-container between">
        <h1>{data?.name}</h1>
        <div className="icon-container">
          {data?.platforms.map((p) => (
            <Icon name={"logo-" + p} size="2rem" />
          ))}
        </div>
      </div>
      <img src={data?.logo} alt="icono" className='app-icon' />
    </section>
  );
}
