class Reporter {
    async reportTest(name: string, status: string, message?: string) {
        console.log(`Test: ${name}, Status: ${status}, Message: ${message}`);
    }
}
