import UserService from "../services/user-service.js";

const userService = new UserService();

export const signUp = async (req, res) => {
    try {
        const response = await userService.signUp({
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        });
        return res.status(201).json({
            success: true,
            message: 'Successfully created the new user',
            data: response,
            error: {}
        });
    } catch (error) {
       return res.status(500).json({
        success: false,
        message: 'Something went wrong',
        data: {},
        error: err
       });
    }
}

export const logIn = async (req, res) => {
    try {
        const token = await userService.signIn(req.body);
        return res.status(200).json({
            success: true,
            message: 'Successfully logged in',
            data: token,
            error: {}
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
            data: {},
            error: error
        });
    }
}