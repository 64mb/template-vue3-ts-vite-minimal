import { $fetch } from "ofetch";

interface FetchConfig {
  method?: "GET" | "POST" | "PATCH" | "PUT" | "DELETE",
  body?: Record<string, string>,
  query?: Record<string, string>,
  headers?: Record<string, string>,
}

const baseUrl = ''

function buildFetchUrl(url: string): string {
  return new URL(url, `${baseUrl}`).toString();
}

export async function fetcher<T>(
  url: string,
  options: FetchConfig = {}
): Promise<ReturnType<typeof $fetch<T>>> {
  const usedOptions = { ...options, timeout: 10_000 };
  return await $fetch<T>(buildFetchUrl(url), usedOptions);
}