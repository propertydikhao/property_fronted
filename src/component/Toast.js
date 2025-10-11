import { useDispatch, useSelector } from "react-redux";
import { isToastShow } from "../redux/slice/toastSlice";
import { useEffect } from "react";

const Toast = () => {
  const dispatch = useDispatch();
  const toastState = useSelector((state) => state?.toast);

  useEffect(() => {
    const modalEl = document.getElementById("notificationModal");

    if (modalEl) {
      // Create bootstrap modal instance
      const modal = new window.bootstrap.Modal(modalEl);

      // Show when state says so
      if (toastState?.isToastShow) {
        modal.show();
      }

      // Attach event listener for close
      const handleClose = () => {
        dispatch(
          isToastShow({
            isShow: false,
            type: toastState?.type,
            message: toastState?.message,
          })
        );
      };

      modalEl.addEventListener("hidden.bs.modal", handleClose);

       setTimeout(() => {
         modal.hide();
       }, 1000);


      // cleanup
      return () => {
        modalEl.removeEventListener("hidden.bs.modal", handleClose);
      };

         }
  }, [toastState]);

  return (
    <div
      className="modal fade toastDivBlur"
      id="notificationModal"
      tabIndex="-1"
      aria-labelledby="notificationModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div
          className="modal-content"
          style={{
            background: toastState?.type === "error" ? "#9f0000" : "#007300",
          }}
        >
          <div
            className="modal-body"
            style={{
              fontSize: "20px",
              textAlign: "center",
              letterSpacing: "1px",
              color: "white",
              display: "flex",
            }}
          >
            {toastState?.type === "error" ? (
              <i
                className="bi bi-x me-2 fs-5"
                style={{
                  alignSelf: "center",
                  background: "#900e0e",
                  borderRadius: "10px",
                  width: "25px",
                  height: "25px",
                  fontWeight: 500,
                }}
              ></i>
            ) : (
              <i
                className="bi bi-check2 me-2 fs-5"
                style={{
                  alignSelf: "center",
                  background: "#029f02",
                  borderRadius: "10px",
                  width: "25px",
                  height: "25px",
                  fontWeight: 500,
                }}
              ></i>
            )}
            {toastState?.message}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast;
