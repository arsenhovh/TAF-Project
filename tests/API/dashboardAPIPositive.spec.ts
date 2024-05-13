import {expect, test} from '@playwright/test';
import {ApiMethods} from "../../utility/apiMethods";

let apiRequest: ApiMethods

test.beforeEach(async ({ page }) => {
         apiRequest = new ApiMethods()
});

test('Check that user get dashboard api call working correctly', async () => {
    const response = await apiRequest.sendGetRequest('preference/arsenhovhannisyan/')
    expect(response.status).toBe(200);
});

test('Check that user can add dashboard with api', async () => {
    const response = await apiRequest.sendPostRequest('dashboard?page.page=1&page.size=300',{name: "DashboardNameAPI", description: "DescriptionAPI"})
    expect(response.status).toBe(201);
});

test('Check that user can update dashboard info with api', async () => {
    const response = await apiRequest.sendPutRequest('dashboard/171280',{name: "DashboardNameAPIEdit", description: "DescriptionAPI"})
    expect(response.status).toBe(200);
});

test('check that user can delete dashboard with api', async () => {
    const response = await apiRequest.sendDeleteRequest('dashboard/171284')
    expect(response.status).toBe(200);
});
