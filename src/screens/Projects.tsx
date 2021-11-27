import { useEffect, useState } from "react";
import Card from "../components/Card";
import projects_ from "../projects";
import { projects as pType } from "../types";

export default function ProjectsScreen() {
  const [projects, setProjects] = useState<pType>({});
  useEffect(() => {
    let ps = {};
    Object.keys(projects_).forEach((project) => {
      const id = projects_[project].type;
      const data = {...projects_[project], id: project}
      if (ps[id]) ps[id] = [...ps[id], data];
      else ps[id] = [data];
    });
    setProjects(ps);
    console.log(ps);
  }, []);
  return (
    <div className="screen">
      {Object.keys(projects)?.map((t) => (
        <>
          <h2>{t}</h2>
          <div className="grid">
            {projects[t].map((p, i) => (
              <Card
                    key={p.id}
                    name={p.name}
                    logo={p.logo}
                    platforms={p.platforms}
                    id={p.id}
                    index={i}
              />
            ))}
          </div>
        </>
      ))}
    </div>
  );
}
