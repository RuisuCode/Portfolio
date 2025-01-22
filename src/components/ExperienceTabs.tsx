// import { AnimatePresence, motion } from "motion/react";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function ExperienceTabs() {
  const [tabs, setTabs] = useState(0);

  return (
    <>
      <div className="flex md:w-4/5 xs:w-full mx-auto h-680px p-1">
        <nav
          className="tabs flex-col items-start h-auto  md:min-w-40  max-w-40 space-y-1 justify-between  border-2  border-gray-500/60 border-r-0 border-t-0 border-b-0 "
          aria-label="Tabs"
          role="tablist"
          data-tabs-vertical="true"
          aria-orientation="horizontal"
        >
          <button
            type="button"
            className={`btn btn-text min-h-20 md:text-lg xs:text-md   rounded-none active-tab:relative active-tab:right-0.5 active-tab:bg-transparent active-tab:border-white border-2 border-t-0 border-r-0 border-b-0 active-tab:text-primary hover:text-primary hover:bg-primary/20  ${tabs === 0 ? "active" : ""} w-full`}
            id="tabs-pill-vertical-item-1"
            data-tab="#tabs-pill-vertical-1"
            aria-controls="tabs-pill-vertical-1"
            role="tab"
            aria-selected="true"
            onClick={() => setTabs(0)}
          >
            Courses
          </button>
          <button
            type="button"
            className={`btn btn-text  min-h-20 md:text-lg xs:text-md    rounded-none active-tab:relative active-tab:right-0.5 active-tab:bg-transparent active-tab:border-white border-2 border-t-0 border-r-0 border-b-0 active-tab:text-primary hover:text-primary hover:bg-primary/20  ${tabs === 1 ? "active" : ""}   w-full`}
            id="tabs-pill-vertical-item-2"
            data-tab="#tabs-pill-vertical-2"
            aria-controls="tabs-pill-vertical-2"
            role="tab"
            onClick={() => setTabs(1)}
            aria-selected="false"
          >
            Degree titles
          </button>
          <button
            type="button"
            className={`btn btn-text  min-h-20 md:text-lg xs:text-md    rounded-none active-tab:relative active-tab:right-0.5 active-tab:bg-transparent active-tab:border-white border-2 border-t-0 border-r-0 border-b-0 active-tab:text-primary hover:text-primary hover:bg-primary/20   ${tabs === 2 ? "active" : ""}  w-full`}
            id="tabs-pill-vertical-item-3"
            data-tab="#tabs-pill-vertical-3"
            aria-controls="tabs-pill-vertical-3"
            role="tab"
            aria-selected="false"
            onClick={() => setTabs(2)}
          >
            Projects
          </button>
          <button
            type="button"
            className={`btn btn-text  min-h-20 md:text-lg xs:text-md    rounded-none active-tab:relative active-tab:right-0.5 active-tab:bg-transparent active-tab:border-white border-2 border-t-0 border-r-0 border-b-0 active-tab:text-primary hover:text-primary hover:bg-primary/20   ${tabs === 3 ? "active" : ""}  w-full`}
            id="tabs-pill-vertical-item-4"
            data-tab="#tabs-pill-vertical-4"
            aria-controls="tabs-pill-vertical-4"
            role="tab"
            aria-selected="false"
            onClick={() => setTabs(3)}
          >
            Works
          </button>
        </nav>

        <div className="ms-3 p-2 h-600px ">
          <div
            id="tabs-pill-vertical-1"
            role="tabpanel"
            aria-labelledby="tabs-pill-vertical-item-1"
            className={`${tabs === 0 ? "flex" : "hidden"} w-full`}
          >
            <div className="accordion divide-neutral/20 divide-y w-full">
              <div className="accordion-item active" id="payment-icon">
                <button
                  className="accordion-toggle inline-flex items-center justify-between text-start"
                  aria-controls="payment-icon-collapse"
                  aria-expanded="true"
                >
                  <span className="flex flex-col">
                    <span className="inline-flex items-center gap-x-4 text-primary">
                      <Icon
                        icon="mdi:language"
                        width="24"
                        height="24"
                        className="relative top-3"
                      />
                      Course English A1-A2
                    </span>
                    <span className="dark:text-primary/50 text-primary/70 text-sm relative left-11">
                      Nov 2021 - Jan 2022
                    </span>
                  </span>
                  <span className="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180"></span>
                </button>
                <div
                  id="payment-icon-collapse"
                  className="accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="payment-icon"
                  role="region"
                >
                  <div className="px-5 pb-4">
                    <p className="dark:text-base-content/80 font-normal text-primary/80   ">
                      Certificate shows that I have started studying the English
                      language and I am able to introduce myself in a general
                      way and use basic expressions,as well as in my short
                      written sentences on simple topics. I can also interact
                      with a slow-speaking speaker or one who writes in a simple
                      way.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item" id="delivery-icon">
                <button
                  className="accordion-toggle inline-flex items-center justify-between text-start"
                  aria-controls="delivery-icon-collapse"
                  aria-expanded="false"
                >
                  <span className="flex flex-col">
                    <span className="inline-flex items-center gap-x-4 text-primary">
                      <Icon
                        icon="mdi:language"
                        width="24"
                        height="24"
                        className="relative top-3"
                      />
                      Course English B1
                    </span>
                    <span className="dark:text-primary/50 text-primary/70 text-sm relative left-11">
                      Feb 2022 - Jun 2022
                    </span>
                  </span>
                  <span className="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180"></span>
                </button>
                <div
                  id="delivery-icon-collapse"
                  className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="delivery-icon"
                  role="region"
                >
                  <div className="px-5 pb-4">
                    <p className="dark:text-base-content/80 font-normal text-primary/80   ">
                      Certificate showing that I am used to interacting with
                      complex texts and situations; I am even able to
                      participate in technical discussions about my area of
                      expertise. My interaction with native speakers is fluid,
                      and I can maintain long conversations on various topics. I
                      organize my ideas better and can present them in a
                      coherent manner.
                    </p>
                  </div>
                </div>
              </div>
              {/*  <div className="accordion-item" id="cancel-icon">
                <button
                  className="accordion-toggle inline-flex items-center justify-between text-start"
                  aria-controls="cancel-icon-collapse"
                  aria-expanded="false"
                >
                  <span className="inline-flex items-center gap-x-4">
                    <span className="icon-[tabler--ban] text-base-content size-6"></span>
                    Can I cancel my order?
                  </span>
                  <span className="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180"></span>
                </button>
                <div
                  id="cancel-icon-collapse"
                  className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="cancel-icon"
                  role="region"
                >
                  <div className="px-5 pb-4">
                    <p className="dark:text-base-content/80 font-normal text-primary/80   ">
                      Scheduled delivery orders can be cancelled 72 hours prior
                      to your selected delivery date for full refund.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div
            id="tabs-pill-vertical-2"
            role="tabpanel"
            aria-labelledby="tabs-pill-vertical-item-2"
            className={`${tabs === 1 ? "flex" : "hidden"} w-full`}
          >
            <div className="accordion divide-neutral/20 divide-y w-full">
              <div className="accordion-item active" id="payment-icon">
                <button
                  className="accordion-toggle inline-flex items-center justify-between text-start"
                  aria-controls="payment-icon-collapse"
                  aria-expanded="true"
                >
                  <span className="flex flex-col">
                    <span className="inline-flex items-center gap-x-4 text-primary">
                      <Icon
                        icon="mdi:certificate-outline"
                        width="28"
                        height="28"
                        className="relative top-3"
                      />
                      Bachelor of Science degree
                    </span>
                    <span className="dark:text-primary/50 text-primary/70 text-sm relative left-11">
                      Oct 2013 - Apr 2018
                    </span>
                  </span>
                  <span className="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180"></span>
                </button>
                <div
                  id="payment-icon-collapse"
                  className="accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="payment-icon"
                  role="region"
                >
                  <div className="px-5 pb-4">
                    <p className="dark:text-base-content/80 font-normal text-primary/80   ">
                      Title obtained at the U.E.C.A Dr. Braulio Perez Marcio,
                      located in Monagas-Maturin, Venezuela. Title indicating
                      the completion of my undergraduate studies in a scientific
                      discipline. Also known as Bachelor of Science.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item" id="delivery-icon">
                <button
                  className="accordion-toggle inline-flex items-center justify-between text-start"
                  aria-controls="delivery-icon-collapse"
                  aria-expanded="false"
                >
                  <span className="flex flex-col">
                    <span className="inline-flex items-center gap-x-4 text-primary">
                      <Icon
                        icon="mdi:certificate-outline"
                        width="28"
                        height="28"
                        className="relative top-3"
                      />
                      Bachelor of Computer Science
                    </span>
                    <span className="dark:text-primary/50 text-primary/70 text-sm relative left-11">
                      Apr 2022 - Present
                    </span>
                  </span>
                  <span className="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180"></span>
                </button>
                <div
                  id="delivery-icon-collapse"
                  className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="delivery-icon"
                  role="region"
                >
                  <div className="px-5 pb-4">
                    <p className="dark:text-base-content/80 font-normal text-primary/80   ">
                      Title obtained at Universidad Bolivariana de Venezuela,
                      located in Monagas-Maturin, Venezuela. Title indicating
                      mastery of basic programming languages such as PHP or
                      JavaScript, having the ability to design, develop, manage
                      and maintain information systems.
                    </p>
                  </div>
                </div>
              </div>
              {/*  <div className="accordion-item" id="cancel-icon">
                <button
                  className="accordion-toggle inline-flex items-center justify-between text-start"
                  aria-controls="cancel-icon-collapse"
                  aria-expanded="false"
                >
                  <span className="inline-flex items-center gap-x-4">
                    <span className="icon-[tabler--ban] text-base-content size-6"></span>
                    Can I cancel my order?
                  </span>
                  <span className="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180"></span>
                </button>
                <div
                  id="cancel-icon-collapse"
                  className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="cancel-icon"
                  role="region"
                >
                  <div className="px-5 pb-4">
                    <p className="dark:text-base-content/80 font-normal text-primary/80   ">
                      Scheduled delivery orders can be cancelled 72 hours prior
                      to your selected delivery date for full refund.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div
            id="tabs-pill-vertical-3"
            className={`${tabs === 2 ? "flex" : "hidden"}`}
            role="tabpanel"
            aria-labelledby="tabs-pill-vertical-item-3"
          >
            <div className="accordion divide-neutral/20 divide-y w-full">
              <div className="accordion-item active" id="payment-icon">
                <button
                  className="accordion-toggle inline-flex items-center justify-between text-start"
                  aria-controls="payment-icon-collapse"
                  aria-expanded="true"
                >
                  <span className="flex flex-col">
                    <span className="inline-flex items-center gap-x-4 text-primary">
                      <Icon
                        icon="mdi:event"
                        width="28"
                        height="28"
                        className="relative top-3"
                      />
                      Events
                    </span>
                    <span className="dark:text-primary/50 text-primary/70 text-sm relative left-11">
                      Ago 2023 - Jan 2024
                    </span>
                  </span>
                  <span className="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180"></span>
                </button>
                <div
                  id="payment-icon-collapse"
                  className="accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="payment-icon"
                  role="region"
                >
                  <div className="px-5 pb-4">
                    <p className="dark:text-base-content/80 font-normal text-primary/80   ">
                      Events is a system aimed at organizing institutions by
                      organization where you can have better accessibility when
                      carrying out some type of activity that requires several
                      organizations. <br /> With this system you can send
                      notifications via email and take into account who has
                      attended the activity with just one click. Administrative
                      system for institutional events. <br /> In this project I
                      work on the frontend in react with the collaboration of
                      another developer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item" id="delivery-icon">
                <button
                  className="accordion-toggle inline-flex items-center justify-between text-start"
                  aria-controls="delivery-icon-collapse"
                  aria-expanded="false"
                >
                  <span className="flex flex-col">
                    <span className="inline-flex items-center gap-x-4 text-primary">
                      <Icon
                        icon="healthicons:running-24px"
                        width="28"
                        height="28"
                        className="relative top-3"
                      />
                      Project Delta Athletics
                    </span>
                    <span className="dark:text-primary/50 text-primary/70 text-sm relative left-11">
                      Nov 2023 - 0ct 2024
                    </span>
                  </span>
                  <span className="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180"></span>
                </button>
                <div
                  id="delivery-icon-collapse"
                  className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="delivery-icon"
                  role="region"
                >
                  <div className="px-5 pb-4">
                    <p className="dark:text-base-content/80 font-normal text-primary/80   ">
                      Project Delta is an administrative system that manages the
                      athletes of an institution where they can record, view and
                      monitor the performance of the athlete with all the
                      records they have made and activities they have been in,
                      giving better management of athlete data. Athletes will
                      also have a session where they can see their own
                      performance and see upcoming events they can attend.
                      <br />
                      <br />
                      In this project I worked both front end and back end, also
                      being devops, developing its structure, documentation and
                      design from scratch.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item" id="adonis-icon">
                <button
                  className="accordion-toggle inline-flex items-center justify-between text-start"
                  aria-controls="adonis-icon-collapse"
                  aria-expanded="false"
                >
                  <span className="flex flex-col">
                    <span className="inline-flex items-center gap-x-4 text-primary">
                      <Icon
                        icon="mdi:family"
                        width="28"
                        height="28"
                        className="relative top-3"
                      />
                      Sastem
                    </span>
                    <span className="dark:text-primary/50 text-primary/70 text-sm relative left-11">
                      Jul 2024 - Jan 2025
                    </span>
                  </span>
                  <span className="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180"></span>
                </button>
                <div
                  id="adonis-icon-collapse"
                  className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="adonis-icon"
                  role="region"
                >
                  <div className="px-5 pb-4">
                    <p className="dark:text-base-content/80 font-normal text-primary/80   ">
                      Sastem is an administrative system to manage the families
                      of each employee of an institution, where depending on
                      their conditions they may opt for a medical benefit,
                      giving them a card to be able to buy different medicines
                      and other drugs through a prescription.
                      <br />
                      <br />
                      In this project I worked only on the front end, developing
                      its structure and design together with a designer.
                    </p>
                  </div>
                </div>
              </div>
              {/*  <div className="accordion-item" id="cancel-icon">
                <button
                  className="accordion-toggle inline-flex items-center justify-between text-start"
                  aria-controls="cancel-icon-collapse"
                  aria-expanded="false"
                >
                  <span className="inline-flex items-center gap-x-4">
                    <span className="icon-[tabler--ban] text-base-content size-6"></span>
                    Can I cancel my order?
                  </span>
                  <span className="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180"></span>
                </button>
                <div
                  id="cancel-icon-collapse"
                  className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="cancel-icon"
                  role="region"
                >
                  <div className="px-5 pb-4">
                    <p className="dark:text-base-content/80 font-normal text-primary/80   ">
                      Scheduled delivery orders can be cancelled 72 hours prior
                      to your selected delivery date for full refund.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div
            id="tabs-pill-vertical-4"
            className={`${tabs === 3 ? "flex" : "hidden"}`}
            role="tabpanel"
            aria-labelledby="tabs-pill-vertical-item-4"
          >
            <div className="accordion divide-neutral/20 divide-y w-full">
              <div className="accordion-item active" id="science-icon">
                <button
                  className="accordion-toggle inline-flex items-center justify-between text-start"
                  aria-controls="science-icon-collapse"
                  aria-expanded="true"
                >
                  <span className="flex flex-col">
                    <span className="inline-flex items-center gap-x-4 text-primary">
                      <Icon
                        icon="mdi:work"
                        width="28"
                        height="28"
                        className="relative top-3"
                      />
                      Science and Technology Department
                    </span>
                    <span className="dark:text-primary/50 text-primary/70 text-sm relative left-11">
                      Ago 2023 - 0ct 2024
                    </span>
                  </span>
                  <span className="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180"></span>
                </button>
                <div
                  id="science-icon-collapse"
                  className="accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="science-icon"
                  role="region"
                >
                  <div className="px-5 pb-4">
                    <p className="dark:text-base-content/80 font-normal text-primary/60   ">
                      <span
                        className="text-primary/80 cursor-pointer hover:text-primary"
                        onClick={() =>
                          window.open(
                            "https://www.instagram.com/dctimonagas/",
                            "_blank",
                          )
                        }
                      >
                        Science and Technology Department
                      </span>{" "}
                      is and executive branch agency in charge of implementing
                      policies related to science, technology and productive
                      innovation.
                      <br />
                      <br />
                      Creating administrative web pages with the latest existing
                      technologies. Here I worked as a Front-End in React,
                      collaborating with other backend and devops developers,
                      thus working on complete projects, from 3 to 5 developers.
                      <br />
                      <br />I shared knowledge and they helped me grow as a
                      developer in the front-end area by giving me technical
                      tests in web development.
                    </p>
                  </div>
                </div>
              </div>

              {/*  <div className="accordion-item" id="cancel-icon">
                <button
                  className="accordion-toggle inline-flex items-center justify-between text-start"
                  aria-controls="cancel-icon-collapse"
                  aria-expanded="false"
                >
                  <span className="inline-flex items-center gap-x-4">
                    <span className="icon-[tabler--ban] text-base-content size-6"></span>
                    Can I cancel my order?
                  </span>
                  <span className="icon-[tabler--chevron-left] accordion-item-active:-rotate-90 text-base- size-4.5 shrink-0 transition-transform duration-300 rtl:-rotate-180"></span>
                </button>
                <div
                  id="cancel-icon-collapse"
                  className="accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="cancel-icon"
                  role="region"
                >
                  <div className="px-5 pb-4">
                    <p className="dark:text-base-content/80 font-normal text-primary/80   ">
                      Scheduled delivery orders can be cancelled 72 hours prior
                      to your selected delivery date for full refund.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
