import { BENEFITS } from "@/constants/metas";
import style from "@/styles/AboutUs/feature-benefit.module.scss";
import { createMarkup } from "@/utils/index";
import { useEffect } from "react";
import useDeviceDetect from "../common/DeviceDetect";

const DESCRIPTION_BLOCK_HEIGHT_DESKTOP = 550;
const DESCRIPTION_BLOCK_HEIGHT_TABLET = 330;
const START_BLOCK_INDEX = 1500;
const START_BLOCK_TABLET = 3000;
const START_BLOCK_MOBILE = 2500;

const MAX_SCALE_RATIOS = [0.1, 0.05, 0.02];

const FeatureBenefit = () => {
  const { isTablet, isDesktop } = useDeviceDetect();
  console.log(isTablet, isDesktop);
  const START_BLOCK = isDesktop
    ? START_BLOCK_INDEX
    : isTablet
    ? START_BLOCK_TABLET
    : START_BLOCK_MOBILE;
  console.log(START_BLOCK);

  const DESCRIPTION_BLOCK_HEIGHT = isDesktop
    ? DESCRIPTION_BLOCK_HEIGHT_DESKTOP
    : DESCRIPTION_BLOCK_HEIGHT_TABLET;

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isTablet, isDesktop]);

  const onScroll = () => {
    if (window !== undefined) {
      BENEFITS.forEach((_, index) => {
        const des = document.getElementById(`description-${index}`);
        const image = document.getElementById(`image-${index}`);
        const entrance = START_BLOCK + DESCRIPTION_BLOCK_HEIGHT;
        const startIndex = START_BLOCK + index * DESCRIPTION_BLOCK_HEIGHT;
        const nextIndex = START_BLOCK + (index + 1) * DESCRIPTION_BLOCK_HEIGHT;
        if (des && index < BENEFITS.length - 1) {
          if (window.scrollY >= entrance) {
            const scaleRatio =
              (((window.scrollY - entrance) / DESCRIPTION_BLOCK_HEIGHT) * 0.1) /
              (index + 1);

            if (!(scaleRatio > MAX_SCALE_RATIOS[index]))
              des.style.transform = `translate3d(0px, 0px, 0px) scale3d(${
                1 - scaleRatio
              }, ${
                1 - scaleRatio
              }, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`;
          }
        }
        if (image) {
          if (
            (index === 0 && window.scrollY < startIndex) ||
            (index === BENEFITS.length - 1 && window.scrollY >= startIndex) ||
            (window.scrollY > startIndex && window.scrollY < nextIndex)
          ) {
            image.style.opacity = "1";
          } else {
            image.style.opacity = "0";
          }
        }
      });
    }
  };
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.benefits}>
          <div className={style.benefit}>
            <div className={style.stickyEl}>
              <div className={style.blockBottom}>
                <div className={style.imageContainer}>
                  <div className={style.wrapper}>
                    <div className={style.frameWrapper}>
                      <img
                        src="/images/benefits/smart-watch.png"
                        alt="device-frame"
                        className={style.smartWatch}
                      />
                      <img
                        className={style.iphone}
                        src="/images/benefits/iphone.png"
                        alt="device-frame"
                      />
                    </div>
                    {BENEFITS.map((description, index) => (
                      <div
                        key={index}
                        className={style.imageWrapper}
                        id={`image-${index}`}
                      >
                        <img
                          key={index}
                          className={style.image}
                          src={description.image}
                          alt="feature-benefit"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className={style.rightBlock}>
                  {BENEFITS.map((description, index) => (
                    <div
                      id={`description-${index}`}
                      style={{
                        willChange: "transform",
                        transformStyle: "preserve-3d",
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      }}
                      className={`${style.descriptionContainer} ${
                        style[`stick-list_card_${index + 1}`]
                      }`}
                      key={index}
                    >
                      <p className={style.type}>{description.type}</p>
                      <p className={style.title}>{description.title}</p>

                      <ul className={style.description}>
                        {description.items.map((item, index) => (
                          <li key={index}>
                            <p dangerouslySetInnerHTML={createMarkup(item)} />
                          </li>
                        ))}{" "}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureBenefit;
