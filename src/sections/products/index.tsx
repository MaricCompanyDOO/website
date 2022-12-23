import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { theme } from "../../style/theme";
import { ProductImage, ProductItem, ProductItemsWrapper, ProductItemWrapper, ProductsContainer, ProductsGrid, ProductsGridrapper, ProductsGridrapperMobile, ProductsHeaddingWrapper } from "./products.style";
import SectionHeading from "../../components/section-heading";
import { RowContainer, SectionSubheading } from "../../style/global-style";
import { extractLoadedImage } from "../../utils/helper";

const productListLeft = [
  "Grede",
  "Daske",
  "Letve",
];

const productListMiddle = [
  "Lamperije",
  "Brodski pod",
  "Štafle",
];

const productListRight = [
  "Prizmirane daske svih vrsta"
];

const ProductsSection: React.FC<{}> = () => {
  const data = useStaticQuery(graphql`
    query Products {
      images: allFile(
        filter: {
          relativePath: {
            in: ["product_01.jpg", "product_02.jpg", "product_03.jpg", "product_04.jpg", "product_05.jpg", "product_06.jpg", "product_07.jpg", "product_08.jpg", "product_09.jpg", "product_10.jpg"]
          }
        }
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    }
  `);

  const images = [
    {
      id: "product_01.jpg",
      url: extractLoadedImage(data, "product_01.jpg"),
      alt: "",
    },
    {
      id: "product_02.jpg",
      url: extractLoadedImage(data, "product_02.jpg"),
      alt: "",
    },
    {
      id: "product_03.jpg",
      url: extractLoadedImage(data, "product_03.jpg"),
      alt: "",
    },
    {
      id: "product_04.jpg",
      url: extractLoadedImage(data, "product_04.jpg"),
      alt: "",
    },

    {
      id: "product_05.jpg",
      url: extractLoadedImage(data, "product_05.jpg"),
      alt: "",
    },
    {
      id: "product_06.jpg",
      url: extractLoadedImage(data, "product_06.jpg"),
      alt: "",
    },
    {
      id: "product_07.jpg",
      url: extractLoadedImage(data, "product_07.jpg"),
      alt: "",
    },
    {
      id: "product_087.jpg",
      url: extractLoadedImage(data, "product_08.jpg"),
      alt: "",
    },
    {
      id: "product_09.jpg",
      url: extractLoadedImage(data, "product_09.jpg"),
      alt: "",
    },
    {
      id: "product_10.jpg",
      url: extractLoadedImage(data, "product_10.jpg"),
      alt: "",
    },
  ];

  return (
    <ProductsContainer>
        <ProductsGrid>
          <ProductsGridrapperMobile gridGap={24}>
            <SectionHeading title="galerija" />
            <SectionSubheading>
              Naši proizvodi su<br />po Vašoj mjeri!
            </SectionSubheading>
            <ProductItemsWrapper gridGap={4}>
              {[...productListLeft, ...productListMiddle, ...productListRight].map((product, i) => (
                <ProductItemWrapper key={`${product}${i}`}>
                  <FontAwesomeIcon
                    icon={faCheck}
                    color={theme.colors.orange()}
                    fontSize={16}
                    style={{ marginTop: 4 }}
                  />
                  <ProductItem>{product}</ProductItem>
                </ProductItemWrapper>
              ))}
            </ProductItemsWrapper>
          </ProductsGridrapperMobile>
          <ProductsGridrapper
            gridGap={24}
          >
            <SectionHeading title="galerija" />
            <SectionSubheading>
              Naši proizvodi su po Vašoj <br /> mjeri!
            </SectionSubheading>

            <RowContainer>
              <ProductItemsWrapper gridGap={4}>
                {productListLeft.map((product, i) => (
                  <ProductItemWrapper key={`${product}${i}`}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      color={theme.colors.orange()}
                      fontSize={16}
                      style={{ marginTop: 4 }}
                    />
                    <ProductItem>{product}</ProductItem>
                  </ProductItemWrapper>
                ))}
              </ProductItemsWrapper>

              <ProductItemsWrapper gridGap={4}>
                {productListMiddle.map((product, i) => (
                  <ProductItemWrapper key={`${product}${i}`}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      color={theme.colors.orange()}
                      fontSize={16}
                      style={{ marginTop: 4 }}
                    />
                    <ProductItem>{product}</ProductItem>
                  </ProductItemWrapper>
                ))}
              </ProductItemsWrapper>

              <ProductItemsWrapper gridGap={4}>
                {productListRight.map((product, i) => (
                  <ProductItemWrapper key={`${product}${i}`}>
                    <FontAwesomeIcon
                      icon={faCheck}
                      color={theme.colors.orange()}
                      fontSize={16}
                      style={{ marginTop: 4 }}
                    />
                    <ProductItem>{product}</ProductItem>
                  </ProductItemWrapper>
                ))}
              </ProductItemsWrapper>
            </RowContainer>
          </ProductsGridrapper>
          
          {images.map((img) => (
            <ProductImage key={img.id} backgroundImage={img.url} />
          ))}
        </ProductsGrid>
    </ProductsContainer>
  )
}

export default ProductsSection;
