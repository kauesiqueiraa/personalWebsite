import "../Experience.css";
import { oneWork } from "../../../types/works";
import { useNavigate } from "react-router-dom";

export default function Work(props: oneWork) {
  const { company, job, data, subtitle, description, skills } = props
  const navigate = useNavigate();

  return (
    <div className="text-experience intervalCardReveal" onClick={() => navigate(`/work/${company}`)} >
      <div>
        <h4 className="titleExperience">
          {job}
        </h4>
        <p className="dateExperience">{data}</p>
      </div>
      <h5 className="companyExperience">{subtitle}</h5>
      <p className="changeExperience">
        {description}
      </p>
      <p className="changeExperience">{skills}</p>
    </div >
  )
}