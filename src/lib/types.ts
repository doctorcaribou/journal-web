import { z } from 'zod'

export const LSA_VALUES = ['LSA-1', 'LSA-2'] as const
export const GMF_TYPES = ['GMF-A', 'GMF-B'] as const
export const GMF_GRADES = ['N-1', 'N-2'] as const

const clinicSchema = z.object({
  id: z.number(),
  name: z.string(),
  location: z.object({
    longitude: z.number(),
    latitude: z.number(),
  }),
  lsa: z.enum(LSA_VALUES),
  gmfInfo: z.object({
    gmfType: z.enum(GMF_TYPES),
    gmfGrade: z.enum(GMF_GRADES),
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
