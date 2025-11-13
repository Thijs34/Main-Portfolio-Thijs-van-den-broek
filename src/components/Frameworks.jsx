import { OrbitingCircles } from "./OrbitingCircles";

export function Frameworks() {
  const skills = [
    "React",
    "JavaScript",
    "nodejs",
    "Html5",
    "Kotlin",
    "Firebase",
    "Azure",
    "GitHub",
    "Gitlab",
    "Google",
    "Magento",
    "hyva",
    "xml",
    "Figma",
    "Adobe-Illustrator",
    "Adobe-Indesign",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      {/* HIDE THE BIG RING BELOW 512PX, DO NOT BREAK POSITIONING */}
      <div className="contents [@media_(max-width:512px)]:hidden">
        <OrbitingCircles iconSize={40}>
          {skills.map((skill, index) => (
            <Icon key={index} src={`/assets/logos/${skill}.svg`} />
          ))}
        </OrbitingCircles>
      </div>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.slice().reverse().map((skill, index) => (
          <Icon key={index} src={`/assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);