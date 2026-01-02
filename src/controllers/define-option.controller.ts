import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Put,
  Patch,
  Delete,
  Security,
  Tags,
  Route,
} from "tsoa";
import { DefineOptionModel } from "../models/define-option.model";
import { ApiError } from "../utils/api-error";
import { successResponse } from "../utils/response";
import {
  CreateDefineOptionDto,
  UpdateDefineOptionDto,
  UpdateDefineOptionValueDto,
} from "../dtos/define-option.dto";
import { parseEnvValue } from "../utils/envOption";
import { defineOptionCacheService } from "../services/defineOptionCache.service";

@Route("define-options")
@Tags("DefineOption")
export class DefineOptionController extends Controller {
  @Post()
  @Security("jwt", ["admin"])
  public async create(@Body() body: CreateDefineOptionDto) {
    const existed = await DefineOptionModel.findOne({ op_id: body.op_id });
    if (existed) throw new ApiError(409, "Define option already exists");

    // Parse the op_value
    body.op_value = parseEnvValue(body.op_value);
    const dataToSave = {
      ...body,
      op_value: parseEnvValue(body.op_value),
    };

    const option = await DefineOptionModel.create(dataToSave);

    // reload cache
    await defineOptionCacheService.reload();

    return successResponse(option);
  }

  @Get()
  @Security("jwt")
  public async getAll() {
    const options = await DefineOptionModel.find().lean();
    return successResponse(options);
  }

  @Get("{op_id}")
  @Security("jwt")
  public async getById(@Path() op_id: string) {
    const option = await DefineOptionModel.findOne({ op_id }).lean();
    if (!option) throw new ApiError(404, "Define option not found");
    return successResponse(option);
  }

  @Put("{op_id}")
  @Security("jwt", ["admin"])
  public async update(
    @Path() op_id: string,
    @Body() body: UpdateDefineOptionDto
  ) {
    if (body.op_value !== undefined) {
      body.op_value = parseEnvValue(body.op_value);
    }

    const option = await DefineOptionModel.findOneAndUpdate({ op_id }, body, {
      new: true,
    });

    if (!option) throw new ApiError(404, "Define option not found");

    // reload cache
    await defineOptionCacheService.reload();

    return successResponse(option);
  }

  @Patch("{op_id}/value")
  @Security("jwt", ["admin"])
  public async updateValue(
    @Path() op_id: string,
    @Body() body: UpdateDefineOptionValueDto
  ) {
    if (body.op_value === undefined) {
      throw new ApiError(400, "op_value is required");
    }

    const option = await DefineOptionModel.findOneAndUpdate(
      { op_id },
      { op_value: parseEnvValue(body.op_value) },
      { new: true }
    );

    if (!option) throw new ApiError(404, "Define option not found");

    // reload cache
    await defineOptionCacheService.reload();

    return successResponse(option);
  }

  @Delete("{op_id}")
  @Security("jwt", ["admin"])
  public async delete(@Path() op_id: string) {
    const option = await DefineOptionModel.findOneAndDelete({ op_id });
    if (!option) throw new ApiError(404, "Define option not found");

    // reload cache
    await defineOptionCacheService.reload();

    return successResponse({ message: "Delete successfully" });
  }
}
