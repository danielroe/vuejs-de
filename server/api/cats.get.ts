import { z } from 'zod'

const cats = z.array(z.object({
  height: z.number(),
  id: z.string(),
  url: z.string(),
  width: z.number(),
  breeds: z.array(z.object({
    name: z.string(),
    wikipedia_url: z.string().optional(),
    temperament: z.string(),
    description: z.string()
  })).nonempty()
}))

export default defineCachedEventHandler(async () => {
  const result = await $fetch('https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1', {
    headers: {
      'x-api-key': useRuntimeConfig().catApiToken
    }
  })

  return cats.parse(result)
}, { swr: true })
