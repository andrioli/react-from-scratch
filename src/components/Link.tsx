import * as React from 'react';

interface LinkProps {
  active: boolean;
  onClick: () => void;
}

const Link: React.SFC<LinkProps> = ({
  active,
  onClick,
  children,
}) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </a>
  );
};

export default Link;
