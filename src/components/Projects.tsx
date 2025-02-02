import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import eventsImg from "../assets/projects/EventosLogin.png";
import deltaImg from "../assets/projects/DeltaLogin.png";
import sastemImg from "../assets/projects/SastemLogin.png";

interface Work {
  name: string;
  techs: string[];
  develop: "Front-End" | "Back-End";
  type: string;
  img: ImageMetadata;
  description: string;
  icons: {
    github: { icon: "jam:github"; link: string };
    host: { icon: "mdi:external-link"; link: string };
  };
}

export default function Projects() {
  const Projects: Work[] = [
    {
      name: "Events",
      techs: ["TypeScript", "React", "Joy UI"],
      develop: "Front-End",
      type: "Private",
      img: eventsImg,
      description:
        "Administrative system for institutional events ,System that allows you to plan, execute and evaluate your events efficiently and professionally",
      icons: {
        github: { icon: "jam:github", link: "" },
        host: {
          icon: "mdi:external-link",
          link: "",
        },
      },
    },
    {
      name: "Project Delta Athletics",
      type: "Public",
      techs: ["TypeScript", "React", "Material UI"],
      develop: "Front-End",
      img: deltaImg,
      description:
        "From performance tracking to training planning, Delta Athletics gives you a complete view of every athlete.",
      icons: {
        github: {
          icon: "jam:github",
          link: "https://github.com/RuisuCode/Proyecto-E.A",
        },
        host: {
          icon: "mdi:external-link",
          link: "https://proyecto-e-a.pages.dev/",
        },
      },
    },
    {
      name: "Project Delta Athletics",
      type: "Public",
      techs: ["TypeScript", "Adonis Js", "Node Js"],
      develop: "Back-End",
      img: deltaImg,
      description:
        "From performance tracking to training planning, Delta Athletics gives you a complete view of every athlete.",
      icons: {
        github: {
          icon: "jam:github",
          link: "https://github.com/RuisuCode/Proyecto-E.A",
        },
        host: {
          icon: "mdi:external-link",
          link: "https://proyecto-e-a.pages.dev/",
        },
      },
    },
    {
      name: "Sastem",
      type: "Private",
      techs: ["TypeScript", "React", "Material UI"],
      develop: "Front-End",
      img: sastemImg,
      description:
        "This system simplifies the management of your family responsibilities and optimizes the health benefits of each employee.",
      icons: {
        github: {
          icon: "jam:github",
          link: "",
        },
        host: {
          icon: "mdi:external-link",
          link: "http://207.180.218.108:9100/",
        },
      },
    },
  ];

  return (
    <div className="flex lg:w-full xl:w-5/6 xl:mx-auto flex-col gap-20  h-auto p-2 ">
      {Projects?.map((item: Work, index: number) => {
        const TypeProject = item?.type;
        return (
          <>
            <div
              key={index}
              className="flex xs:flex-col-reverse lg:flex-row  w-full relative"
            >
              <div className="flex md:w-11/12 justify-end xs:w-full">
                <motion.div
                  initial={{
                    boxShadow: "rgba(240, 234, 243, 0.24) 0px 6px 15px",
                  }}
                  whileHover={{
                    boxShadow: "rgba(240, 234, 243, 1) 0px 6px 15px",
                    filter: "invert(10%)",
                  }}
                  whileTap={{ scale: 0.8 }}
                  transition={{ duration: 0.2, ease: "linear" }}
                  style={{
                    width: "auto",
                    height: "auto",
                    borderRadius: "0.75em",
                  }}
                >
                  <div className="mockup-window border  rounded-none dark:bg-primary/20 bg-primary-content/40">
                    <div className="flex justify-center xs:h-auto md:h-80 ">
                      <img
                        className="xs:w-auto md:w-full xs:object-contain md:object-fill "
                        src={item.img.src}
                        alt="window background"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
              <div className="flex  xs:flex-col lg:w-2/4 xs:w-full">
                <div className="flex  w-full justify-between h-full md:py-8 xs:py-2 xs:gap-5 md:gap-0 flex-col">
                  <div className="flex flex-col items-end  justify-center gap-2 ">
                    <code className="text-primary/80 text-md font-semibold flex flex-row items-center gap-2 ">
                      <Icon
                        icon={`${item.type === "Private" ? "icon-park-solid:lock" : "icon-park-solid:unlock"}`}
                        width="14"
                        height="14"
                      />
                      {item?.type} Project
                    </code>
                    <p className="text-primary xl:text-3xl lg:text-2xl xs:text-3xl text-end font-semibold ">
                      {item?.name}
                    </p>
                    <div className="flex flex-row gap-2 xs:my-2 md:my-0 items-center">
                      <Icon
                        icon={"mdi:code"}
                        width="18"
                        height="18"
                        className="dark:text-primary/50 text-primary/90"
                      />
                      <code className="text-md dark:text-primary/50 text-primary/90">
                        {item.develop}
                      </code>
                    </div>
                  </div>
                  <div className="flex flex-col w-full gap-3 items-end  ">
                    <div className="flex gap-4">
                      {item?.techs.map((item, index: number) => {
                        return (
                          <code
                            className="text-sm dark:text-primary/50 text-primary/90"
                            key={index}
                          >
                            {item}
                          </code>
                        );
                      })}
                    </div>
                    <div className="flex gap-5">
                      {Object.values(item?.icons).map((item, index: number) => {
                        return (
                          <a
                            className={`hover:shadow-xl ${TypeProject === "Private" && item.icon === "jam:github" ? "hidden" : "initial"}  hover:shadow-gray-500 hover:scale-110 hover:duration-300`}
                            key={index}
                            href={item.link}
                            target="_blank"
                          >
                            <Icon
                              icon={item.icon}
                              width="24"
                              height="24"
                              className="dark:text-primary/50 text-primary/90"
                            />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="card xs:max-w-md lg:max-w-md rounded-none h-fit  dark:bg-base-300/70 bg-secondary/90 shadow-lg shadow-gray-500/50 absolute xs:right-0 xs:-bottom-15 lg:right-3 lg:top-36 border-0 ">
                  <div className="card-body p-3">
                    <p className="dark:text-primary text-primary-content font-semibold  leading-7 text-right line-clamp-3 ">
                      {item?.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={` ${Number(Object?.keys(item.name).at(-1)) === index ? "hidden" : ""} divider  after:border-t-3 before:border-t-3 after:border-primary/50 before:border-primary/50 `}
            ></div>
          </>
        );
      })}
    </div>
  );
}
