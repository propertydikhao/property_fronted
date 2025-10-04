import { isLoadingShow } from "../redux/slice/loadingSlice";
import { store } from "../redux/store"
const BASE_URL = process.env.REACT_APP_PROPERTY_BACKEND_API;

export async function apiFetch(endpoint, data = {}, headers = {}) {
  const { dispatch } = store;

  dispatch(isLoadingShow(true));


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

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "API Error");
    }

    return await response.json();
  } catch (error) {
    throw error;
  } finally {
    dispatch(isLoadingShow(false));
  }
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

export const formatDate = (epoch) => {
  const d = new Date(epoch?.toString().length === 10 ? epoch * 1000 : epoch);

  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  const hh = String(d.getHours()).padStart(2, "0");
  const min = String(d.getMinutes()).padStart(2, "0");
  const ss = String(d.getSeconds()).padStart(2, "0");

  return `${dd}-${mm}-${yyyy}` || "-";
};

export const formatIndianNumber=(num)=> {
  if (num >= 10000000) {
    return (num / 10000000).toFixed(2).replace(/\.00$/, "") + " Cr";
  } else if (num >= 100000) {
    return (num / 100000).toFixed(2).replace(/\.00$/, "") + " Lac";
  }
  return num?.toString();
}

export const slugGenerate = (str) => {
  return str
    ?.toString()
    ?.normalize("NFD") // split accented letters
    ?.replace(/[\u0300-\u036f]/g, "") // remove diacritics
    ?.toLowerCase()
    ?.trim()
    ?.replace(/[^\p{L}\p{N}\s-]/gu, "") // keep letters, numbers, spaces and hyphens
    ?.replace(/\s+/g, "-") // spaces → hyphens
    ?.replace(/-+/g, "-") // collapse multiple hyphens
    ?.replace(/^-|-$/g, ""); // trim leading/trailing hyphen
};
