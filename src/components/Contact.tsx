import  { useState } from "react";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { useForm, type SubmitHandler } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";
import CV from "../documents/Curriculum Vitae Ingles V2.1.2.pdf";

interface Isend {
  from: string;
  body: string;
}

export default function Contact() {
  const [expand, setExpand] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Isend>({ mode: "onSubmit" });

  const useSend = async (data: Isend) => {
    const Send = {
      from: "theboss7lol@gmail.com",
      body: data.body,
    };
    try {
      setLoading(true);
      await axios
        .post(
          "https://magicloops.dev/api/loop/10ca98a3-4757-4d67-89de-18c843fe693b/run",
          Send,
        )
        .then((response: any) => toast.success(response?.data));
    } catch (e: any) {
      toast.error(e);
    } finally {
      setLoading(false);
    }
  };
  const OnSubmit: SubmitHandler<Isend> = (data: Isend) => useSend(data);

  return (
    <div className="flex flex-col gap-8 xs:w-full items-center xs:h-full justify-center  ">
      <p className="font-semibold text-lg leading-7 w-1/2 text-center text-white filter drop-shadow-01xl ">
        I am always open to new opportunities that allow me to continue growing
        professionally and contributing my knowledge to new projects.
      </p>
      <div about="Write me" className="relative">
        <motion.div
          style={{
            transition: "all 0.2s ease-in-out",
            boxShadow: "0px 8px 10px rgba(251,251,251,0.4)",
            borderRadius: "15px",
          }}
          whileHover={{
            scale: `${expand ? 1 : 1.1}`,
            boxShadow: `${expand ? "0px 8px 10px rgba(251,251,251,0.4)" : "0px 8px 10px rgba(251,251,251,0.7)"}`,
          }}
        >
          <motion.div
            style={{
              width: "auto",
              height: "auto",
              borderRadius: "15px",
              padding: "12px",
              cursor: `${expand ? "initial" : "pointer"}`,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              overflow: "hidden",
            }}
            className="dark:bg-base-300 bg-purple-900/20 border-2 border-primary"
            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
            animate={
              expand
                ? { width: "400px", height: "300px" }
                : { width: "250px", height: "60px" }
            }
            onClick={() => setExpand(true)}
          >
            <motion.div
              className={`font-bold overflow-hidden  text-lg leading-7 text-center text-white filter drop-shadow-01xl`}
              animate={
                expand
                  ? {
                      display: "none",
                      opacity: 0,
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "0px",
                      width: "0%",
                      zIndex: -1,
                      color: "transparent",
                    }
                  : {
                      color: "#fff",
                      width: "100%",
                      display: "flex",
                      opacity: 1,
                      gap: "15px",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }
              }
              transition={{
                duration: 0.4,
                delay: 0,
                ease: "easeInOut",
              }}
            >
              Write me here!
              <Icon
                icon="mdi:email"
                width="26"
                height="26"
                color={expand ? "transparent" : "#ffff"}
              />
            </motion.div>
            <motion.div
              animate={
                expand
                  ? { opacity: 1, display: "flex", width: "100%", zIndex: 10 }
                  : { opacity: 0, display: "none", width: "0px", zIndex: -1 }
              }
              transition={{
                duration: 0.4,
                delay: 0,
                ease: ["easeIn", "backOut"],
              }}
            >
              <div className="flex flex-col w-full justify-center items-center gap-2">
                <p className={"text-primary text-3xl font-bold"}>Contact me</p>
                <form
                  onSubmit={handleSubmit(OnSubmit)}
                  className="flex flex-col gap-3 items-center md:w-4/6 xs:w-full"
                  action=""
                >
                  <div className="md:w-80 xs:w-full ">
                    <label
                      className="label label-text text-lg text-white/90"
                      htmlFor="textareaLabel"
                    >
                      Message
                    </label>
                    <textarea
                      className={`textarea dark:bg-base-100 bg-transparent text-primary  ${errors.body ? "is-invalid" : ""} h-25 `}
                      placeholder="Hello!"
                      id="textareaLabel"
                      {...register("body", {
                        required: {
                          value: true,
                          message: "Message is required",
                        },
                      })}
                    ></textarea>
                    {errors?.body && (
                      <span className="label">
                        <span className="label-text-alt">
                          {errors?.body?.message && errors.body.message}
                        </span>
                      </span>
                    )}
                  </div>
                  <button
                    type="submit"
                    className="btn  w-1/2 dark:btn-primary   btn-accent border border-primary hover:border hover:border-primary  "
                  >
                    <span className="dark:text-gray-900/80 text-primary">
                      Send
                    </span>
                    {loading ? (
                      <span className="loading loading-spinner dark:text-gray-900/80 text-primary"></span>
                    ) : (
                      <Icon
                        icon="mdi:send"
                        width="22"
                        height="22"
                        className="dark:text-gray-900/80 text-primary"
                      />
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          animate={
            expand
              ? { display: "flex", opacity: 1 }
              : { display: "none", opacity: 0 }
          }
          transition={{ duration: 0.4, delay: 0, ease: "backIn" }}
        >
          <Icon
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              cursor: "pointer",
            }}
            onClick={() => setExpand(false)}
            icon="mdi:close-circle"
            width="34"
            height="34"
            color="#fff"
          />
        </motion.div>
      </div>
      <h3 className="font-bold text-4xl text-white ">or</h3>
      <div>
        <a href={CV} download={"Curriculum Vitae.pdf"}>
          <button className="btn  dark:btn-gradient  dark:btn-secondary  btn-accent gap-4 rounded-lg h-13 border-2 border-primary hover:border-2 hover:border-primary hover:shadow-xs hover:shadow-primary font-bold w-56 text-lg">
            Download CV <Icon icon="mdi:file-download" width={26} height={26} />
          </button>
        </a>
      </div>
    </div>
  );
}
