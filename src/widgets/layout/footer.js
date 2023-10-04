import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

export function Footer({ brandName, brandLink, routes }) {
  const year = new Date().getFullYear();

  return (
    <footer className="py-2">
      <div className="flex w-full flex-wrap items-center justify-center gap-6 px-2 md:justify-between">
        <Typography variant="small" className="font-normal text-inherit">
          Copyright &copy; {year},{" "}
          <a
            href={brandLink}
            rel="noreferrer"
            target="_blank"
            className="transition-colors hover:text-blue-500"
          >
            {brandName}
          </a>{" "}
          {/* other links */}
        </Typography>
        <ul className="flex items-center gap-4">
          {routes.map(({ name, path }) => (
            <li key={name}>
              <Typography
                as="a"
                href={path}
                target="_blank"
                variant="small"
                className="py-0.5 px-1 font-normal text-inherit transition-colors hover:text-blue-500"
              >
                {name}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

Footer.defaultProps = {
  brandName: "Ananse AI",
  brandLink: "https://www.ananseai.com",
  routes: [
    { name: "Ananse AI", path: "https://www.ananseai.com" },
    { name: "About Us", path: "https://www.ananseai.com/presentation" },
    { name: "Blog", path: "https://www.ananseai.com/blog" },
    { name: "License", path: "https://www.ananseai.com/license" },
  ],
};

Footer.propTypes = {
  brandName: PropTypes.string,
  brandLink: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object),
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
