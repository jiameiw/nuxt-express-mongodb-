import { Router } from 'express'

import article from './article'
import sort from './sort'
import tag from './tag'
import add from './add'
import loadmore from './loadmore'
import comment from './comment'
import commentInsert from './commentInsert'
import pagination from './pagination'

const router = Router()

// Add USERS Routes
router.use(article)
router.use(sort)
router.use(tag)
router.use(add)
router.use(loadmore)
router.use(comment)
router.use(commentInsert)
router.use(pagination)

export default router
