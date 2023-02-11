import { Link, useParams } from "react-router-dom";
import teamMembers from "../data/team";

export default function TeamMember() {
  let { name } = useParams();
  const validMember = teamMembers.find(
    (item) =>
      item.name.split(" ").join("-").toLowerCase() === name.toLowerCase()
  );
  return (
    <section className="Team-member">
      <h2 className="team-member-name">{validMember.name}</h2>
      <h2 className=" text-[24px] text-white">{validMember.role}</h2>
      <div className="lg:grid grid-cols-2 mt-10 place-items-center gap-6">
        <div className="p-8 backdrop-blur-md w-fit mx-auto rounded-[14px] glass-bg">
          <img
            src={validMember.picture}
            className="w-full h-auto md:w-[434px] md:h-[591px] object-cover"
            alt={validMember.name}
          />
        </div>

        <div className="w-auto xl:w-[661px] md:text-[20px] backdrop-blur-md leading-[24x] md:leading-[27px] mx-auto xl:mb-20 mb-20 xl:mt-0 mt-10 xl:text-[18px] font-[400]   text-white">
          {validMember.description}
        </div>
      </div>
    </section>
  );
}
