// API base URL from env
export const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8000";

// POST helper
export async function apiPost<T>(url: string, body: any): Promise<T> {
  const res = await fetch(`${API_BASE}${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}

// GET helper
export async function apiGet<T>(url: string): Promise<T> {
  const res = await fetch(`${API_BASE}${url}`);

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
}