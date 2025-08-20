
export const CORE_CONCEPTS = [
  {
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMi_sLP0R1Cu4Z8rHEdwpMPnIPilne5eq33kbYcXoY53UG4Up-3DUCeH87jOFB8MuWOoI&usqp=CAU`,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsbFCqjFJFBJVccR0Yi1r827d5UZfOlXQLtk_OmjGR_sBu03zPsmDSxs5XVtK_Ax858XE&usqp=CAU`,
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFvFJi_lLeVdnmzOCSA12_btCzSlWLqpJBCNVoRUel5Z8N09TBiwaKYiLEMFrDTawxoYg&usqp=CAU`,
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: `https://miro.medium.com/v2/resize:fit:1358/1*EDrJBwOTYO-EhOy771VC9Q.png`,
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];

export const EXAMPLES = {
  components: {
    title: 'Components',
    description:
      'Components are the building blocks of React applications. A component is a self-contained module (HTML + optional CSS + JS) that renders some output.',
    code: `
function Welcome() {
  return <h1>Hello, World!</h1>;
}`,
  },
  jsx: {
    title: 'JSX',
    description:
      'JSX is a syntax extension to JavaScript. It is similar to a template language, but it has full power of JavaScript (e.g., it may output dynamic content).',
    code: `
<div>
  <h1>Welcome {userName}</h1>
  <p>Time to learn React!</p>
</div>`,
  },
  props: {
    title: 'Props',
    description:
      'Components accept arbitrary inputs called props. They are like function arguments.',
    code: `
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}`,
  },
  state: {
    title: 'State',
    description:
      'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
    code: `
function Counter() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(true);
  }

  return (
    <div>
      <button onClick={handleClick}>Show Details</button>
      {isVisible && <p>Amazing details!</p>}
    </div>
  );
}`,
  },
};