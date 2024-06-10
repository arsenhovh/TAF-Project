export const dataSchemaPost = {
    type: "object",
    properties: {
        description: {type: "string"},
        owner: {type: "string"},
        id: {type: "integer"},
        name: {type: "string"},
        widgets: {type: "array", items: {type: "object"}},
    },
    required: ["description", "owner", "id", "name", "widgets"],
    additionalProperties: false
};

export const dataSchemaGet = {
    type: "object",
    properties: {
        content: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    owner: { type: "string" },
                    id: { type: "number" },
                    name: { type: "string" },
                    description: { type: "string", nullable: true },
                    widgets: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                widgetName: { type: "string" },
                                widgetId: { type: "number" },
                                widgetType: { type: "string" },
                                widgetSize: {
                                    type: "object",
                                    properties: {
                                        width: { type: "number" },
                                        height: { type: "number" }
                                    },
                                    required: [ "width", "height" ]
                                },
                                widgetPosition: {
                                    type: "object",
                                    properties: {
                                        positionX: { type: "number" },
                                        positionY: { type: "number" }
                                    },
                                    required: [ "positionX", "positionY" ]
                                },
                                widgetOptions: { type: "object" } // Here you might need to provide more detailed schema
                            },
                            required: [ "widgetName", "widgetId", "widgetType", "widgetSize", "widgetPosition", "widgetOptions" ]
                        }
                    }
                },
                required: [ "owner", "id", "name", "widgets" ]
            }
        },
        page: {
            type: "object",
            properties: {
                number: { type: "number" },
                size: { type: "number" },
                totalElements: { type: "number" },
                totalPages: { type: "number" }
            },
            required: [ "number", "size", "totalElements", "totalPages" ]
        }
    },
    required: [ "content", "page" ],
    additionalProperties: false
};