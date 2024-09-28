import { Form, NavLink } from "react-router-dom";

const Nav = ({ userName }) => {
  return (
    <nav>
      <NavLink to="/" aria-label="Go to home">
        <img src="/src/assets/logo.svg" alt="Bellacents" height={80} />
      </NavLink>
      {userName && (
        <Form
          method="post"
          action="logout"
          onSubmit={(event) => {
            if (!confirm("Delete user and all data?")) {
              event.preventDefault();
            }
          }}
        >
          <button type="submit" className="btn btn--warning">
            <span>Delete User</span>
          </button>
        </Form>
      )}
    </nav>
  );
};
export default Nav;
