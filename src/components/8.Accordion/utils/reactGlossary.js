export const reactInterviewGlossary = [
  {
    term: "React",
    definition:
      "A JavaScript library for building user interfaces, developed by Facebook, using a component-based architecture.",
  },
  {
    term: "JSX",
    definition:
      "A syntax extension that lets you write HTML-like code inside JavaScript, which is transformed into React.createElement calls.",
  },
  {
    term: "Component",
    definition:
      "Reusable, self-contained building blocks of a React UI that manage their own state and rendering.",
  },
  {
    term: "Functional Component",
    definition:
      "A component defined as a function, which returns JSX and can use hooks to manage state and side effects.",
  },
  {
    term: "Class Component",
    definition:
      "An older way to define components using ES6 classes, allowing state and lifecycle methods.",
  },
  {
    term: "State",
    definition:
      "An object managed within a component that holds dynamic data which, when changed, triggers re-rendering.",
  },
  {
    term: "Props",
    definition:
      "Short for properties, these are read-only inputs passed from a parent component to a child.",
  },
  {
    term: "useState",
    definition:
      "A React hook that allows functional components to manage and update local state.",
  },
  {
    term: "useEffect",
    definition:
      "A React hook that performs side effects in function components, such as data fetching or subscriptions.",
  },
  {
    term: "Virtual DOM",
    definition:
      "A lightweight in-memory representation of the real DOM used by React to optimize UI updates.",
  },
  {
    term: "Reconciliation",
    definition:
      "The process React uses to compare the virtual DOM with the previous version and update the real DOM efficiently.",
  },
  {
    term: "Keys",
    definition:
      "Unique identifiers used in lists to help React identify which items have changed or been added/removed.",
  },
  {
    term: "Lifting State Up",
    definition:
      "A technique where state is moved to the closest common ancestor of components that need access to it.",
  },
  {
    term: "Controlled Component",
    definition:
      "A form input element whose value is controlled by React state.",
  },
  {
    term: "Uncontrolled Component",
    definition:
      "A form input that maintains its own internal state and is accessed via refs.",
  },
  {
    term: "Context API",
    definition:
      "A way to share values like theme or user data across the component tree without passing props manually.",
  },
  {
    term: "useContext",
    definition:
      "A hook to consume values from a React Context directly in a functional component.",
  },
  {
    term: "React Router",
    definition:
      "A library for handling routing in React applications, enabling navigation between different views.",
  },
  {
    term: "React.memo",
    definition:
      "A higher-order component that prevents unnecessary re-renders by memoizing functional components.",
  },
  {
    term: "useCallback",
    definition:
      "A hook that returns a memoized version of a callback function, useful for performance optimizations.",
  },
  {
    term: "useMemo",
    definition:
      "A hook that returns a memoized value, used to avoid expensive calculations on every render.",
  },
  {
    term: "Error Boundaries",
    definition:
      "Components that catch JavaScript errors anywhere in their child component tree and display a fallback UI.",
  },
  {
    term: "Portals",
    definition:
      "A way to render children into a DOM node outside the parent component’s hierarchy.",
  },
  {
    term: "StrictMode",
    definition:
      "A wrapper component that activates additional checks and warnings for its descendants in development mode.",
  },
  {
    term: "React DevTools",
    definition:
      "A browser extension for inspecting React component hierarchies and state/prop data.",
  },
];
