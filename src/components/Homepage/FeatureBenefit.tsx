import { BENEFITS } from "@/constants/metas";
import { orbitron } from "@/pages/_app";
import style from "@/styles/Homepage/feature-benefit.module.scss";
import { createMarkup } from "@/utils/index";
import { ReactElement, useEffect, useState } from "react";
import useDeviceDetect from "../common/DeviceDetect";

interface IFeatureBenefit {
  title: string;
  description: string;
  icon: ReactElement;
  backgroundColor?: string;
  titleColor?: string;
}

const FeatureBenefit = () => {
  const { isMobile, isDesktop } = useDeviceDetect();
  const [visibleItems, setVisibleItems] = useState(1);
  const [descriptionShowing, setDescriptionShowing] = useState<IDescription>(
    BENEFITS[0]
  );
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
      backgroundColor: isMobile ? "transparent" : "#14253F",
      titleColor: "#83B4FF",
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

  const handleSeeMore = (length: number) => {
    setVisibleItems(length); // Show all items
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  const onScroll = () => {
    if (window !== undefined) {
      console.log(window.scrollY);
      BENEFITS.forEach((_, index) => {
        const des = document.getElementById(`description-${index}`);
        const image = document.getElementById(`image-${index}`);
        const startIndex = 4500 + index * 2000;
        const nextIndex = 4500 + (index + 1) * 2000;
        if (des) {
          if (window.scrollY >= startIndex && window.scrollY < nextIndex) {
            des.style.opacity = `${(window.scrollY - startIndex) / 1000}`;
            des.style.transform = `matrix(1, 0, 0, 1, 0, ${
              300 - (window.scrollY - startIndex) / 10
            })`;
          } else {
            des.style.opacity = "0";
          }
        }
        if (image) {
          if (window.scrollY > startIndex && window.scrollY < nextIndex) {
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
              <div
                key={index}
                className={style.featureBenefit}
                style={{ backgroundColor: data.backgroundColor }}
              >
                <div className={style.iconContainer}>{data.icon}</div>
                <p className={style.title} style={{ color: data.titleColor }}>
                  {data.title}
                </p>
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
                      className={style.imageWrapper}
                      id={`image-${index}`}
                      style={{ opacity: 0 }}
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
                        transform: "matrix(1, 0, 0, 1, 0, 300)",
                        opacity: 0,
                      }}
                      className={style.descriptionContainer}
                      key={index}
                    >
                      <p className={style.type}>{description.type}</p>
                      <p className={style.title}>{description.title}</p>

                      <ul className={style.description}>
                        {description.items
                          // .slice(0, visibleItems)
                          .map((item, index) => (
                            <li key={index}>
                              <p dangerouslySetInnerHTML={createMarkup(item)} />
                            </li>
                          ))}{" "}
                      </ul>
                    </div>
                  ))}

                  {/* {!isDesktop && descriptionShowing.items.length > visibleItems && (
              <label
                htmlFor="toggle"
                className={style.toggleLabel}
                onClick={() => handleSeeMore(descriptionShowing.items.length)}
              >
                {"See More >"}
              </label>
            )} */}
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
