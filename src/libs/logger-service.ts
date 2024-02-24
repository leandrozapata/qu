class LoggerService {
    static logError(error: Error) {
        console.error(error);
        // In the future, you can add more logging functionality here:
        // Sentry.captureException(error);
    }
    static logWarning(warning: Error) {
        console.log(warning);
    }
}

export default LoggerService;
