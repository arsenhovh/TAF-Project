const { createLogger, transports, format } = require('winston');
const { combine, timestamp, printf } = format;

// Define log format
const logFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});

// Create logger instance
const logger = createLogger({
    level: 'info',
    format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        logFormat
    ),
    transports: [
        // Log to a file
        new transports.File({ filename: 'test.log', level: 'info' }),
        // Log to console for debugging
        new transports.Console({ format: format.simple() })
    ]
});

module.exports = logger;
