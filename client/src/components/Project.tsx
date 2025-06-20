export type ProjectType = {
  title: string
  photoSrc: string
  photoAlt: string
  desc: string
}
export default function Project({ title, photoSrc, photoAlt, desc }: ProjectType) {

  return (
    <div className="projectsCard">
      <h3 className="projectCardTitle">{title}</h3>
      <img className="projectsCardImg" src={photoSrc} alt={photoAlt} />

      <p className="projectCardText">{desc}
      </p>
      <p>inta face github</p>

    </div>
  )
}

