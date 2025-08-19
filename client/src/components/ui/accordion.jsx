
import React, { useState } from "react";

export function Accordion({ children, type = "multiple", className = "" }) {
  return <div className={`accordion ${className}`}>{children}</div>;
}

export function AccordionItem({ value, children, className = "" }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`accordion-item ${className}`}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { open, setOpen })
          : child
      )}
    </div>
  );
}

export function AccordionTrigger({ children, open, setOpen, className = "" }) {
  return (
    <button
      className={`accordion-trigger w-full text-left py-2 px-2 font-semibold ${className}`}
      onClick={() => setOpen((o) => !o)}
      type="button"
    >
      <div className="flex justify-between items-center">
        {children}
        <span className="text-gray-400">{open ? "▲" : "▼"}</span>
      </div>
    </button>
  );
}

export function AccordionContent({ children, open, className = "" }) {
  return open ? <div className={`accordion-content ${className}`}>{children}</div> : null;
}
