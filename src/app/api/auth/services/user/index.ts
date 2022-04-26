import { Request } from "express";
import { compare } from "bcrypt";
import { generateUserToken } from "../../../../utils/jwt";
import { User } from "../../../../../models";

export const loginService = async ({ body }: Request) => {
  try {
    const { username, password } = body;

    let user = await User.findOne({ where: { username } });

    if (!user) return { error: "Invalid username or password", status: 403 };

    const passwordMatches = await compare(password, user.password);

    if (!passwordMatches)
      return { error: "Invalid username or password", status: 403 };

    const token = generateUserToken({
      id: user.id,
      username: user.username,
    });

    return {
      data: {
        user: {
          id: user.id,
          username: user.username,
        },
        token,
      },
      message: "Welcome back",
    };
  } catch (error) {
    return {
      error: "Server Error",
      status: 500,
    };
  }
};
