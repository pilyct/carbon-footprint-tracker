
import { Request, Response } from 'express';
import { userSeedData } from '../data';
import generateTokenResponse from '../utils/generateTokenResponse';
import { UserModel } from '../models/user.model';


async function userLogin(req: Request, res: Response) {
  try {
    const {email, password} = req.body; 
    // const user = userSeedData.find(user => user.email === email && user.password === password);
    const user = await UserModel.findOne({email, password});

    if(!user) {
      return res.status(400).send('User name or password is not valid.')
      
    } else {

      const userWithToken = generateTokenResponse(user);
      res.status(200).json(userWithToken);
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}



// async function userRegister(req: Request, res: Response) {
//   const { username, email, password } = req.body;
  
//   try {
//     let user = await UserModel.findOne({ email });
//     if (user) {
//       return res.status(400).json({ msg: 'User already exists' });
//     }
    
//     user = new UserModel({
//       username,
//       email,
//       password: await bcrypt.hash(password, 10),
//     });
    
//     await user.save();
//     res.status(201).json({ msg: 'User registered successfully' });
//   } catch (err: any) {
//     res.status(500).json({ error: err.message });
//   }
// };


export {
  userLogin,
  // userRegister,
};


