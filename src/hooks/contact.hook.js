import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import axiosPublic from '../api/axios'

// GET: Fetch contact info/page data
export const useContactInfo = () => {
  const result = useQuery({
    queryKey: ['contact_info'],
    queryFn: async () => {
      const res = await axiosPublic.get('/contact-us')
      return res.data
    },
  })

  const data = result?.data?.data || {}
  return { ...result, data }
}



// POST: Submit contact form
export const useSubmitContact = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (formData) => {
      // formData: { name, email, subject, message }
      const res = await axiosPublic.post('/contact-us', formData)
      return res.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contact_submissions'] })
    },
    onError: (error) => {
      console.error('Contact form error:', error.response?.data || error.message)
    },
  })
}

