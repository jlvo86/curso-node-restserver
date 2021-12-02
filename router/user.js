

const {Router} = require('express');

const router = Router();

const {userGet,userPost,userPut,userDelete,userPatch} = require('../controllers/user');

router.get('/', userGet);

router.put('/:id',userPut);

router.post('/', userPost);

router.delete('/',userDelete  );

router.patch('/',  userPatch);












module.exports = router;