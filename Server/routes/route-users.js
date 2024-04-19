const express = require("express");
const router = express.Router();

const Auth = require("../auth/auth-user");
const session = require("../auth/auth-token");
const API_VERSION = "v1";
// Import User Model
const {
  GetUsers,
  CreateUser,
  UpdateUser,
  DeleteUser,
} = require("../controllers/control-user");
const { LoginWithUser } = require("../controllers/loginwithusuer");
const {
  NewPost,
  GetPosts,
  UpdatePost,
  DeletedPost,
} = require("../controllers/control-post");

router.use(express.json());

router.get(`/${API_VERSION}/users`, GetUsers);
router.post(`/${API_VERSION}/user/register`, CreateUser);
router.post(`/${API_VERSION}/user/login`, LoginWithUser);
router.put(`/${API_VERSION}/user/:id`, Auth, UpdateUser);
router.delete(`/${API_VERSION}/user/:id`, Auth, DeleteUser);
router.get(`/${API_VERSION}/post`, Auth, GetPosts);
router.post(`/${API_VERSION}/post`, Auth, NewPost);
router.patch(`/${API_VERSION}/post/:id`, Auth, UpdatePost);
router.delete(`/${API_VERSION}/post/:id`, Auth, DeletedPost);

module.exports = router;
