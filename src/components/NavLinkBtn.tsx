import { Link } from "react-router-dom";

// INames - props for the NavLinkBtn to take in.
interface INames {
  _className: string;
  _toName: string;
  children: any;
}

export const NavLinkBtn = ({ _className, _toName, children }: INames) => {
  return (
    <div>
      <div className="px-6">
        <Link className={_className} to={_toName}>
          {children}
        </Link>
      </div>
    </div>
  );
};
