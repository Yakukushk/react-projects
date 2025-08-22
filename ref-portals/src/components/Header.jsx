import { Content, HeaderParagraph, Heading } from "../assets/styledComponent";

export default function Header({description}) {
  return (
    <>
      <div id="modal"></div>
        <header>
          <Heading>
            The <em>Almost</em> Final Countdown
          </Heading>
          <HeaderParagraph>{description}</HeaderParagraph>
        </header>
    </>
  );
}
