import {Page} from "@playwright/test";

export class ApiMethods {
    readonly page: Page
    readonly token: string;
    readonly url: string;

  constructor() {
      this.token = process.env.TOKEN
      this.url = 'https://rp.epam.com';

  }

    async sendGetRequest(endpoint: string,) {
        return await this.page.request.get(this.url + '/api/v1/project/arsenhovhannisyan_personal/' + endpoint, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            },

        })
    }

    async sendPostRequest(endpoint: string, data: object) {
        return await this.page.request.post(this.url + '/api/v1/project/arsenhovhannisyan_personal/' + endpoint, {
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            },
        })
    }

    async sendPutRequest(endpoint: string, data: object) {
        return await this.page.request.put(this.url + '/api/v1/project/arsenhovhannisyan_personal/' + endpoint, {
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            },
        });
    }

    async sendDeleteRequest(endpoint: string) {
        return await this.page.request.delete(this.url + '/api/v1/project/arsenhovhannisyan_personal/' + endpoint, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            },
        });
    }
}
