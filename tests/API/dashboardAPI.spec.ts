import {expect, test} from '@playwright/test';


test('Get Request positivist', async ({ page }) => {
    const url = 'https://rp.epam.com';
    const token  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTUxNzU2MzYsInVzZXJfbmFtZSI6ImFyc2VuaG92aGFubmlzeWFuIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6IjYtR1Q0c1VfeTJzU1RlY2tRdlU4MjFKWDdpRSIsImNsaWVudF9pZCI6InVpIiwic2NvcGUiOlsidWkiXX0.C8osImrqMBeR9XdaRzlrLzX7gT_KYfS4xwyMMe7JYxo'
    const response = await page.request.get(url+'/api/v1/project/arsenhovhannisyan_personal/preference/arsenhovhannisyan/', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    expect(response.status).toBe(200);
});

test('Get Request negative', async ({ page }) => {
    const url = 'https://rp.epam.com';
    const token  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTUxNzU2MzYsInVzZXJfbmFtZSI6ImFyc2VuaG92aGFubmlzeWFuIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6IjYtR1Q0c1VfeTJzU1RlY2tRdlU4MjFKWDdpRSIsImNsaWVudF9pZCI6InVpIiwic2NvcGUiOlsidWkiXX0.C8osImrqMBeR9XdaRzlrLzX7gT_KYfS4xwyMMe7JYxo'
    const response = await page.request.get(url+'/api/v12/project/arsenhovhannisyan_personal/preference/arsenhovhannisyan/', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    expect(response.status).toBe(404);
});

test('Post Request positive', async ({ page }) => {
    const url = 'https://rp.epam.com';
    const token  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTUxNzU2MzYsInVzZXJfbmFtZSI6ImFyc2VuaG92aGFubmlzeWFuIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6IjYtR1Q0c1VfeTJzU1RlY2tRdlU4MjFKWDdpRSIsImNsaWVudF9pZCI6InVpIiwic2NvcGUiOlsidWkiXX0.C8osImrqMBeR9XdaRzlrLzX7gT_KYfS4xwyMMe7JYxo'
    const response = await page.request.post(url+'/api/v1/arsenhovhannisyan_personal/dashboard?page.page=1&page.size=300', {
        data: JSON.stringify({name: "DashboardNameAPI", description: "DescriptionAPI"}),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    expect(response.status).toBe(201);
});

test('Post Request Negative 1', async ({ page }) => {
    const url = 'https://rp.epam.com';
    const token  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTUxNzU2MzYsInVzZXJfbmFtZSI6ImFyc2VuaG92aGFubmlzeWFuIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6IjYtR1Q0c1VfeTJzU1RlY2tRdlU4MjFKWDdpRSIsImNsaWVudF9pZCI6InVpIiwic2NvcGUiOlsidWkiXX0.C8osImrqMBeR9XdaRzlrLzX7gT_KYfS4xwyMMe7JYxo'
    const response = await page.request.post(url+'/api/v1/arsenhovhannisyan_personal/dashboard?page.page=1&page.size=300', {
        data: JSON.stringify({name: "DashboardNameAPI", description: "DescriptionAPI"}),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    expect(response.status).toBe(409);
});

test('Post Request Negative 2', async ({ page }) => {
    const url = 'https://rp.epam.com';
    const token  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTUxNzU2MzYsInVzZXJfbmFtZSI6ImFyc2VuaG92aGFubmlzeWFuIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6IjYtR1Q0c1VfeTJzU1RlY2tRdlU4MjFKWDdpRSIsImNsaWVudF9pZCI6InVpIiwic2NvcGUiOlsidWkiXX0.C8osImrqMBeR9XdaRzlrLzX7gT_KYfS4xwyMMe7JYxo'
    const response = await page.request.post(url+'/api/v1/arsenhovhannisyan_personal/dashboard?page.page=1&page.size=300', {
        data: JSON.stringify({name: "", description: "DescriptionAPI"}),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    expect(response.status).toBe(400);
});

test('Put Request Positive', async ({ page }) => {
    const url = 'https://rp.epam.com';
    const token  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTUxNzU2MzYsInVzZXJfbmFtZSI6ImFyc2VuaG92aGFubmlzeWFuIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6IjYtR1Q0c1VfeTJzU1RlY2tRdlU4MjFKWDdpRSIsImNsaWVudF9pZCI6InVpIiwic2NvcGUiOlsidWkiXX0.C8osImrqMBeR9XdaRzlrLzX7gT_KYfS4xwyMMe7JYxo'
    const response = await page.request.put(url+'/api/v1/arsenhovhannisyan_personal/dashboard/171280', {
        data: JSON.stringify({name: "DashboardNameAPIEdit", description: "DescriptionAPI"}),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    expect(response.status).toBe(200);
});

test('Put Request Negative 1', async ({ page }) => {
    const url = 'https://rp.epam.com';
    const token  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTUxNzU2MzYsInVzZXJfbmFtZSI6ImFyc2VuaG92aGFubmlzeWFuIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6IjYtR1Q0c1VfeTJzU1RlY2tRdlU4MjFKWDdpRSIsImNsaWVudF9pZCI6InVpIiwic2NvcGUiOlsidWkiXX0.C8osImrqMBeR9XdaRzlrLzX7gT_KYfS4xwyMMe7JYxo'
    const response = await page.request.put(url+'/api/v1/arsenhovhannisyan_personal/dashboard/171280', {
        data: JSON.stringify({name: "", description: "DescriptionAPI"}),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    expect(response.status).toBe(400);
});

test('Put Request Negative 2', async ({ page }) => {
    const url = 'https://rp.epam.com';
    const token  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTUxNzU2MzYsInVzZXJfbmFtZSI6ImFyc2VuaG92aGFubmlzeWFuIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6IjYtR1Q0c1VfeTJzU1RlY2tRdlU4MjFKWDdpRSIsImNsaWVudF9pZCI6InVpIiwic2NvcGUiOlsidWkiXX0.C8osImrqMBeR9XdaRzlrLzX7gT_KYfS4xwyMMe7JYxo'
    const response = await page.request.put(url+'/api/v1/arsenhovhannisyan_personal/dashboard/171280', {
        data: JSON.stringify({description: "DescriptionAPI"}),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    expect(response.status).toBe(400);
});


test('Delete Request Positive', async ({ page }) => {
    const url = 'https://rp.epam.com';
    const token  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTUxNzU2MzYsInVzZXJfbmFtZSI6ImFyc2VuaG92aGFubmlzeWFuIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6IjYtR1Q0c1VfeTJzU1RlY2tRdlU4MjFKWDdpRSIsImNsaWVudF9pZCI6InVpIiwic2NvcGUiOlsidWkiXX0.C8osImrqMBeR9XdaRzlrLzX7gT_KYfS4xwyMMe7JYxo'
    const response = await page.request.delete(url+'/api/v1/arsenhovhannisyan_personal/dashboard/171283', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    expect(response.status).toBe(400);
});

test('Delete Request Negative', async ({ page }) => {
    const url = 'https://rp.epam.com';
    const token  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MTUxNzU2MzYsInVzZXJfbmFtZSI6ImFyc2VuaG92aGFubmlzeWFuIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6IjYtR1Q0c1VfeTJzU1RlY2tRdlU4MjFKWDdpRSIsImNsaWVudF9pZCI6InVpIiwic2NvcGUiOlsidWkiXX0.C8osImrqMBeR9XdaRzlrLzX7gT_KYfS4xwyMMe7JYxo'
    const response = await page.request.delete(url+'/api/v1/arsenhovhannisyan_personal/dashboard/171283', {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        },
    });
    expect(response.status).toBe(404);
});
