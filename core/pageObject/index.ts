import { LoginPage } from "./loginPage";
import { Dashboards } from "./dashbord";

export const getPage = (pageName: string, page: any) => {
    switch (pageName) {
        case 'login':
            return new LoginPage(page);
        case 'dashboard':
            return new Dashboards(page);
        default:
            throw new Error(`Page '${pageName}' not found.`);
    }
};
