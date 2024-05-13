import {Page} from "@playwright/test";

export class ApiMethods {
    readonly page: Page
    readonly token: string;
    readonly url: string;
    readonly name: string;
    readonly secondName : string

  constructor() {
      this.token = process.env.TOKEN
      this.name = process.env.NAME
      this.secondName = process.env.SECONDARY_NAME
      this.url = 'https://rp.epam.com';
  }

    async sendGetRequest(endpoint: string, url = this.url) {
        return await this.page.request.get(url + `/api/v1/project/${this.name + this.secondName}/` + endpoint, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            },

        })
    }

    async sendPostRequest(endpoint: string, data: object, url = this.url) {
        return await this.page.request.post(url + `/api/v1/project/${this.name + this.secondName}/` + endpoint, {
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            },
        })
    }

    async sendPutRequest(endpoint: string, data: object, url = this.url) {
        return await this.page.request.put(url + `/api/v1/project/${this.name + this.secondName}/` + endpoint, {
            data: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            },
        });
    }

    async sendDeleteRequest(endpoint: string, url = this.url) {
        return await this.page.request.delete(url + `/api/v1/project/${this.name + this.secondName}/` + endpoint, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`,
            },
        });
    }
}
