export function Button({ className = "", children, ...props }) {
    return (
      <button
        className={`bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  