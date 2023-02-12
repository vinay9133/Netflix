import React from "react";

function FeatureFied({ children, ...restProps }) {
  return (
    <div {...restProps}>
      <p>Ready to watch? Enter your email to create or restart your membership.</p>
      <div>{children}</div>
    </div>
  );
}

export default FeatureFied;
