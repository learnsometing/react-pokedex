import gsap from 'gsap';

export const fadeIn = (
  element: string,
  duration: number,
  delay: number
): void => {
  gsap.to(element, {
    duration,
    delay,
    opacity: 1,
    ease: 'power2.out',
  });
};
