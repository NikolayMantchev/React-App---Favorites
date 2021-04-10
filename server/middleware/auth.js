import jwt from "jsonwebtoken";

const secret = "test";

const auth = async (req, res, next) => {
    // console.log('headers', req.headers)
    try {
        const token = req?.headers?.authorization?.split(" ")[1];
        if (!token) {
            return res
                .status(401)
                .json({ status: "error", message: "No valid token!" });
        }
        const isCustomAuth = token.length < 500;

        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, secret);

            req.userId = decodedData?.id;
        } else {
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub;
        }

        next();
    } catch (error) {
        console.log(error);
    }
};

export default auth;
