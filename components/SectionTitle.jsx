export default function SectionTitle({ section, title, description }) {
  return (
    <>
      <div className="section-title">
        <h5>{section}</h5>
        <h3>{title} </h3>
        <p className="pera">{description}</p>
      </div>
    </>
  );
}
