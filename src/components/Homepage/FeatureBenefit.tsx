import { BENEFITS } from "@/constants/metas";
import { orbitron } from "@/pages/_app";
import style from "@/styles/Homepage/feature-benefit.module.scss";
import { createMarkup } from "@/utils/index";
import { ReactElement, useEffect } from "react";
import useDeviceDetect from "../common/DeviceDetect";

interface IFeatureBenefit {
  title: string;
  description: string;
  icon: ReactElement;
}

const FeatureBenefit = () => {
  const { isMobile, isDesktop } = useDeviceDetect();
  const width = isMobile ? 44 : 80;
  const height = isMobile ? 44 : 80;
  const featureBenefitData: IFeatureBenefit[] = [
    {
      title: "Features",
      description: "HealthFi Protocol, AI Integration, and DePIN Technology",
      icon: (
        <img
          width={width}
          height={height}
          src="/images/feature.svg"
          alt="feature"
        />
      ),
    },
    {
      title: "User benefits",
      description: "Personalized health insights and token rewards",
      icon: (
        <img
          width={width}
          height={height}
          src="/images/user-benefit.svg"
          alt="user-benefit"
        />
      ),
    },
    {
      title: "Merchant benefits",
      description: "Market access and increased sales opportunities",
      icon: (
        <img
          width={width}
          height={height}
          src="/images/merchant-benefits.svg"
          alt="merchant-benefits"
        />
      ),
    },
  ];

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isDesktop]);

  const onScroll = () => {
    if (window !== undefined) {
      BENEFITS.forEach((_, index) => {
        const des = document.getElementById(`description-${index}`);
        const image = document.getElementById(`image-${index}`);
        const startIndex = 4000 + index * (isDesktop ? 1633 : 800);
        const nextIndex = 4000 + (index + 1) * (isDesktop ? 1633 : 800);
        if (des) {
          if (window.scrollY >= startIndex && window.scrollY < nextIndex) {
            const middle = (nextIndex - startIndex) / 2 + startIndex;
            des.style.opacity = `${
              window.scrollY < middle
                ? (window.scrollY - startIndex) / (isDesktop ? 1000 : 500) + 0.1
                : index < BENEFITS.length - 1
                ? 1 - (window.scrollY - middle) / (isDesktop ? 1000 : 500)
                : 1
            }`;
            des.style.transform = `matrix(1, 0, 0, 1, 0, ${
              (isDesktop ? 300 : 25) -
              (window.scrollY - startIndex) / (isDesktop ? 10 : 100)
            })`;
          } else if (
            (index === 0 && window.scrollY < startIndex) ||
            (index === BENEFITS.length - 1 && window.scrollY > startIndex) ||
            (window.scrollY >= startIndex && window.scrollY < nextIndex)
          ) {
            des.style.opacity = "1";
          } else des.style.opacity = "0";
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
        <div className={style.blockTop}>
          <div className={style.header}>
            <p className={`${style.title} ${orbitron.className}`}>
              Features & Benefits
            </p>
            <p className={style.description}>
              AI-Powered Wellness DePIN Platform Shaping the Future of HealthFi
            </p>
          </div>

          <div className={style.featureBenefitContainer}>
            {featureBenefitData.map((data, index) => (
              <div key={index} className={style.featureBenefit}>
                <div className={style.iconContainer}>{data.icon}</div>
                <p className={style.title}>{data.title}</p>
                <p className={style.description}>{data.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={style.benefits}>
          <div className={style.benefit}>
            <div className={style.stickyEl}>
              <div className={style.blockBottom}>
                <div className={style.imageContainer}>
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
                <div className={style.rightBlock}>
                  {BENEFITS.map((description, index) => (
                    <div
                      id={`description-${index}`}
                      style={{
                        transform: `matrix(1, 0, 0, 1, 0, ${
                          isDesktop ? 300 : 25
                        })`,
                        opacity: 0,
                      }}
                      className={style.descriptionContainer}
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
