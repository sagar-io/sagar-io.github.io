import { useRef } from "react";

function ProjectFactory(props) {
  const links = useRef();

  return (
    <div className="project">
      <img className="laptop-img" src="assets/images/laptop_bg.png" />
      <img className="project-img" src={props.src} />

      <div ref={links} className="project-links">
        <a href={props.gitHubUrl} target="_blank">
          See GitHub Repo
        </a>
        <img className="arrow" src="assets/images/arrow.svg" />

        <a href={props.liveSiteUrl} target="_blank">
          See Live Site
        </a>
      </div>
    </div>
  );
}

export default ProjectFactory;
