const BASE_URL = process.env.REACT_APP_PROPERTY_BACKEND_API;

export async function apiFetch(endpoint, data = {}, headers = {}) {
  let options = {
    method: "POST",
    credentials: "include",
    headers: { ...headers },
  };

  if (data instanceof FormData) {
    // Don't stringify, don't set content-type
    options.body = data;
  } else {
    options.body = JSON.stringify(data);
    options.headers["Content-Type"] = "application/json";
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, options);

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || "API Error");
  }

  return response.json();
}

export function capitaliseWords(str) {
  if (!str) return "";
  return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}

export function formatRupees(num) {
  if (num == null) return "";
  return "₹" + num.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",");
}

export function formatNumber(num) {
  if (num == null) return "";
  return num.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ",");
}

export const modalClose = (modalId) => {
  if (modalId) {
    setTimeout(() => {
      let modalEl = document.getElementById(modalId);
      if (modalEl && window.bootstrap) {
        let modalInstance =
          window.bootstrap.Modal.getInstance(modalEl) ||
          new window.bootstrap.Modal(modalEl);
        modalInstance.hide();
      }
    }, 500);
  }
};
