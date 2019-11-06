import { validateSigninFormData, validateSignupFormData } from './validateAuth';
import {
  validUser,
  verifyUniqueUserEmail,
  verifyUniqueUserUsername,
  authenticateUserToken
} from './authentication';
import { validateCommentData } from './validateComment';
import {
  validateInviteData,
  validateInviteUpdateData
} from './validateInviteData';
import { validateInvite, validateInviteOwner } from './validateInvite';
import {
  validateInviteId,
  validateUserId,
  validateUpvoteInput
} from './validateUUID';
import { validateAdmin } from './validateAdmin';
import { validateUserById } from './validateUser';
import { googleAuthenticate, googleAuthCallback } from './googleAuth';
import { facebookAuthenticate, facebookAuthCallback } from './facebookAuth';
import { twitterAuthenticate, twitterAuthCallback } from './twitterAuth';
import { auth0Authenticate, auth0AuthCallback } from './auth0';
import { multerUploads } from './multer';

export {
  validateSigninFormData,
  validateSignupFormData,
  validUser,
  validateCommentData,
  validateInvite,
  validateInviteData,
  validateInviteUpdateData,
  validateInviteId,
  authenticateUserToken,
  validateAdmin,
  validateUserById,
  validateUserId,
  validateUpvoteInput,
  validateInviteOwner,
  googleAuthenticate,
  googleAuthCallback,
  facebookAuthenticate,
  facebookAuthCallback,
  twitterAuthCallback,
  twitterAuthenticate,
  multerUploads,
  verifyUniqueUserEmail,
  verifyUniqueUserUsername,
  auth0Authenticate,
  auth0AuthCallback
};
