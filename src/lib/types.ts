import { z } from 'zod'

const clinicSchema = z.object({
  id: z.number(),
  name: z.string(),
  location: z.object({
    longitude: z.number(),
    latitude: z.number(),
  }),
  lsa: z.enum(['LSA-1', 'LSA-2']),
  gmfInfo: z.object({
    gmfType: z.enum(['GMF-A', 'GMF-B']),
    gmfGrade: z.enum(['N-1', 'N-2']),
  }),
  isFavorite: z.boolean(),
  phoneNumber: z.string(),
  email: z.string().email(),
})

export type Clinic = z.infer<typeof clinicSchema>
export type Lsa = z.infer<typeof clinicSchema.shape.lsa>
export type GmfInfo = z.infer<typeof clinicSchema.shape.gmfInfo>

const clinicArraySchema = z.array(clinicSchema.strict())
export { clinicArraySchema }
