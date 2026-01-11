import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Put,
  Delete,
  Security,
  Tags,
  Route,
} from "tsoa";
import { DefineModelModel } from "../models/define-model.model";
import { ApiError } from "../utils/api-error";
import { successResponse } from "../utils/response";
import {
  CreateDefineModelDto,
  UpdateDefineModelDto,
} from "../dtos/define-model.dto";
import { defineModelCacheService } from "../services/defineModelCache.service";

@Route("define-models")
@Tags("DefineModel")
export class DefineModelController extends Controller {
  @Post()
  @Security("jwt", ["admin"])
  public async create(@Body() body: CreateDefineModelDto) {
    const existed = await DefineModelModel.findOne({
      ml_id: body.ml_id,
    });
    if (existed) {
      throw new ApiError(409, "Define model already exists");
    }

    const model = await DefineModelModel.create(body);

    // reload cache
    await defineModelCacheService.reload();

    return successResponse(model);
  }

  @Get()
  @Security("jwt")
  public async getAll() {
    const models = await DefineModelModel.find().lean();
    return successResponse(models);
  }

  @Get("{ml_id}")
  @Security("jwt")
  public async getById(@Path() ml_id: string) {
    const model = await DefineModelModel.findOne({ ml_id }).lean();
    if (!model) throw new ApiError(404, "Define model not found");
    return successResponse(model);
  }

  @Put("{ml_id}")
  @Security("jwt", ["admin"])
  public async update(
    @Path() ml_id: string,
    @Body() body: UpdateDefineModelDto
  ) {
    const model = await DefineModelModel.findOneAndUpdate({ ml_id }, body, {
      new: true,
    });

    if (!model) throw new ApiError(404, "Define model not found");

    // reload cache
    await defineModelCacheService.reload();

    return successResponse(model);
  }

  @Delete("{ml_id}")
  @Security("jwt", ["admin"])
  public async delete(@Path() ml_id: string) {
    const model = await DefineModelModel.findOneAndDelete({ ml_id });
    if (!model) throw new ApiError(404, "Define model not found");

    // reload cache
    await defineModelCacheService.reload();

    return successResponse({ message: "Delete successfully" });
  }
}
