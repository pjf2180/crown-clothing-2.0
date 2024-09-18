import { useEffect } from "react";

function useClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T>,
  callback: Function
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Check if the click is outside of the ref element
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
        // Remove the event listener after the callback is called
        document.removeEventListener("click", handleClickOutside);
      }
    }

    // Add the event listener to the document
    document.addEventListener("click", handleClickOutside);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref, callback]);
}

export default useClickOutside;
