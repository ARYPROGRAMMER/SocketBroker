import { GROUP_CHAT_URL } from "@/lib/apiEndPoints";

export async function fetchChatGroup(token: string) {
  const res = await fetch(GROUP_CHAT_URL+"/:id", {
    headers: {
      Authorization: token,
    },
    next: {
      revalidate: 60 * 60,
      tags: ["dashboard"],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  const response = await res.json();
  if (response?.data) {
    return response?.data;
  }
  return [];
}
