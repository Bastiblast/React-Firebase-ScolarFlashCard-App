import {
  Children,
  ReactElement,
  ReactNode,
} from "react";


type Props = {
  children:CarouselSubElement[]
}

interface CarouselSubElement extends ReactElement {
  children?: [ReactNode,ReactNode]
}


export default function AdaptativeCarousel(props: Props) {
  const { children } = props;
  console.log("CarouselFullWidth children ",children)

  function carouselScroll(toImage: number) {
    const carousel: HTMLElement = document.querySelector(".carousel")!;
    carousel.scrollTo(carousel.clientWidth * (toImage - 1) + 1, 0);
  }
  
  const BtnSelector = () => {
    return (
      <div className="z-20 flex justify-center w-full gap-2 py-4">
          {Children.map(children, (child, index) => {
         const carouselButtonName = child && child.props.children[0].props.children
            return (
            <button
              id={"item" + (index + 1)}
              className="btn btn-xs"
              onClick={carouselScroll.bind(CarouselElement, index + 1)}
              >
              {child && carouselButtonName}
            </button>
          )
        })}
    </div>
    )
  }

  const CarouselElement = () => {
    return (
    <div  className="w-full mb-auto carousel">
    {Children.map(children, (child, index) => {
      console.log("child",child)
    return (
      <div
        id={"item" + (index + 1)}
        className="flex justify-center w-full carousel-item"
        >
        {child && child.props.children[1]}
      </div>
    )
  })}
    </div>)
  }

  return (
    <div id="carousel" className="relative flex flex-col top-20 bg-secondary">
      <BtnSelector />
      <CarouselElement />
    </div>
  );


}






/*
<div className="w-64 carousel rounded-box">
  <div className="w-full carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
      className="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div className="w-full carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
      className="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div className="w-full carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
      className="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div className="w-full carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
      className="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div className="w-full carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
      className="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div className="w-full carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
      className="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
  <div className="w-full carousel-item">
    <img
      src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
      className="w-full"
      alt="Tailwind CSS Carousel component" />
  </div>
</div>
*/
