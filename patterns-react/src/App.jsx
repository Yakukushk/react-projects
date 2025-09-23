import Accordion from "./components/Accordion";
import AccordionItem from "./components/AccordionItem";
import Place from "./components/Place/Place";
import SearchableList from "./components/SearchList/SearchableList";
import { PLACES } from "./lib/data";

function App() {
  return (
    <main>
      <section>Why work with us?</section>
      <section>
        <Accordion className="accordion">
          <Accordion.Item
            id="experience"
            className="accordion-item"
            title="We got 20 years"
          >
            <article>
              <p>you can&apos;t got wrong with us</p>
              <p>Something</p>
            </article>
          </Accordion.Item>
        </Accordion>
        <Accordion className="accordion">
          <Accordion.Item
            id="local-guides"
            className="accordion-item"
            title="Local guide"
          >
            <article>
              <p>you can&apos;t got wrong with us</p>
              <p>Something</p>
            </article>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
