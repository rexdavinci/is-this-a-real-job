import passport from 'passport';
import localStorage from 'localStorage';
import { generateToken } from '../helpers/jwt';
import { sanitizeUser } from '../helpers/sanitizeUser';

export const auth0Authenticate = passport.authenticate('auth0', {
  scope: 'openid email profile'
});

export const auth0AuthCallback = (req, res, next) => passport.authenticate('auth0', async(err, user, info)=>{
  if(err){return next(err)}
  if(!user){return res.redirect('/login')}
  req.logIn(user, (err)=>{
    if(err) {return next(err)}
    const returnTo = req.session.returnTo;
    delete req.session.returnTo;
    res.redirect(returnTo || '/posts')
  })(req, res, next)
})

// export const twitterAuthCallback = (req, res, next) => passport.authenticate('twitter', async (err, user) => {
//   if (!user) {
//     return res.redirect('/login');
//   }
//   const sanitizedUser = sanitizeUser(user); // remove password from user
//   const {
//     userId,
//     isAdmin,
//     username,
//     name
//   } = sanitizedUser;

//   const payload = { userId, isAdmin };
//   const token = await generateToken(payload);

//   localStorage.setItem('token', token);
//   localStorage.setItem('user', JSON.stringify(sanitizedUser));

//   res.cookies.set('token', token, { signed: true }); // create token and send to client
//   res.cookies.set('username', username, { signed: true });
//   res.cookies.set('name', name, { signed: true });
//   return res.redirect('/posts');
// })(req, res, next);
