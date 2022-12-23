export const extractLoadedImage = (data: any, imageName: string) => {
  const image = data.images.nodes.find((d: any) => (d.childImageSharp.gatsbyImageData.images.fallback.src.includes(imageName)));
  if (image) {
    return image.childImageSharp.gatsbyImageData.images.fallback.src;
  }
  return null;
};
