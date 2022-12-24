export const extractLoadedImage = (data: any, imageName: string) => {
  const image = data?.images?.nodes?.find((d: any) => (d?.childImageSharp?.gatsbyImageData?.images?.fallback?.src?.includes(imageName)));
  if (image) {
    return image?.childImageSharp?.gatsbyImageData?.images?.fallback?.src;
  }
  return null;
};

export const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const isTouchDevice = typeof window !== "undefined" && ('ontouchstart' in window || 'onmsgesturechange' in window);
