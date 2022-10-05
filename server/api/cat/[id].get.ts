import { z } from 'zod'

const cat = z.object({
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
})

export default defineCachedEventHandler(async event => {
  const id = getRouterParam(event, 'id')
  const result = await $fetch(`https://api.thecatapi.com/v1/images/${id}`, {
    headers: {
      'x-api-key': useRuntimeConfig().catApiToken
    }
  })

  return cat.parse(result)
}, { swr: true })
