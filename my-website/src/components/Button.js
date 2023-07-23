import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];
const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  href,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  if (href) {
    const linkTarget = buttonStyle === 'btn--primary' ? '_blank' : '_self';

    return (
      <a
        href={href}
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        target={linkTarget}
        rel={linkTarget === '_blank' ? 'noopener noreferrer' : ''}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

