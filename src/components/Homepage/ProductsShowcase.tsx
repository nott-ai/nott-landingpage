import styles from "@/styles/Homepage/products-showcase.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const ProductsShowcase = () => {
  const products = [
    {
      name: "Smart Mattress",
      images: [
        "/images/products/smart-mattress.png",
        "/images/products/smart-mattress.png",
        "/images/products/smart-mattress.png",
      ],
    },
    {
      name: "Smart Band",
      images: [
        "/images/products/smart-band.png",
        "/images/products/smart-band.png",
        "/images/products/smart-band.png",
      ],
    },
    {
      name: "Smart Watch",
      images: [
        "/images/products/smart-watch.png",
        "/images/products/smart-watch.png",
        "/images/products/smart-watch.png",
      ],
    },
    {
      name: "Smart Scale",
      images: ["/images/products/smart-scale.png"],
    },
    {
      name: "Smart Pillow",
      images: ["/images/products/smart-pillow.png"],
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    appendDots: (dots: any) => (
      <div className={styles.dots}>
        <ul
          style={{
            margin: "0px",
            marginBlockStart: 0,
            marginBlockEnd: 0,
            paddingInlineStart: 0,
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => <div />,
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>
            <span className={styles.highlight}>Products</span> Showcase
          </div>
          <div className={styles.description}>
            {`Discover the innovation of NOTT's smart devices and app, <br />
            designed to kickstart your journey towards better health`}
          </div>
        </div>
        <div className={styles.products}>
          {products.map((product) => (
            <div key={product.name} className={styles.product}>
              <div id="products-showcase" className={styles.imageSlider}>
                <Slider {...settings}>
                  {product.images.map((image, index) => (
                    <img
                      key={product.name + index}
                      src={image}
                      alt={product.name}
                    />
                  ))}
                </Slider>
              </div>
              <div className={styles.info}>
                <div className={styles.comingSoon}>Coming soon</div>
                <div className={styles.name}>{product.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsShowcase;
