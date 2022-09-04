import "./style.css";
const Section = ({ title, extraHeaderContent, body }) => (
    <section className="section">
        <h1 className="section__header section__header--taskList">
            {title}
            {extraHeaderContent}
        </h1>
        {body}
    </section>
);
export default Section;