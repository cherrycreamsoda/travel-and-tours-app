import team from '../../../data/team';
import './Team.css';

function Team() {
  return (
    <section className="teamSection">
      <h2>Meet our Team</h2>
      <div className="teamGrid">
        {team.map((member) => (
          <article className="teamCard" key={member.name}>
            <h3>{member.position}</h3>
            <div className="teamImage">{member.image}</div>
            <p>{member.description}</p>
            <span>{member.name}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Team;
