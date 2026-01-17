import Image from "next/image";
import {
  isImageFitCover,
  isImageSlide,
  RenderSlideProps,
  Slide,
  SlideImage,
  useLightboxProps,
  useLightboxState,
} from "yet-another-react-lightbox";

export type CustomSlide = SlideImage & {
  alt?: string;
};

export default function NextJsImage({ slide, offset, rect }: RenderSlideProps<Slide>) {
  const {
    on: { click },
    carousel: { imageFit },
  } = useLightboxProps();

  const { currentIndex } = useLightboxState();

  // Narrow to image slides only
  if (!isImageSlide(slide)) return null;

  const customSlide = slide as CustomSlide;
  const cover = isImageFitCover(slide, imageFit);

  const width =
    !cover && customSlide.height && customSlide.width
      ? Math.round(
        Math.min(rect.width, (rect.height / customSlide.height) * customSlide.width)
      )
      : rect.width;

  const height =
    !cover && customSlide.height && customSlide.width
      ? Math.round(
        Math.min(rect.height, (rect.width / customSlide.width) * customSlide.height)
      )
      : rect.height;

  return (
    <div style={{ position: "relative", width, height }}>
      <Image
        fill
        alt={customSlide.alt ?? ""}
        src={customSlide.src}
        role="img"
        loading="eager"
        draggable={false}
        style={{
          objectFit: cover ? "cover" : "contain",
          cursor: click ? "pointer" : undefined,
        }}
        sizes={`${Math.ceil((width / window.innerWidth) * 100)}vw`}
        onClick={
          offset === 0 ? () => click?.({ index: currentIndex }) : undefined
        }
      />
    </div>
  );
}