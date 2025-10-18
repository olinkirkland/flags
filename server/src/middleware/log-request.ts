// Log Request middleware
export default async function logRequest(req: any, res: any, next: () => void) {
    console.log('Request', {
        method: req.method,
        url: req.url
    });

    next();
}
