import { useEffect, useState } from "react";
import { ModeLight } from "../constants/ModeColor";

export default function TabsStyle() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  function ScrollVerify(id: number) {
    const [content, setContent] = useState("");

    useEffect(() => {
      if (id >= 0 && id < 784) {
        setContent("#0");
      } else if (id > 783 && id < 1288) {
        setContent("#784");
      } else if (id > 1287 && id < 3531) {
        setContent("#1288");
      } else if (id > 3530) {
        setContent("#3531");
      }
    }, [id]);

    return content;
  }

  interface catg {
    id: string;
    data_tab: string;
    name: string;
    path: string;
    content: string;
  }
  const categories: catg[] = [
    {
      id: "tabs-pill-item-1",
      data_tab: "#tabs-pill-1",
      name: "About",
      path: "#0",
      content: "#Contenido 1",
    },
    {
      id: "tabs-pill-item-2",
      data_tab: "#tabs-pill-2",
      name: "Experience",
      path: "#784",
      content: "#Contenido 2",
    },
    {
      id: "tabs-pill-item-3",
      data_tab: "#tabs-pill-3",
      path: "#1288",
      name: "Projects",
      content: "#Contenido 3",
    },
    {
      id: "tabs-pill-item-4",
      data_tab: "#tabs-pill-4",
      path: "#3531",
      name: "Contact",
      content: "#Contenido 4",
    },
  ];

  // hacer verificacion por temas

  return (
    <div className="flex h-20 w-auto  justify-center  py-5">
      <nav
        className="tabs space-x-1 rtl:space-x-reverse overflow-x-auto dark:bg-neutral/95 bg-primary/50 rounded-2xl md:h-12 xs:h-10 items-center px-1"
        role="tablist"
        aria-orientation="horizontal"
      >
        {categories.map((item: catg, index: number) => (
          <a key={index} className={`text-black`} href={item.content}>
            <button
              type="button"
              className={`md:btn md:btn-text xs:rounded-full xs:btn-xs xs:font-semibold ${ScrollVerify(scrollY) === item.path ? `dark:bg-base-300 dark:text-white dark:btn-secondary active dark:hover:bg-base-300   ${ModeLight.TabsLightFocus}` : ` ${ModeLight.TabsLight} dark:text-base-300 dark:hover:bg-base-300/20 `}`}
              role="tab"
            >
              {item.name}
            </button>
          </a>
        ))}
      </nav>
    </div>
  );
}
