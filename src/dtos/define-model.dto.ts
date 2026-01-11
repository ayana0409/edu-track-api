export interface CreateDefineModelDto {
  ml_id: string;
  ml_api_key: string;

  ml_name?: string;
  ml_api_url?: string;
  ml_max_token?: number;
  ml_temperature?: number;
  ml_sys_prompt?: string;
  ml_is_active?: boolean;
}

export interface UpdateDefineModelDto {
  ml_name?: string;
  ml_api_key?: string;
  ml_api_url?: string;
  ml_max_token?: number;
  ml_temperature?: number;
  ml_sys_prompt?: string;
  ml_is_active?: boolean;
}
