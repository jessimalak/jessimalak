import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import projects from "../projects";
import { project } from "../types";
import Icon from "../components/Icon";
import { Carousel } from "react-bootstrap";

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
      <div className="horizontal-container info">
        <img src={data?.logo} alt="icono" className="app-icon" />
        <div>
          <p>{data?.desc}</p>
          <div className="links-container">
            {data?.links?.map((link) => (
              <a href={link.url} target="_blank">
                <Icon name={"logo-" + link.icon} />
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <Carousel>
        {data?.images?.map((item, index) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={require("../assets/" + item.img).default}
              alt={"screenshot" + index.toString()}
            />
            <Carousel.Caption>
              <p>{item.label}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="horizontal-container evenly">
        {data?.other &&
          data.other.map((item) => (
            <div>
              <h3>{item.name}</h3>
              {typeof item.value == "string" ? (
                <p>{item.value}</p>
              ) : (
                <ul>
                  {item.value.map((val) => (
                    <li>{val}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
      </div>
    </section>
  );
}
