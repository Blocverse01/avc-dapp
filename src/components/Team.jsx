import { Link } from "react-router-dom";
import teamMembers from "../data/team";

export default function Team() {
  return (
    <section className="grid xl:grid-cols-4 grid-cols-1 md:grid-cols-2  gap-6 px-20">
      {teamMembers.map((member, index) => (
        <Link
          to={`/team/${member.name.split(" ").join("-").toLowerCase()}`}
          key={index}
          className="cursor-pointer"
        >
          <div className="w-fit duration-200 lg:hover:scale-105 p-6 glass-bg rounded-[14px] mx-auto">
            <img
              src={member.picture}
              className="w-[240.22px] h-[230px] md:h-[240.22px] object-cover"
              alt={member.name}
            />
            <h3 className="text-[16px]  font-[500] text-white leading-[20.83px] md:text-[20px] md:leading-[31.25px] mt-[7px] md:mt-[23px] ">
              {member.name}
            </h3>
            <h3 className="text-[12px] font-[400] max-w-[180px] text-white leading-[15.62px] md:text-[14px] md:leading-[20.83px]">
              {member.role}
            </h3>
          </div>
        </Link>
      ))}
    </section>
  );
}
