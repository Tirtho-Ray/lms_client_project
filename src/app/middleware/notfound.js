import httpStatus from 'http-status';

const notFound = (req, res, next) => {
    res.status(httpStatus.NOT_FOUND).json({
        success: false,
        message: 'API Not Found!',
        error: null,
    });
};

export default notFound;
