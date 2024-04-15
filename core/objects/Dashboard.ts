export class Dashboard {
    readonly dashboardName: string;
    readonly description: string;

    constructor(dashboardName: string, description?: string) {
        this.dashboardName = dashboardName;
        this.description = description;
    }

}
