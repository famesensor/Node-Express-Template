import asyncHandler from '@middleware/asyncHandler'

export const getHello = asyncHandler(async (_req, res) => {
    res.json({ status: 'success' })
})
