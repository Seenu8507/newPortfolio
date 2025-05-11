import { EXPERIENCE } from "../contants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-50 text-center text-4xl">Experience</h1>
      <div>
        {EXPERIENCE.map((experience, index) => (
          <div
            key={index}
            className="mb-10 flex flex-col items-center justify-center gap-4 border-b border-neutral-800 pb-4"
          >
            <h1 className="text-2xl font-bold">{experience.title}</h1>
            <h2 className="text-xl text-cyan-400">{experience.company}</h2>
            <p className="text-lg text-neutral-400">{experience.year}</p>
            <p className="text-lg text-neutral-300">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;