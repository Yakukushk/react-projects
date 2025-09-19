import HrefLink from "./href-link";

export default function NavLink({ classes }) {
  return (
    <>
      <li>
        <HrefLink href="/meals" classes={classes}>
          Browse Meals
        </HrefLink>
      </li>
      <li>
        <HrefLink href="/community" classes={classes}>
          Foodies Community
        </HrefLink>
      </li>
    </>
  );
}
