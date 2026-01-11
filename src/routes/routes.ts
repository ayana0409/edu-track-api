/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import type { TsoaRoute } from '@tsoa/runtime';
import {  fetchMiddlewares, ExpressTemplateService } from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { DefineOptionController } from './../controllers/define-option.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { DefineModelController } from './../controllers/define-model.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { AuthController } from './../controllers/auth.controller';
import { expressAuthentication } from './../authentication';
// @ts-ignore - no great way to install types from subpackage
import type { Request as ExRequest, Response as ExResponse, RequestHandler, Router } from 'express';

const expressAuthenticationRecasted = expressAuthentication as (req: ExRequest, securityName: string, scopes?: string[], res?: ExResponse) => Promise<any>;


// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
    "ApiStatus": {
        "dataType": "refAlias",
        "type": {"dataType":"union","subSchemas":[{"dataType":"enum","enums":["success"]},{"dataType":"enum","enums":["error"]}],"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "mongoose.ObjectIdToString_Omit_mongoose.Require_id_DocType-and-TVirtuals_.__v__": {
        "dataType": "refAlias",
        "type": {"ref":"mongoose.ObjectIdToString_Omit_mongoose.Require_id_DocType-and-TVirtuals_.__v__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "mongoose.Document_unknown.__.IDefineOption.__.mongoose.DefaultSchemaOptions_": {
        "dataType": "refAlias",
        "type": {"ref":"mongoose.ObjectIdToString_Omit_mongoose.Require_id_DocType-and-TVirtuals_.__v__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IDefineOption": {
        "dataType": "refAlias",
        "type": {"ref":"mongoose.ObjectIdToString_Omit_mongoose.Require_id_DocType-and-TVirtuals_.__v__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "Required___id-mongoose.Types.ObjectId__": {
        "dataType": "refAlias",
        "type": {"dataType":"nestedObjectLiteral","nestedProperties":{},"validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_mongoose.Document_unknown.__.IDefineOption.__.mongoose.DefaultSchemaOptions_-and-IDefineOption-and-Required___id-mongoose.Types.ObjectId__-and-___v-number__": {
        "dataType": "refObject",
        "properties": {
            "status": {"ref":"ApiStatus","required":true},
            "code": {"dataType":"double","required":true},
            "message": {"dataType":"string"},
            "data": {"dataType":"intersection","subSchemas":[{"ref":"mongoose.Document_unknown.__.IDefineOption.__.mongoose.DefaultSchemaOptions_"},{"ref":"IDefineOption"},{"ref":"Required___id-mongoose.Types.ObjectId__"},{"dataType":"nestedObjectLiteral","nestedProperties":{"__v":{"dataType":"double","required":true}}}]},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateDefineOptionDto": {
        "dataType": "refObject",
        "properties": {
            "op_id": {"dataType":"string","required":true},
            "op_name": {"dataType":"string","required":true},
            "op_value": {"dataType":"string","required":true},
            "op_description": {"dataType":"string"},
            "op_is_active": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse__40_IDefineOption-and-Required___id-mongoose.Types.ObjectId__-and-___v-number__41_-Array_": {
        "dataType": "refObject",
        "properties": {
            "status": {"ref":"ApiStatus","required":true},
            "code": {"dataType":"double","required":true},
            "message": {"dataType":"string"},
            "data": {"dataType":"array","array":{"dataType":"intersection","subSchemas":[{"ref":"IDefineOption"},{"ref":"Required___id-mongoose.Types.ObjectId__"},{"dataType":"nestedObjectLiteral","nestedProperties":{"__v":{"dataType":"double","required":true}}}]}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_IDefineOption-and-Required___id-mongoose.Types.ObjectId__-and-___v-number__": {
        "dataType": "refObject",
        "properties": {
            "status": {"ref":"ApiStatus","required":true},
            "code": {"dataType":"double","required":true},
            "message": {"dataType":"string"},
            "data": {"dataType":"intersection","subSchemas":[{"ref":"IDefineOption"},{"ref":"Required___id-mongoose.Types.ObjectId__"},{"dataType":"nestedObjectLiteral","nestedProperties":{"__v":{"dataType":"double","required":true}}}]},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateDefineOptionDto": {
        "dataType": "refObject",
        "properties": {
            "op_name": {"dataType":"string"},
            "op_value": {"dataType":"string"},
            "op_description": {"dataType":"string"},
            "op_is_active": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateDefineOptionValueDto": {
        "dataType": "refObject",
        "properties": {
            "op_value": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse__message-string__": {
        "dataType": "refObject",
        "properties": {
            "status": {"ref":"ApiStatus","required":true},
            "code": {"dataType":"double","required":true},
            "message": {"dataType":"string"},
            "data": {"dataType":"nestedObjectLiteral","nestedProperties":{"message":{"dataType":"string","required":true}}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "mongoose.Document_unknown.__.IDefineModel.__.mongoose.DefaultSchemaOptions_": {
        "dataType": "refAlias",
        "type": {"ref":"mongoose.ObjectIdToString_Omit_mongoose.Require_id_DocType-and-TVirtuals_.__v__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "IDefineModel": {
        "dataType": "refAlias",
        "type": {"ref":"mongoose.ObjectIdToString_Omit_mongoose.Require_id_DocType-and-TVirtuals_.__v__","validators":{}},
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_mongoose.Document_unknown.__.IDefineModel.__.mongoose.DefaultSchemaOptions_-and-IDefineModel-and-Required___id-mongoose.Types.ObjectId__-and-___v-number__": {
        "dataType": "refObject",
        "properties": {
            "status": {"ref":"ApiStatus","required":true},
            "code": {"dataType":"double","required":true},
            "message": {"dataType":"string"},
            "data": {"dataType":"intersection","subSchemas":[{"ref":"mongoose.Document_unknown.__.IDefineModel.__.mongoose.DefaultSchemaOptions_"},{"ref":"IDefineModel"},{"ref":"Required___id-mongoose.Types.ObjectId__"},{"dataType":"nestedObjectLiteral","nestedProperties":{"__v":{"dataType":"double","required":true}}}]},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "CreateDefineModelDto": {
        "dataType": "refObject",
        "properties": {
            "ml_id": {"dataType":"string","required":true},
            "ml_api_key": {"dataType":"string","required":true},
            "ml_name": {"dataType":"string"},
            "ml_api_url": {"dataType":"string"},
            "ml_max_token": {"dataType":"double"},
            "ml_temperature": {"dataType":"double"},
            "ml_sys_prompt": {"dataType":"string"},
            "ml_is_active": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse__40_IDefineModel-and-Required___id-mongoose.Types.ObjectId__-and-___v-number__41_-Array_": {
        "dataType": "refObject",
        "properties": {
            "status": {"ref":"ApiStatus","required":true},
            "code": {"dataType":"double","required":true},
            "message": {"dataType":"string"},
            "data": {"dataType":"array","array":{"dataType":"intersection","subSchemas":[{"ref":"IDefineModel"},{"ref":"Required___id-mongoose.Types.ObjectId__"},{"dataType":"nestedObjectLiteral","nestedProperties":{"__v":{"dataType":"double","required":true}}}]}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse_IDefineModel-and-Required___id-mongoose.Types.ObjectId__-and-___v-number__": {
        "dataType": "refObject",
        "properties": {
            "status": {"ref":"ApiStatus","required":true},
            "code": {"dataType":"double","required":true},
            "message": {"dataType":"string"},
            "data": {"dataType":"intersection","subSchemas":[{"ref":"IDefineModel"},{"ref":"Required___id-mongoose.Types.ObjectId__"},{"dataType":"nestedObjectLiteral","nestedProperties":{"__v":{"dataType":"double","required":true}}}]},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "UpdateDefineModelDto": {
        "dataType": "refObject",
        "properties": {
            "ml_name": {"dataType":"string"},
            "ml_api_key": {"dataType":"string"},
            "ml_api_url": {"dataType":"string"},
            "ml_max_token": {"dataType":"double"},
            "ml_temperature": {"dataType":"double"},
            "ml_sys_prompt": {"dataType":"string"},
            "ml_is_active": {"dataType":"boolean"},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "RegisterRequestBody": {
        "dataType": "refObject",
        "properties": {
            "username": {"dataType":"string","required":true},
            "password": {"dataType":"string","required":true},
            "fullname": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "LoginRequestBody": {
        "dataType": "refObject",
        "properties": {
            "username": {"dataType":"string","required":true},
            "password": {"dataType":"string","required":true},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
    "ApiResponse__accessToken-string--refreshToken-string__": {
        "dataType": "refObject",
        "properties": {
            "status": {"ref":"ApiStatus","required":true},
            "code": {"dataType":"double","required":true},
            "message": {"dataType":"string"},
            "data": {"dataType":"nestedObjectLiteral","nestedProperties":{"refreshToken":{"dataType":"string","required":true},"accessToken":{"dataType":"string","required":true}}},
        },
        "additionalProperties": false,
    },
    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {"noImplicitAdditionalProperties":"throw-on-extras","bodyCoercion":true});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa




export function RegisterRoutes(app: Router) {

    // ###########################################################################################################
    //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
    //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
    // ###########################################################################################################


    
        const argsDefineOptionController_create: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"CreateDefineOptionDto"},
        };
        app.post('/define-options',
            authenticateMiddleware([{"jwt":["admin"]}]),
            ...(fetchMiddlewares<RequestHandler>(DefineOptionController)),
            ...(fetchMiddlewares<RequestHandler>(DefineOptionController.prototype.create)),

            async function DefineOptionController_create(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDefineOptionController_create, request, response });

                const controller = new DefineOptionController();

              await templateService.apiHandler({
                methodName: 'create',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDefineOptionController_getAll: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/define-options',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(DefineOptionController)),
            ...(fetchMiddlewares<RequestHandler>(DefineOptionController.prototype.getAll)),

            async function DefineOptionController_getAll(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDefineOptionController_getAll, request, response });

                const controller = new DefineOptionController();

              await templateService.apiHandler({
                methodName: 'getAll',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDefineOptionController_getById: Record<string, TsoaRoute.ParameterSchema> = {
                op_id: {"in":"path","name":"op_id","required":true,"dataType":"string"},
        };
        app.get('/define-options/:op_id',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(DefineOptionController)),
            ...(fetchMiddlewares<RequestHandler>(DefineOptionController.prototype.getById)),

            async function DefineOptionController_getById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDefineOptionController_getById, request, response });

                const controller = new DefineOptionController();

              await templateService.apiHandler({
                methodName: 'getById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDefineOptionController_update: Record<string, TsoaRoute.ParameterSchema> = {
                op_id: {"in":"path","name":"op_id","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"ref":"UpdateDefineOptionDto"},
        };
        app.put('/define-options/:op_id',
            authenticateMiddleware([{"jwt":["admin"]}]),
            ...(fetchMiddlewares<RequestHandler>(DefineOptionController)),
            ...(fetchMiddlewares<RequestHandler>(DefineOptionController.prototype.update)),

            async function DefineOptionController_update(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDefineOptionController_update, request, response });

                const controller = new DefineOptionController();

              await templateService.apiHandler({
                methodName: 'update',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDefineOptionController_updateValue: Record<string, TsoaRoute.ParameterSchema> = {
                op_id: {"in":"path","name":"op_id","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"ref":"UpdateDefineOptionValueDto"},
        };
        app.patch('/define-options/:op_id/value',
            authenticateMiddleware([{"jwt":["admin"]}]),
            ...(fetchMiddlewares<RequestHandler>(DefineOptionController)),
            ...(fetchMiddlewares<RequestHandler>(DefineOptionController.prototype.updateValue)),

            async function DefineOptionController_updateValue(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDefineOptionController_updateValue, request, response });

                const controller = new DefineOptionController();

              await templateService.apiHandler({
                methodName: 'updateValue',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDefineOptionController_delete: Record<string, TsoaRoute.ParameterSchema> = {
                op_id: {"in":"path","name":"op_id","required":true,"dataType":"string"},
        };
        app.delete('/define-options/:op_id',
            authenticateMiddleware([{"jwt":["admin"]}]),
            ...(fetchMiddlewares<RequestHandler>(DefineOptionController)),
            ...(fetchMiddlewares<RequestHandler>(DefineOptionController.prototype.delete)),

            async function DefineOptionController_delete(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDefineOptionController_delete, request, response });

                const controller = new DefineOptionController();

              await templateService.apiHandler({
                methodName: 'delete',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDefineModelController_create: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"CreateDefineModelDto"},
        };
        app.post('/define-models',
            authenticateMiddleware([{"jwt":["admin"]}]),
            ...(fetchMiddlewares<RequestHandler>(DefineModelController)),
            ...(fetchMiddlewares<RequestHandler>(DefineModelController.prototype.create)),

            async function DefineModelController_create(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDefineModelController_create, request, response });

                const controller = new DefineModelController();

              await templateService.apiHandler({
                methodName: 'create',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDefineModelController_getAll: Record<string, TsoaRoute.ParameterSchema> = {
        };
        app.get('/define-models',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(DefineModelController)),
            ...(fetchMiddlewares<RequestHandler>(DefineModelController.prototype.getAll)),

            async function DefineModelController_getAll(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDefineModelController_getAll, request, response });

                const controller = new DefineModelController();

              await templateService.apiHandler({
                methodName: 'getAll',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDefineModelController_getById: Record<string, TsoaRoute.ParameterSchema> = {
                ml_id: {"in":"path","name":"ml_id","required":true,"dataType":"string"},
        };
        app.get('/define-models/:ml_id',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(DefineModelController)),
            ...(fetchMiddlewares<RequestHandler>(DefineModelController.prototype.getById)),

            async function DefineModelController_getById(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDefineModelController_getById, request, response });

                const controller = new DefineModelController();

              await templateService.apiHandler({
                methodName: 'getById',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDefineModelController_update: Record<string, TsoaRoute.ParameterSchema> = {
                ml_id: {"in":"path","name":"ml_id","required":true,"dataType":"string"},
                body: {"in":"body","name":"body","required":true,"ref":"UpdateDefineModelDto"},
        };
        app.put('/define-models/:ml_id',
            authenticateMiddleware([{"jwt":["admin"]}]),
            ...(fetchMiddlewares<RequestHandler>(DefineModelController)),
            ...(fetchMiddlewares<RequestHandler>(DefineModelController.prototype.update)),

            async function DefineModelController_update(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDefineModelController_update, request, response });

                const controller = new DefineModelController();

              await templateService.apiHandler({
                methodName: 'update',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsDefineModelController_delete: Record<string, TsoaRoute.ParameterSchema> = {
                ml_id: {"in":"path","name":"ml_id","required":true,"dataType":"string"},
        };
        app.delete('/define-models/:ml_id',
            authenticateMiddleware([{"jwt":["admin"]}]),
            ...(fetchMiddlewares<RequestHandler>(DefineModelController)),
            ...(fetchMiddlewares<RequestHandler>(DefineModelController.prototype.delete)),

            async function DefineModelController_delete(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsDefineModelController_delete, request, response });

                const controller = new DefineModelController();

              await templateService.apiHandler({
                methodName: 'delete',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthController_register: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"RegisterRequestBody"},
        };
        app.post('/auth/register',
            ...(fetchMiddlewares<RequestHandler>(AuthController)),
            ...(fetchMiddlewares<RequestHandler>(AuthController.prototype.register)),

            async function AuthController_register(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_register, request, response });

                const controller = new AuthController();

              await templateService.apiHandler({
                methodName: 'register',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 201,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthController_login: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"ref":"LoginRequestBody"},
        };
        app.post('/auth/login',
            ...(fetchMiddlewares<RequestHandler>(AuthController)),
            ...(fetchMiddlewares<RequestHandler>(AuthController.prototype.login)),

            async function AuthController_login(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_login, request, response });

                const controller = new AuthController();

              await templateService.apiHandler({
                methodName: 'login',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: 200,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthController_refreshToken: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"refreshToken":{"dataType":"string","required":true}}},
        };
        app.post('/auth/refresh-token',
            ...(fetchMiddlewares<RequestHandler>(AuthController)),
            ...(fetchMiddlewares<RequestHandler>(AuthController.prototype.refreshToken)),

            async function AuthController_refreshToken(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_refreshToken, request, response });

                const controller = new AuthController();

              await templateService.apiHandler({
                methodName: 'refreshToken',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthController_changePassword: Record<string, TsoaRoute.ParameterSchema> = {
                req: {"in":"request","name":"req","required":true,"dataType":"object"},
                body: {"in":"body","name":"body","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"newPassword":{"dataType":"string","required":true},"oldPassword":{"dataType":"string","required":true}}},
        };
        app.post('/auth/change-password',
            authenticateMiddleware([{"jwt":[]}]),
            ...(fetchMiddlewares<RequestHandler>(AuthController)),
            ...(fetchMiddlewares<RequestHandler>(AuthController.prototype.changePassword)),

            async function AuthController_changePassword(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_changePassword, request, response });

                const controller = new AuthController();

              await templateService.apiHandler({
                methodName: 'changePassword',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthController_resetPassword: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"userId":{"dataType":"string","required":true}}},
        };
        app.post('/auth/reset-password',
            authenticateMiddleware([{"jwt":["admin"]}]),
            ...(fetchMiddlewares<RequestHandler>(AuthController)),
            ...(fetchMiddlewares<RequestHandler>(AuthController.prototype.resetPassword)),

            async function AuthController_resetPassword(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_resetPassword, request, response });

                const controller = new AuthController();

              await templateService.apiHandler({
                methodName: 'resetPassword',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        const argsAuthController_loginWithGoogle: Record<string, TsoaRoute.ParameterSchema> = {
                body: {"in":"body","name":"body","required":true,"dataType":"nestedObjectLiteral","nestedProperties":{"idToken":{"dataType":"string","required":true}}},
        };
        app.post('/auth/google',
            ...(fetchMiddlewares<RequestHandler>(AuthController)),
            ...(fetchMiddlewares<RequestHandler>(AuthController.prototype.loginWithGoogle)),

            async function AuthController_loginWithGoogle(request: ExRequest, response: ExResponse, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            let validatedArgs: any[] = [];
            try {
                validatedArgs = templateService.getValidatedArgs({ args: argsAuthController_loginWithGoogle, request, response });

                const controller = new AuthController();

              await templateService.apiHandler({
                methodName: 'loginWithGoogle',
                controller,
                response,
                next,
                validatedArgs,
                successStatus: undefined,
              });
            } catch (err) {
                return next(err);
            }
        });
        // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa


    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

    function authenticateMiddleware(security: TsoaRoute.Security[] = []) {
        return async function runAuthenticationMiddleware(request: any, response: any, next: any) {

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            // keep track of failed auth attempts so we can hand back the most
            // recent one.  This behavior was previously existing so preserving it
            // here
            const failedAttempts: any[] = [];
            const pushAndRethrow = (error: any) => {
                failedAttempts.push(error);
                throw error;
            };

            const secMethodOrPromises: Promise<any>[] = [];
            for (const secMethod of security) {
                if (Object.keys(secMethod).length > 1) {
                    const secMethodAndPromises: Promise<any>[] = [];

                    for (const name in secMethod) {
                        secMethodAndPromises.push(
                            expressAuthenticationRecasted(request, name, secMethod[name], response)
                                .catch(pushAndRethrow)
                        );
                    }

                    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

                    secMethodOrPromises.push(Promise.all(secMethodAndPromises)
                        .then(users => { return users[0]; }));
                } else {
                    for (const name in secMethod) {
                        secMethodOrPromises.push(
                            expressAuthenticationRecasted(request, name, secMethod[name], response)
                                .catch(pushAndRethrow)
                        );
                    }
                }
            }

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

            try {
                request['user'] = await Promise.any(secMethodOrPromises);

                // Response was sent in middleware, abort
                if (response.writableEnded) {
                    return;
                }

                next();
            }
            catch(err) {
                // Show most recent error as response
                const error = failedAttempts.pop();
                error.status = error.status || 401;

                // Response was sent in middleware, abort
                if (response.writableEnded) {
                    return;
                }
                next(error);
            }

            // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
        }
    }

    // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
