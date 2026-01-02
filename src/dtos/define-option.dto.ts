export class CreateDefineOptionDto {
  public op_id!: string;
  public op_name!: string;
  public op_value!: string;
  public op_description?: string;
  public op_is_active?: boolean;
}

export class UpdateDefineOptionDto {
  public op_name?: string;
  public op_value?: string;
  public op_description?: string;
  public op_is_active?: boolean;
}

export class UpdateDefineOptionValueDto {
  public op_value!: string;
}
