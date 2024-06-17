import {expect, test} from '@playwright/test';
import {ApiMethods} from "../../utility/apiMethods";

let apiRequest: ApiMethods

test.beforeEach(async () => {
    apiRequest = new ApiMethods()
});


test('Check that user can not get dashboards from api with incorrect endpoint', async () => {
    const response = await apiRequest.sendGetRequest('preference/arsenhovhaisyan/')
    expect(response.status).toBe(404);
});

test('Check that user can not add 2 dashboards with same name', async () => {
    const response = await apiRequest.sendPostRequest('dashboard?page.page=1&page.size=300',{name: "DashboardNameAPI", description: "DescriptionAPI"})
    const data = await response.json();
    expect(data.message.includes("You couldn't create the duplicate.")).toBe(true);
    expect(response.status).toBe(409);
});

test('Check that user can not add dashboard without name', async () => {
    const response = await apiRequest.sendPostRequest('dashboard?page.page=1&page.size=300',{name: "", description: "DescriptionAPI"})
    const data = await response.json();
    expect(data.message.includes("Field 'name' should have size from '3' to '128'.]")).toBe(true);
    expect(response.status).toBe(400);
});


test('Check that user can not update dashboard and put as name nothing', async () => {
    const response = await apiRequest.sendPostRequest('dashboard/171280',{name: "", description: "DescriptionAPI"})
    const data = await response.json();
    expect(data.message.includes("Field 'name' should have size from '3' to '128'.]")).toBe(true);
    expect(response.status).toBe(400);
});

test('Check that user can not update dashboard without name filed', async () => {
    const response = await apiRequest.sendPostRequest('dashboard/171280',{description: "DescriptionAPI"})
    const data = await response.json();
    expect(data.message.includes("Field 'name' should not be null")).toBe(true);
    expect(response.status).toBe(400);
});

test('Check that user can not delete already deleted dashboard with ID', async () => {
    const response = await apiRequest.sendDeleteRequest('dashboard/171283')
    const data = await response.json();
    expect(data.message.includes("not found on project")).toBe(true);
    expect(response.status).toBe(404);
});
