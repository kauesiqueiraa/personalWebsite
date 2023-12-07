interface TypeWriteProps {
  element: HTMLElement;
}

export default function typeWrite({ element }: TypeWriteProps): void {
  const textArray: string[] = element.innerHTML.split("");
  element.innerHTML = " ";

  textArray.forEach((letra: string, i: number) => {
    setTimeout(() => {
      element.innerHTML += letra;
    }, 75 * i);
  })
}