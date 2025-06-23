import { FaGithub, FaGlobe } from "react-icons/fa"

export type ProjectType = {
  title: string
  photoSrc: string
  photoAlt: string
  desc: string
  gitLink: string
  liveLink?: string

}
export default function Project({ title, photoSrc, photoAlt, desc, gitLink, liveLink }: ProjectType) {

  return (
    <div className="projectsCard">
      <h3 className="projectCardTitle">{title}</h3>
      <img className="projectsCardImg" src={photoSrc} alt={photoAlt} />

      <p className="projectCardText">{desc}
      </p>
      <p className="projectLinks"><a target="_blank" href={gitLink}><FaGithub /></a>
        {liveLink &&
          <a target="_blank" href={liveLink}><FaGlobe /></a>
        }
      </p>

    </div>
  )
}

