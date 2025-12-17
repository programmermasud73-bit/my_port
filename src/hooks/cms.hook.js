import { useQuery } from '@tanstack/react-query'
import axiosPublic from '../api/axios'

// Get all CMS data (header, footer, etc.)
export const useCmsData = () => {
  const result = useQuery({
    queryKey: ['cms_data'],
    queryFn: async () => {
      const res = await axiosPublic.get('/cms')
      return res.data
    },
  })

  const data = result?.data?.data || {}
  return { ...result, data }
}

// Get header/footer data
export const useHeaderFooter = () => {
  const result = useQuery({
    queryKey: ['header_footer'],
    queryFn: async () => {
      const res = await axiosPublic.get('/header-footer')
      return res.data
    },
  })

  const data = result?.data?.data || {}
  return { ...result, data }
}

