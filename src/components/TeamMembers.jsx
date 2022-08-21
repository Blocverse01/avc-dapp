import { Link, useParams } from "react-router-dom";
import teamMembers from "../data/team";

export default function TeamMember() {
  let { name } = useParams();
  const validMember = teamMembers.find(
    (item) =>
      item.name.split(" ").join("-").toLowerCase() === name.toLowerCase()
  );
  return (
    <section className="z-10 h-fit  relative mt-20 md:mt-28 px-8 md:px-20 lg:px-32">
      <h2 className="font-hero text-[69.74px] text-white ">
        {validMember.name}
      </h2>
      <h2 className=" text-[24px] text-white ">{validMember.role}</h2>
      <div className="xl:flex items-center mt-10 justify-between">
        <div className="p-8 w-fit mx-auto rounded-[14px] join-the-team-btn-bg">
          <img
            src={validMember.picture}
            className="w-full h-auto md:w-[434px] md:h-[591px] object-cover"
            alt={validMember.name}
          />
        </div>

        <div className=" w-auto xl:w-[661px] md:text-[20px] leading-[24x] md:leading-[27px] mx-auto xl:mb-20 mb-20 xl:mt-0 mt-10 xl:text-[18px] font-[400]   text-white">
          {validMember.description}
        </div>
      </div>
    </section>
  );
}
