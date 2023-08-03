import { ofetch } from 'ofetch'

export async function request<T>(url: string): Promise<T> {
		const config = useRuntimeConfig()

    try {
        return await ofetch<T>(`${config.public.apiBase}${url}`)
    } catch (err) {
        throw err
    }
}
