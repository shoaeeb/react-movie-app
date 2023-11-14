import { useEffect } from "react";

export function useKey(key, callback, condition) {
  useEffect(
    function (e) {
      if (condition?.()) return;
      function onCall(e) {
        if (e.code === key) {
          callback();
        }
      }
      document.addEventListener("keydown", onCall);

      return function () {
        document.removeEventListener("keydown", onCall);
      };
    },
    [callback, key, condition]
  );
}
