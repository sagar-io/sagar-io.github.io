import { useRef } from "react";

function ProjectFactory(props) {
  const links = useRef();

  return (
    <div className="project">
      <img className="laptop-img" alt="" src="assets/images/laptop_bg.png" />
      <img className="project-img" alt="" src={props.src} />

      <div ref={links} className="project-links">
        <a href={props.gitHubUrl} rel="noreferrer" target="_blank">
          See GitHub Repo
        </a>
        <img className="arrow" alt="->" src="assets/images/arrow.svg" />

        <a href={props.liveSiteUrl} rel="noreferrer" target="_blank">
          See Live Site
        </a>
      </div>
    </div>
  );
}

export default ProjectFactory;
